import { IsEmail, MinLength, ValidateNested, IsString, IsNumber, IsEnum } from 'class-validator';
import { UserTypes } from '../user.schema';
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
    @IsEnum([UserTypes.Teacher, UserTypes.Student])
    readonly type: UserTypes
}

