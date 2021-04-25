import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.io', description: 'Уникальный e-mail'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;

    @ApiProperty({example: 'P@ssword', description: 'Уникальный пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(6, 16, {message: 'Пароль должне быть не меньше 6 и не больше 16 символов'})
    readonly password: string;
}