import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";
import { jwtSecret } from "src/auth/constants";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(
        private jwtService: JwtService,
        private authService: AuthService
    ){}

    async canActivate( context: ExecutionContext ){
        const req = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(req);
        
        if(!token) throw new UnauthorizedException("Token is required");

        try{
            const payload = await this.jwtService.verifyAsync( token, { secret: process.env.JWT_SEED } )
        
            const user = await this.authService.findUserById(payload.id);
            
            if(!user) throw new UnauthorizedException("User does not exist");
            if(!user.isActive) throw new UnauthorizedException("User is not active");

            req['user'] = user;

        }catch(err){
            console.log(err)
            throw new UnauthorizedException("There has been an error");
        }
        
        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers['authorization']?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}