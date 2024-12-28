import { IsString, IsNotEmpty, IsBoolean, IsDate } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsString()
  name?: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsString()
  google_id?: string;

  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @IsDate()
  updated_at: Date;
}
