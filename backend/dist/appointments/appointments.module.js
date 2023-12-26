"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsModule = void 0;
const common_1 = require("@nestjs/common");
const appointments_service_1 = require("./appointments.service");
const appointments_controller_1 = require("./appointments.controller");
const mongoose_1 = require("@nestjs/mongoose");
const appointment_entity_1 = require("./entities/appointment.entity");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("../auth/constants");
const config_1 = require("@nestjs/config");
const auth_module_1 = require("../auth/auth.module");
let AppointmentsModule = class AppointmentsModule {
};
exports.AppointmentsModule = AppointmentsModule;
exports.AppointmentsModule = AppointmentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [appointments_controller_1.AppointmentsController],
        providers: [appointments_service_1.AppointmentsService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: appointment_entity_1.Appointment.name,
                    schema: appointment_entity_1.AppointmentSchema
                }
            ]),
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtSecret.secret,
                signOptions: { expiresIn: '360m' }
            }),
            auth_module_1.AuthModule
        ]
    })
], AppointmentsModule);
//# sourceMappingURL=appointments.module.js.map