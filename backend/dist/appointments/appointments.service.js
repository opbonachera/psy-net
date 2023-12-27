"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const appointment_entity_1 = require("./entities/appointment.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentModel) {
        this.appointmentModel = appointmentModel;
    }
    async create(createAppointmentDto, id) {
        try {
            const appointment = {
                userId: id,
                ...createAppointmentDto
            };
            const newApp = await this.appointmentModel.create(appointment);
            await newApp.save();
            return newApp;
        }
        catch (err) {
            console.log(err);
            if (err.code === 11000)
                throw new common_1.UnauthorizedException(`Appointment on date ${createAppointmentDto.date} is alredy taken.`);
        }
    }
    async update(id, status, date) {
        console.log(id, status, date);
        try {
            const updatedApp = this.appointmentModel.findOneAndUpdate({ _id: id }, { 'date': date, 'state': status }, { new: true }).exec();
            if (!updatedApp)
                throw new common_1.UnauthorizedException("Appointment does not exist");
            return updatedApp;
        }
        catch (err) {
            throw new common_1.UnauthorizedException("Unexpected error");
        }
    }
    async findAppointmentsByUserId(userId) {
        const appointments = await this.appointmentModel.find({ userId: userId }).exec();
        return appointments;
    }
    async remove(id) {
        return this.appointmentModel.findOneAndDelete({ _id: id }).exec();
    }
    async findByAppointmentId(id) {
        return this.appointmentModel.findById({ _id: id }).exec();
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(appointment_entity_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map