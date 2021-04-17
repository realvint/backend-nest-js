import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {Role} from "./roles.model";
import {UserRoles} from "../userRoles/user-roles.model";

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
      RolesService
  ]
})
export class RolesModule {}
