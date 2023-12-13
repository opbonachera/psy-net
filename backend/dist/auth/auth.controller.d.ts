import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/register-user-dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createAuthDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
}
