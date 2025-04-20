import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll(): Promise<UserDto[]> {
    return await this.usersRepository.findAll();
  }

  async findById(id: number): Promise<UserDto> {
    return await this.usersRepository.findById(id);
  }

  async create(data: User): Promise<void> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltOrRounds);

    const userToSave: User = {
      ...data,
      password: hashedPassword,
    };

    await this.usersRepository.create(userToSave);
  }

  async update(id: number, userData: Partial<User>): Promise<UserDto> {
    return this.usersRepository.update(id, userData);
  }
  
  async delete(id: number): Promise<void> {
    return this.usersRepository.delete(id);
  }
}
