import { Module } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma.service';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';

@Module({
  controllers: [UsersController],
  providers: [PrismaService, UsersService, UsersRepository],
  imports: [],
})
export class UsersModule {}
