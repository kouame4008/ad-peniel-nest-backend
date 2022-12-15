import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/user/user.decorator';

@Controller('auth')
export class AuthController {

    constructor (
        private authService: AuthService
    ) {}

    @ApiTags ('Auth Module')
    @UseGuards (AuthGuard ('local'))
    @Post('login')
    async login (@Body() req) {
        return this.authService.login (req);
    }

    @ApiTags ('Auth Module')
    @UseGuards (AuthGuard ('jwt'))
    @Get('user')
    async listeUser (
        @User () user
    ) {
        return user
    }
}
