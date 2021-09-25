import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}
