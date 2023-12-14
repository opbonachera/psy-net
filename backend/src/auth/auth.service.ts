import { Injectable, Inject, BadRequestException, InternalServerErrorException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { UnauthorizedException } from '@nestjs/common';

import { CreateUserDto } from './dto/register-user-dto';
import { LoginDto } from './dto/login-dto';
import { User } from './entities/user.entity';
import { jwtSecret } from './constants';
import { JwtPayload } from './interfaces/payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel( User.name )
    private userModel:Model<User>,
    private jwtService: JwtService
  ){}

  async login( loginDto: LoginDto){
    const { username, password } = loginDto; // Get user and email from user dto
    const user = await this.userModel.findOne({ username }); // Find user based on user email

    if(!user){
      throw new UnauthorizedException('Not valid credentials'); // Throw error if user is not found
    }

    if( !bcrypt.compareSync( password, user.password ) ){
      throw new UnauthorizedException('Password is not correct'); // Compare request password with user password
    }

    const { password:_, ...loggedUser } = user.toJSON(); // Extract password from user and return data

    return {
      loggedUser,
      token: this.getJwtToken({ id: user.id })
    } // Add token to the returned user
    
  }

  async create( createUserDto: CreateUserDto ): Promise<User>{
    
    try {
          const { password, ...userData } = createUserDto;
          const newUser = new this.userModel({
            password: bcrypt.hashSync( password,10 ),
            ...userData
          })

          await newUser.save();

          const { password:_, ...user } = newUser.toJSON();

          return user;
        
    }catch(err){
        
        if(err.code === 11000 ) throw new BadRequestException(`${ createUserDto.username } already exists`);

        throw new InternalServerErrorException("Something unexpected happened");
        
    }
  }

  async register(registerDto: CreateUserDto){
    const user = await this.create( registerDto );

    return {
      user: user,
      token: this.getJwtToken({ id: user._id })
    }
  }

  async findUserById( id:string ){
    const user = await this.userModel.findById({ id });
    const { password, ...rest } = user.toJSON();

    return rest;
  }

  public getJwtToken( payload: JwtPayload ){
    const token = this.jwtService.sign(payload);
    return token;
  }
}
