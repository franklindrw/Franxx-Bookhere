import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';

import { UsersRepository } from './users.repository';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(data: CreateUserDto): Promise<UserDto> {
    // valida os dados recebidos
    const errors: ValidationError[] = await validate(data);

    if (errors.length > 0) {
      const errorsMessages = errors
        .map((error) => Object.values(error.constraints).join(', '))
        .join('; ');
      throw new HttpException(errorsMessages, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    // verifica se o email já está cadastrado
    const userExists = await this.usersRepository.findByEmail(data.email);
    if (userExists) {
      throw new HttpException(
        'E-mail já cadastrado no sistema',
        HttpStatus.CONFLICT,
      );
    }

    // criptografa a senha

    const newUser = await this.usersRepository.create(data);
    return newUser;
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.usersRepository.findAll();

    if (!users || users.length === 0) {
      throw new HttpException(
        'Nenhum usuário encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return users;
  }

  async findById(id: string): Promise<UserDto> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findByEmail(email: string): Promise<UserDto> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findByGoogleId(googleId: string): Promise<UserDto> {
    const user = await this.usersRepository.findByGoogleId(googleId);

    if (!user) {
      throw new HttpException('Usuário não encontrado', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
