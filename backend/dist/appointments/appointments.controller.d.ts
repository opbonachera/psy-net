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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    createAppointment(createAppDto: CreateAppointmentDto, req: Request): Promise<import("mongoose").Document<unknown, {}, import("./entities/appointment.entity").Appointment> & import("./entities/appointment.entity").Appointment & Required<{
        _id: string;
    }>>;
    modifyAppointment(body: {
        appId: string;
        status: string;
        date: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./entities/appointment.entity").Appointment> & import("./entities/appointment.entity").Appointment & Required<{
        _id: string;
    }>>;
    removeAppointment(req: Request): Promise<import("mongoose").Document<unknown, {}, import("./entities/appointment.entity").Appointment> & import("./entities/appointment.entity").Appointment & Required<{
        _id: string;
    }>>;
    listAppointmentsByUserID(req: Request): Promise<(import("mongoose").Document<unknown, {}, import("./entities/appointment.entity").Appointment> & import("./entities/appointment.entity").Appointment & Required<{
        _id: string;
    }>)[]>;
    getAppointmentById(body: {
        appId: string;
    }): Promise<import("mongoose").Document<unknown, {}, import("./entities/appointment.entity").Appointment> & import("./entities/appointment.entity").Appointment & Required<{
        _id: string;
    }>>;
}
