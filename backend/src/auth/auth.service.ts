import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/auth.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private jwtService: JwtService
  ){}

  async login( loginUserDto: LoginDto ): Promise<User>{
    const { username, password } = loginUserDto;
    const user = await this.userModel.findOne({ username })

    if(!user) throw new UnauthorizedException("User does not exist");

    if( bcrypt.compareSync(password, user.password) ) throw new UnauthorizedException("Invalid credentials")

    const { password:_, ...loggedUser } = user.toJSON();

    return{
      ...loggedUser
    }

  }
}
