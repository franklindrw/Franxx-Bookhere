import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';

@Injectable()
export class UsersRepository {
  private readonly prisma: PrismaService;

  constructor(prismaService: PrismaService) {
    this.prisma = prismaService;
  }

  async create(data: CreateUserDto): Promise<UserDto> {
    const newUser = await this.prisma.user.create({ data });
    return newUser;
  }

  async findAll(): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findById(id: string): Promise<UserDto> {
    const user = await this.prisma.user.findUnique({ where: { user_id: id } });
    return user;
  }

  async findByEmail(email: string): Promise<UserDto> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findByGoogleId(googleId: string): Promise<UserDto> {
    const user = await this.prisma.user.findUnique({
      where: { google_id: googleId },
    });
    return user;
  }
}
