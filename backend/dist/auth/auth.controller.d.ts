import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/register-user-dto';
import { LoginDto } from './dto/login-dto';
import { User } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<User>;
    login(loginDto: LoginDto): Promise<{
        loggedUser: {
            _id: string;
            fullName: string;
            username: string;
            email: string;
            phoneNumber: number;
            isActive: boolean;
        };
        token: string;
    }>;
    test(): void;
    checkToken(req: Request): {
        user: User;
        token: string;
    };
}
