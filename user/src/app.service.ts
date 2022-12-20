import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserInput } from './dto/register-user.dto';
import { RegisterUserEvent } from './event/register-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('EMAIL_MICROSERVICE')
    private readonly emailCommunication: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  registerUser(createUserInput: CreateUserInput) {
    this.users.push(createUserInput);
    this.emailCommunication.emit(
      'user_registered',
      new RegisterUserEvent(createUserInput.email),
    );
  }
}
