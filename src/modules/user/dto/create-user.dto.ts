import { IsEmail, MinLength, ValidateNested, IsString, IsNumber } from 'class-validator';
export class CreatUserDtoProfile {
}

export class CreateUserDto {
    @IsEmail()
    readonly email: string;
    @IsString()
    @MinLength(6)
    readonly password: string;
    @IsString()
    readonly firstName: string;
    @IsString()
    readonly lastName: string;
    @IsNumber()
    readonly dateOfBirth: number;
}

