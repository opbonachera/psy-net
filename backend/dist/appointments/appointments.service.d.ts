/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { Model } from 'mongoose';
export declare class AppointmentsService {
    private appointmentModel;
    constructor(appointmentModel: Model<Appointment>);
    create(createAppointmentDto: CreateAppointmentDto, id: string): Promise<import("mongoose").Document<unknown, {}, Appointment> & Appointment & Required<{
        _id: string;
    }>>;
    update(id: string, status: string, date: string): Promise<import("mongoose").Document<unknown, {}, Appointment> & Appointment & Required<{
        _id: string;
    }>>;
    findAppointmentsByUserId(userId: string): Promise<(import("mongoose").Document<unknown, {}, Appointment> & Appointment & Required<{
        _id: string;
    }>)[]>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Appointment> & Appointment & Required<{
        _id: string;
    }>>;
    findByAppointmentId(id: string): Promise<import("mongoose").Document<unknown, {}, Appointment> & Appointment & Required<{
        _id: string;
    }>>;
}
