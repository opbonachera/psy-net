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
    async create(createAppointmentDto) {
        try {
            const newApp = await this.appointmentModel.create(createAppointmentDto);
            await newApp.save();
            return newApp;
        }
        catch (err) {
            console.log(err);
            if (err.code === 11000)
                throw new common_1.UnauthorizedException(`Appointment on date ${createAppointmentDto.date} is alredy taken.`);
        }
    }
    async update(updateAppointmentDto) {
        const { _id, date, state, message } = updateAppointmentDto;
        try {
            const updatedApp = this.appointmentModel.findOneAndUpdate({ date: date }, { 'message': message,
                'state': state });
            if (!updatedApp)
                throw new common_1.UnauthorizedException("Appointment does not exist");
            return updatedApp;
        }
        catch (err) {
            throw new common_1.UnauthorizedException("Unexpected error");
        }
    }
    findOne(id) {
        return `This action returns a #${id} appointment`;
    }
    async remove(id) {
        return this.appointmentModel.findOneAndDelete({ _id: id });
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(appointment_entity_1.Appointment.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map