import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name?: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  role?: string;

  @IsBoolean()
  status?: boolean;

  @IsString()
  google_id?: string;
}
