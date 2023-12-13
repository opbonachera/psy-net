import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { jwtSecret } from './constants';
import { User, UserSchema } from './entities/user.entity';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports:[
    ConfigModule.forRoot(),
    JwtModule.register({
      global:true,
      secret: jwtSecret.secret,
      signOptions: { expiresIn: '60m' }
    }),
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }])
  ]
})

export class AuthModule {}
