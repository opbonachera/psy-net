import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/register-user-dto';
import { LoginDto } from './dto/login-dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { User } from './entities/user.entity';
import { Request } from '@nestjs/common';
import { LoginResponse } from './interfaces/login.response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto){
    return this.authService.login(loginDto);
  }

  @UseGuards( AuthGuard )
  @Get('/test')
  test(){
  
  }

  @UseGuards( AuthGuard )
  @Get('/check-token')
  checkToken( @Request() req: Request ){
    try { 
      const user = req['user'] as User;

      return {
        user,
        token: this.authService.getJwtToken({ id: user._id })
      }
    }catch(err){
      console.log(err)
    }
  } 

  // @Get()
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
