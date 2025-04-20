import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { User } from '../users/user.entity';

@Module({
  imports: [
    JwtModule.register({
      secret: 'suaChaveSecreta',
      signOptions: { expiresIn: '60000s' },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, AuthGuard],
  controllers: [AuthController],
  exports: [AuthGuard, JwtModule],
})
export class AuthModule {}
