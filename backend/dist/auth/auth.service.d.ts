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
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/register-user-dto';
import { LoginDto } from './dto/login-dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/payload.interface';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        loggedUser: {
            _id: string;
            fullName: string;
            username: string;
            email: string;
            isActive: boolean;
        };
        token: string;
    }>;
    create(createUserDto: CreateUserDto): Promise<User>;
    register(registerDto: CreateUserDto): Promise<{
        user: User;
        token: string;
    }>;
    findUserById(id: string): Promise<{
        _id: string;
        fullName: string;
        username: string;
        email: string;
        isActive: boolean;
    }>;
    getJwtToken(payload: JwtPayload): string;
    getTakenUsernames(): Promise<any[]>;
}
