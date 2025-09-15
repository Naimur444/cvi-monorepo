import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthService } from './auth/auth.service';
import * as bcrypt from 'bcryptjs';

async function createInitialAdmin() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authService = app.get(AuthService);

  try {
    // Create initial admin user
    const adminData = {
      email: 'admin@cloudvortexinnovation.com',
      password: 'admin123',
      firstName: 'Admin',
      lastName: 'User',
    };

    const existingAdmin = await authService.createAdmin(adminData);
    console.log('✅ Initial admin user created successfully');
    console.log('📧 Email:', adminData.email);
    console.log('🔐 Password:', adminData.password);
    console.log('⚠️  Please change the password after first login');
  } catch (error) {
    if (error.message.includes('already exists')) {
      console.log('ℹ️  Admin user already exists');
    } else {
      console.error('❌ Error creating admin user:', error.message);
    }
  } finally {
    await app.close();
  }
}

createInitialAdmin();