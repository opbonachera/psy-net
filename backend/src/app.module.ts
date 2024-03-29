import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; 
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AppointmentsModule } from './appointments/appointments.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AppointmentsModule,
    AuthModule,
    SharedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
