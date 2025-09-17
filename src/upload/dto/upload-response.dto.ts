import { ApiProperty } from '@nestjs/swagger';

export class FileUploadResponseDto {
    @ApiProperty({
        description: 'Generated filename on server',
        example: 'image-1703123456789-123456789.jpg'
    })
    filename: string;

    @ApiProperty({
        description: 'Original filename from upload',
        example: 'my-photo.jpg'
    })
    originalName: string;

    @ApiProperty({
        description: 'MIME type of the uploaded file',
        example: 'image/jpeg'
    })
    mimetype: string;

    @ApiProperty({
        description: 'File size in bytes',
        example: 1024000
    })
    size: number;

    @ApiProperty({
        description: 'Public URL to access the uploaded file',
        example: 'https://api.example.com/uploads/images/image-1703123456789-123456789.jpg'
    })
    url: string;

    @ApiProperty({
        description: 'Upload timestamp',
        example: '2024-01-01T12:00:00.000Z'
    })
    uploadedAt: string;
}

export class MultipleFileUploadResponseDto {
    @ApiProperty({
        description: 'Array of uploaded file information',
        type: [FileUploadResponseDto]
    })
    files: FileUploadResponseDto[];

    @ApiProperty({
        description: 'Total number of files uploaded',
        example: 3
    })
    count: number;

    @ApiProperty({
        description: 'Upload completion message',
        example: 'Files uploaded successfully'
    })
    message: string;
}

export class FileUploadErrorDto {
    @ApiProperty({
        description: 'Error message',
        example: 'File size too large. Maximum allowed size is 5MB'
    })
    message: string;

    @ApiProperty({
        description: 'Error code',
        example: 'FILE_TOO_LARGE'
    })
    error: string;

    @ApiProperty({
        description: 'HTTP status code',
        example: 400
    })
    statusCode: number;
}