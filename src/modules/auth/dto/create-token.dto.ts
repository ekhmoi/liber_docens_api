import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateTokenDto {
    @IsEmail()
    readonly email: string;
    @IsString()
    @MinLength(6)
    readonly password: string;
}

