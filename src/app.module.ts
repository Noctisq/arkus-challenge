import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    AuthModule, 
    PassportModule,
    JwtModule.register({secret: 'secrete', signOptions: {expiresIn: '1h'}}),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/ChallengeArkus'),
    UsersModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AppModule {}
