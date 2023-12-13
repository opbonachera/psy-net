import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AuthModule,
    AppointmentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
