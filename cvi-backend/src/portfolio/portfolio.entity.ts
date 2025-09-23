import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum PortfolioStatus {
    ACTIVE = 'active',
    CLOSED = 'closed',
    PENDING = 'pending',
}

export enum PortfolioCategory {
    WEB_DEVELOPMENT = 'web_development',
    MOBILE_APP = 'mobile_app',
    UI_UX_DESIGN = 'ui_ux_design',
    SOFTWARE_DEVELOPMENT = 'software_development',
    DIGITAL_MARKETING = 'digital_marketing',
    BRANDING = 'branding',
    OTHER = 'other',
}

@Entity('portfolios')
export class Portfolio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column('text', { nullable: true })
    shortDescription?: string;

    @Column()
    imageUrl: string;

    @Column('text', { nullable: true })
    galleryImages?: string; // JSON string of image URLs array

    @Column({ nullable: true })
    projectUrl?: string;

    @Column({ nullable: true })
    clientName?: string;

    @Column({
        type: 'enum',
        enum: PortfolioCategory,
        default: PortfolioCategory.WEB_DEVELOPMENT,
    })
    category: PortfolioCategory;

    @Column('simple-array', { nullable: true })
    technologies?: string[]; // Array of technology names

    @Column({ type: 'date', nullable: true })
    completionDate?: Date;

    @Column('text', { nullable: true })
    challenges?: string;

    @Column('text', { nullable: true })
    solution?: string;

    @Column('text', { nullable: true })
    results?: string;

    @Column({ default: false })
    isFeatured: boolean;

    @Column({ default: 0 })
    sortOrder: number;

    @Column({
        type: 'enum',
        enum: PortfolioStatus,
        default: PortfolioStatus.ACTIVE,
    })
    status: PortfolioStatus;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}