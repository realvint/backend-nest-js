import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.io', description: 'Уникальный e-mail'})
    readonly email: string;

    @ApiProperty({example: 'P@ssword', description: 'Уникальный пароль'})
    readonly password: string;
}