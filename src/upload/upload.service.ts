import { Injectable, BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

export enum FileType {
    IMAGE = 'image',
    DOCUMENT = 'document',
    VIDEO = 'video',
    AUDIO = 'audio',
    ANY = 'any'
}

export interface FileUploadOptions {
    fileType: FileType;
    maxSize?: number; // in bytes
    allowedExtensions?: string[];
    destination?: string;
}

@Injectable()
export class UploadService {
    private readonly uploadsDir = join(process.cwd(), 'uploads');

    constructor() {
        // Ensure uploads directory exists
        if (!existsSync(this.uploadsDir)) {
            mkdirSync(this.uploadsDir, { recursive: true });
        }
    }

    /**
     * Get multer configuration for file uploads
     */
    getMulterOptions(options: FileUploadOptions): MulterOptions {
        const destination = options.destination || this.getDestination(options.fileType);
        
        // Ensure destination directory exists
        const fullDestination = join(this.uploadsDir, destination);
        if (!existsSync(fullDestination)) {
            mkdirSync(fullDestination, { recursive: true });
        }

        return {
            storage: diskStorage({
                destination: fullDestination,
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    const ext = extname(file.originalname);
                    const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
                    callback(null, filename);
                },
            }),
            fileFilter: (req, file, callback) => {
                const validation = this.validateFile(file as any, options);
                if (validation.isValid) {
                    callback(null, true);
                } else {
                    callback(new BadRequestException(validation.error), false);
                }
            },
            limits: {
                fileSize: options.maxSize || this.getDefaultMaxSize(options.fileType),
            },
        };
    }

    /**
     * Validate uploaded file
     */
    private validateFile(file: Express.Multer.File, options: FileUploadOptions): { isValid: boolean; error?: string } {
        const ext = extname(file.originalname).toLowerCase();
        const allowedExtensions = options.allowedExtensions || this.getAllowedExtensions(options.fileType);

        // Check file extension
        if (!allowedExtensions.includes(ext)) {
            return {
                isValid: false,
                error: `Invalid file type. Allowed extensions: ${allowedExtensions.join(', ')}`
            };
        }

        // Check MIME type
        const allowedMimeTypes = this.getAllowedMimeTypes(options.fileType);
        if (!allowedMimeTypes.includes(file.mimetype)) {
            return {
                isValid: false,
                error: `Invalid MIME type. File type not allowed.`
            };
        }

        return { isValid: true };
    }

    /**
     * Get destination folder based on file type
     */
    private getDestination(fileType: FileType): string {
        switch (fileType) {
            case FileType.IMAGE:
                return 'images';
            case FileType.DOCUMENT:
                return 'documents';
            case FileType.VIDEO:
                return 'videos';
            case FileType.AUDIO:
                return 'audio';
            default:
                return 'files';
        }
    }

    /**
     * Get default max file size based on file type
     */
    private getDefaultMaxSize(fileType: FileType): number {
        switch (fileType) {
            case FileType.IMAGE:
                return 5 * 1024 * 1024; // 5MB
            case FileType.DOCUMENT:
                return 10 * 1024 * 1024; // 10MB
            case FileType.VIDEO:
                return 100 * 1024 * 1024; // 100MB
            case FileType.AUDIO:
                return 20 * 1024 * 1024; // 20MB
            default:
                return 10 * 1024 * 1024; // 10MB
        }
    }

    /**
     * Get allowed file extensions based on file type
     */
    private getAllowedExtensions(fileType: FileType): string[] {
        switch (fileType) {
            case FileType.IMAGE:
                return ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
            case FileType.DOCUMENT:
                return ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'];
            case FileType.VIDEO:
                return ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.webm'];
            case FileType.AUDIO:
                return ['.mp3', '.wav', '.ogg', '.m4a', '.aac'];
            default:
                return ['.jpg', '.jpeg', '.png', '.gif', '.pdf', '.doc', '.docx', '.txt'];
        }
    }

    /**
     * Get allowed MIME types based on file type
     */
    private getAllowedMimeTypes(fileType: FileType): string[] {
        switch (fileType) {
            case FileType.IMAGE:
                return [
                    'image/jpeg',
                    'image/png',
                    'image/gif',
                    'image/webp',
                    'image/svg+xml'
                ];
            case FileType.DOCUMENT:
                return [
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                    'text/plain',
                    'application/rtf',
                    'application/vnd.oasis.opendocument.text'
                ];
            case FileType.VIDEO:
                return [
                    'video/mp4',
                    'video/avi',
                    'video/quicktime',
                    'video/x-ms-wmv',
                    'video/x-flv',
                    'video/webm'
                ];
            case FileType.AUDIO:
                return [
                    'audio/mpeg',
                    'audio/wav',
                    'audio/ogg',
                    'audio/mp4',
                    'audio/aac'
                ];
            default:
                return [
                    'image/jpeg',
                    'image/png',
                    'application/pdf',
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                ];
        }
    }

    /**
     * Generate file URL for response
     */
    generateFileUrl(req: any, filename: string, fileType: FileType): string {
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const destination = this.getDestination(fileType);
        return `${baseUrl}/uploads/${destination}/${filename}`;
    }

    /**
     * Format file response data
     */
    formatFileResponse(file: Express.Multer.File, fileUrl: string) {
        return {
            filename: file.filename,
            originalName: file.originalname,
            mimetype: file.mimetype,
            size: file.size,
            url: fileUrl,
            uploadedAt: new Date().toISOString()
        };
    }

    /**
     * Format multiple files response data
     */
    formatMultipleFilesResponse(files: Express.Multer.File[], req: any, fileType: FileType) {
        return files.map(file => {
            const fileUrl = this.generateFileUrl(req, file.filename, fileType);
            return this.formatFileResponse(file, fileUrl);
        });
    }
}