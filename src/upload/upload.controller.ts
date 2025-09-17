import {
    Controller,
    Post,
    UseInterceptors,
    UploadedFile,
    UploadedFiles,
    Req,
    BadRequestException,
    Get,
    Param,
    Res,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
    ApiConsumes,
    ApiBody,
    ApiParam,
} from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UploadService, FileType } from './upload.service';
import {
    FileUploadResponseDto,
    MultipleFileUploadResponseDto,
    FileUploadErrorDto,
} from './dto/upload-response.dto';
import { join } from 'path';
import { existsSync } from 'fs';

@ApiTags('File Upload')
@Controller('upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    // IMAGE UPLOAD ENDPOINTS

    @Post('image')
    @ApiOperation({ summary: 'Upload single image file' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Image file upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Image file (jpg, jpeg, png, gif, webp, svg) - Max 5MB',
                },
            },
            required: ['file'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'Image uploaded successfully',
        type: FileUploadResponseDto,
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request - Invalid file type or size',
        type: FileUploadErrorDto,
    })
    @UseInterceptors(
        FileInterceptor('file', {
            ...new UploadService().getMulterOptions({
                fileType: FileType.IMAGE,
                maxSize: 5 * 1024 * 1024, // 5MB
            }),
        }),
    )
    async uploadImage(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ): Promise<FileUploadResponseDto> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        const fileUrl = this.uploadService.generateFileUrl(req, file.filename, FileType.IMAGE);
        return this.uploadService.formatFileResponse(file, fileUrl);
    }

    @Post('images')
    @ApiOperation({ summary: 'Upload multiple image files' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Multiple image files upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                    description: 'Image files (jpg, jpeg, png, gif, webp, svg) - Max 5MB each, up to 10 files',
                },
            },
            required: ['files'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'Images uploaded successfully',
        type: MultipleFileUploadResponseDto,
    })
    @UseInterceptors(
        FilesInterceptor('files', 10, {
            ...new UploadService().getMulterOptions({
                fileType: FileType.IMAGE,
                maxSize: 5 * 1024 * 1024, // 5MB
            }),
        }),
    )
    async uploadImages(
        @UploadedFiles() files: Express.Multer.File[],
        @Req() req: Request,
    ): Promise<MultipleFileUploadResponseDto> {
        if (!files || files.length === 0) {
            throw new BadRequestException('No files uploaded');
        }

        const uploadedFiles = this.uploadService.formatMultipleFilesResponse(
            files,
            req,
            FileType.IMAGE,
        );

        return {
            files: uploadedFiles,
            count: files.length,
            message: 'Images uploaded successfully',
        };
    }

    // DOCUMENT UPLOAD ENDPOINTS

    @Post('document')
    @ApiOperation({ summary: 'Upload single document file' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Document file upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Document file (pdf, doc, docx, txt, rtf, odt) - Max 10MB',
                },
            },
            required: ['file'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'Document uploaded successfully',
        type: FileUploadResponseDto,
    })
    @UseInterceptors(
        FileInterceptor('file', {
            ...new UploadService().getMulterOptions({
                fileType: FileType.DOCUMENT,
                maxSize: 10 * 1024 * 1024, // 10MB
            }),
        }),
    )
    async uploadDocument(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ): Promise<FileUploadResponseDto> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        const fileUrl = this.uploadService.generateFileUrl(req, file.filename, FileType.DOCUMENT);
        return this.uploadService.formatFileResponse(file, fileUrl);
    }

    @Post('documents')
    @ApiOperation({ summary: 'Upload multiple document files' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Multiple document files upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                files: {
                    type: 'array',
                    items: {
                        type: 'string',
                        format: 'binary',
                    },
                    description: 'Document files (pdf, doc, docx, txt, rtf, odt) - Max 10MB each, up to 5 files',
                },
            },
            required: ['files'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'Documents uploaded successfully',
        type: MultipleFileUploadResponseDto,
    })
    @UseInterceptors(
        FilesInterceptor('files', 5, {
            ...new UploadService().getMulterOptions({
                fileType: FileType.DOCUMENT,
                maxSize: 10 * 1024 * 1024, // 10MB
            }),
        }),
    )
    async uploadDocuments(
        @UploadedFiles() files: Express.Multer.File[],
        @Req() req: Request,
    ): Promise<MultipleFileUploadResponseDto> {
        if (!files || files.length === 0) {
            throw new BadRequestException('No files uploaded');
        }

        const uploadedFiles = this.uploadService.formatMultipleFilesResponse(
            files,
            req,
            FileType.DOCUMENT,
        );

        return {
            files: uploadedFiles,
            count: files.length,
            message: 'Documents uploaded successfully',
        };
    }

    // CV/RESUME SPECIFIC ENDPOINT

    @Post('cv')
    @ApiOperation({ summary: 'Upload CV/Resume file (PDF or DOC only)' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'CV/Resume file upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'CV/Resume file (pdf, doc, docx only) - Max 5MB',
                },
            },
            required: ['file'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'CV uploaded successfully',
        type: FileUploadResponseDto,
    })
    @UseInterceptors(
        FileInterceptor('file', {
            ...new UploadService().getMulterOptions({
                fileType: FileType.DOCUMENT,
                maxSize: 5 * 1024 * 1024, // 5MB
                allowedExtensions: ['.pdf', '.doc', '.docx'],
            }),
        }),
    )
    async uploadCV(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ): Promise<FileUploadResponseDto> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        // Validate CV specific file types
        const allowedExtensions = ['.pdf', '.doc', '.docx'];
        const fileExt = file.originalname.toLowerCase().slice(file.originalname.lastIndexOf('.'));
        
        if (!allowedExtensions.includes(fileExt)) {
            throw new BadRequestException('CV must be PDF, DOC, or DOCX format');
        }

        const fileUrl = this.uploadService.generateFileUrl(req, file.filename, FileType.DOCUMENT);
        return this.uploadService.formatFileResponse(file, fileUrl);
    }

    // PORTFOLIO IMAGE SPECIFIC ENDPOINT

    @Post('portfolio-image')
    @ApiOperation({ summary: 'Upload portfolio project image' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'Portfolio image upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Portfolio image file (jpg, jpeg, png, webp) - Max 3MB',
                },
            },
            required: ['file'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'Portfolio image uploaded successfully',
        type: FileUploadResponseDto,
    })
    @UseInterceptors(
        FileInterceptor('file', {
            ...new UploadService().getMulterOptions({
                fileType: FileType.IMAGE,
                maxSize: 3 * 1024 * 1024, // 3MB
                allowedExtensions: ['.jpg', '.jpeg', '.png', '.webp'],
            }),
        }),
    )
    async uploadPortfolioImage(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ): Promise<FileUploadResponseDto> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        // Validate portfolio image specific file types
        const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
        const fileExt = file.originalname.toLowerCase().slice(file.originalname.lastIndexOf('.'));
        
        if (!allowedExtensions.includes(fileExt)) {
            throw new BadRequestException('Portfolio image must be JPG, JPEG, PNG, or WEBP format');
        }

        const fileUrl = this.uploadService.generateFileUrl(req, file.filename, FileType.IMAGE);
        return this.uploadService.formatFileResponse(file, fileUrl);
    }

    // GENERAL FILE UPLOAD

    @Post('file')
    @ApiOperation({ summary: 'Upload general file (mixed types allowed)' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        description: 'General file upload',
        type: 'multipart/form-data',
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                    description: 'Any supported file type - Max 10MB',
                },
            },
            required: ['file'],
        },
    })
    @ApiResponse({
        status: 201,
        description: 'File uploaded successfully',
        type: FileUploadResponseDto,
    })
    @UseInterceptors(
        FileInterceptor('file', {
            ...new UploadService().getMulterOptions({
                fileType: FileType.ANY,
                maxSize: 10 * 1024 * 1024, // 10MB
            }),
        }),
    )
    async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Req() req: Request,
    ): Promise<FileUploadResponseDto> {
        if (!file) {
            throw new BadRequestException('No file uploaded');
        }

        const fileUrl = this.uploadService.generateFileUrl(req, file.filename, FileType.ANY);
        return this.uploadService.formatFileResponse(file, fileUrl);
    }

    // FILE SERVING ENDPOINT

    @Get(':type/:filename')
    @ApiOperation({ summary: 'Serve uploaded files' })
    @ApiParam({ name: 'type', description: 'File type directory (images, documents, videos, audio, files)' })
    @ApiParam({ name: 'filename', description: 'Filename to serve' })
    @ApiResponse({ status: 200, description: 'File served successfully' })
    @ApiResponse({ status: 404, description: 'File not found' })
    async serveFile(
        @Param('type') type: string,
        @Param('filename') filename: string,
        @Res() res: Response,
    ): Promise<void> {
        const filePath = join(process.cwd(), 'uploads', type, filename);
        
        if (!existsSync(filePath)) {
            res.status(404).json({ message: 'File not found' });
            return;
        }

        res.sendFile(filePath);
    }
}