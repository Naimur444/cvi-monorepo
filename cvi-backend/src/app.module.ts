import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobModule } from './job/job.module';
import { Job } from './job/job.entity';
import { AboutUsModule } from './aboutUs/aboutUs.module';
import { AboutUs } from './aboutUs/aboutUs.entity';
import { Candidate } from './jobApply/jobApply.entity';
import { JobApplyModule } from './jobApply/jobApply.module';
import { LadershipModule } from './ladership/ladership.module';
import { Ladership } from './ladership/ladership.entity';
import { FaqsModule } from './faqs/faqs.module';
import { Faqs } from './faqs/faqs.entity';
import { ContactUsModule } from './contactUs/contactUs.module';
import { ContactUs } from './contactUs/contactUs.entity';
import { ContactFromModule } from './contactFrom/contactFrom.module';
import { ContactFrom } from './contactFrom/contactFrom.entity';
import { UserContactModule } from './userContact/userContact.module';
import { UserContact } from './userContact/userContact.entity';
import { HeroModule } from './hero/hero.module';
import { PartnerModule } from './partner/partner.module';
import { AdvantageModule } from './advantage/advantage.module';
import { ClientFeedbackModule } from './clientFeedback/clientFeedback.module';
import { TermsModule } from './terms/terms.module';
import { PolicyModule } from './policy/policy.module';
import { CareerModule } from './career/career.module';
import { JobApplication } from './career/entities/job-application.entity';
import { AuthModule } from './auth/auth.module';
import { AdminUser } from './auth/entities/admin-user.entity';
import { PortfolioModule } from './portfolio/portfolio.module';
import { Portfolio } from './portfolio/portfolio.entity';
import { UploadModule } from './upload/upload.module';
import { SettingsModule } from './settings/settings.module';
import { Settings } from './settings/entities/settings.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        Job,
        AboutUs,
        Candidate,
        Ladership,
        Faqs,
        ContactUs,
        ContactFrom,
        UserContact,
        JobApplication,
        AdminUser,
        Portfolio,
        Settings,
      ],
      autoLoadEntities: true,
      synchronize: process.env.DB_SYNCHRONIZE === 'true' || process.env.NODE_ENV !== 'production',
      timezone: process.env.DB_TIMEZONE || 'Z',
      extra: {
        connectionLimit: 10,
      },
      // Fix MySQL timestamp issues
      supportBigNumbers: true,
      bigNumberStrings: false,
      dateStrings: false,
    }),

    JobModule,
    AboutUsModule,
    JobApplyModule,
    LadershipModule,
    FaqsModule,
    ContactUsModule,
    ContactFromModule,
    UserContactModule,
    HeroModule,
    PartnerModule,
    AdvantageModule,
    ClientFeedbackModule,
    TermsModule,
    PolicyModule,
    CareerModule,
    AuthModule,
    PortfolioModule,
    UploadModule,
    SettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
