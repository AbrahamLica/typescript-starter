import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll(): Promise<UserDto[]> {
    return await this.usersRepository.findAll();
  }

  async create(data: User): Promise<void> {
    await this.usersRepository.create(data);
  }
}
