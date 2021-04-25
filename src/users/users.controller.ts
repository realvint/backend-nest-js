import {Body, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuards} from "../auth/roles.guards";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";


@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @ApiResponse({status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto);
    }
    @ApiOperation({summary: 'Получение списка всех пользователей'})
    @ApiResponse({status: 200, type: [User] })
    @Roles("USER")
    @UseGuards(RolesGuards)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }

    @ApiOperation({summary: 'Выдать роль'})
    @ApiResponse({status: 200 })
    @Roles("USER")
    @UseGuards(RolesGuards)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto);
    }

    @ApiOperation({summary: 'Отключить пользователя'})
    @ApiResponse({status: 200 })
    @Roles("USER")
    @UseGuards(RolesGuards)
    @Post('/ban')
    banUser(@Body() dto: BanUserDto) {
        return this.userService.banUser(dto);
    }
}
