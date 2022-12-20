import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserInput } from './dto/register-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  registerUser(@Body() createUserInput: CreateUserInput) {
    return this.appService.registerUser(createUserInput);
  }
}
