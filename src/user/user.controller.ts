import { CreateUserDto } from './dto/create-user-dto';
import { UserEntity } from './Entity/user.entity';
import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FormDataRequest } from 'nestjs-form-data';

@Controller('user')
export class UserController {

    constructor(private userservice: UserService) { }

    @ApiTags('User Module')
    @Get('list-user')
    @ApiOperation({
        summary: 'This is user Module'
    })
    @ApiResponse({
        status: 200,
        description: 'Liste des utilisateurs'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbiden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal serveur'
    })
    ListUtilisateur(): Promise<UserEntity[]> {
        return this.userservice.listDesUtilisateur();
    }

    @ApiTags('User Module')
    @Post('add-user')
    @ApiOperation({
        summary: 'This is user Module'
    })
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer',
                    description: 'This is uniquess ID',
                },
                username: {
                    type: 'string',
                    description: 'This is username'
                }
            }
        }
    })
    @ApiResponse({
        status: 200,
        description: 'Liste des utilisateurs'
    })
    @ApiResponse({
        status: 403,
        description: 'Forbiden'
    })
    @ApiResponse({
        status: 500,
        description: 'Internal serveur'
    })
    @FormDataRequest ()
    async userRegister(
        @Body() newUser: CreateUserDto
    ): Promise<Partial<UserEntity>> {
        return this.userservice.UserRegister(newUser);
    }



    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files',
            filename: (req, file, callback) => {
                const uniqueSufix = Date.now() + '-' + Math.round(Math.random() * 1e9);

                const ext = extname(file.originalname);
                const filename = `${file.originalname}-${uniqueSufix}${ext}`;

                callback(null, filename)
            }
        })
    }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
    }

}