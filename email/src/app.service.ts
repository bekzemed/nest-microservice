import { Injectable } from '@nestjs/common';
import { RegisterUserEvent } from './event/register-user.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserRegistered(data: RegisterUserEvent) {
    console.log('WELCOME TO SEEKMAKE ', data);
    // send email to register users
  }
}
