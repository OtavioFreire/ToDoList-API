import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags()
@Controller()
export class UserController {
  constructor(private readonly userService: UsersService) {}

  // @Post("/register")  
  // getHello(): string {
  //   return this.userService.getHello();
  // }

  // @Post("/login")  
  // getLogin(): string {
  //   return this.userService.getHello();
  // }

  // @Get("/profile")
  // getProfile(): string {
  //   return this.userService.getProfile();
  // }
}
