import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/register")  
  getHello(): string {
    return this.userService.getHello();
  }

  @Post("/login")  
  getLogin(): string {
    return this.userService.getHello();
  }

  @Get("/profile")
  getProfile(): string {
    return this.userService.getProfile();
  }
}
