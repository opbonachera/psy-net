import { Module } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { AppointmentsController } from './appointments.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './entities/appointment.entity';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtSecret } from 'src/auth/constants';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Appointment.name,
        schema: AppointmentSchema
      }
    ]),
    ConfigModule.forRoot(),
    JwtModule.register({
      global:true,
      secret: jwtSecret.secret,
      signOptions: { expiresIn: '360m' }
    }),
    AuthModule
  ]
})
export class AppointmentsModule {}
