import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {UserRoles} from "../userRoles/user-roles.model";
import {Role} from "../roles/roles.model";

interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({example: 'userName', description: 'Уникальный логин пользователя'})
    @Column({ type: DataType.STRING, unique: true, allowNull: true  })
    login: string;

    @ApiProperty({example: 'user@mail.io', description: 'Уникальный e-mail'})
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({example: '+79000000000', description: 'Уникальный телефонный номер'})
    @Column({ type: DataType.STRING, unique: true, allowNull: true })
    phone: string;

    @ApiProperty({example: 'P@ssword', description: 'Уникальный пароль'})
    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @ApiProperty({example: '12345678910', description: 'Уникальный ИНН пользователя (для онлайн касс)'})
    @Column({ type: DataType.INTEGER, unique: true, allowNull: true })
    individualTaxpayerNumber: number

    @ApiProperty({example: 'false', description: 'Признак пользователя "Бан"'})
    @Column({ type: DataType.BOOLEAN, defaultValue: false  })
    banned: boolean;

    @ApiProperty({example: 'some text', description: 'Причина бана'})
    @Column({ type: DataType.STRING, allowNull: true })
    banReason: string;

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[];

}