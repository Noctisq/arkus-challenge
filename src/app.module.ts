import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { TeamMovesModule } from './team-moves/team-moves.module';
import { LogsModule } from './logs/logs.module';
import { ClientsModule } from './clients/clients.module';
@Module({
  imports: [
    AuthModule, 
    PassportModule,
    JwtModule.register({secret: 'secrete', signOptions: {expiresIn: '1h'}}),
    MongooseModule.forRoot('mongodb://localhost:27017/ChallengeArkus'),
    UsersModule,
    AccountsModule,
    TeamMovesModule,
    LogsModule,
    ClientsModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AppModule {}
