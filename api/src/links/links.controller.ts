import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Link } from './links.entity';
import { LinkService } from './links.service';

@Controller('links')
export class LinkController {
    constructor(
        private linkService: LinkService
    ) { }

    @Post('/')
    async addLink(@Body() body: any) {
        try {
            const link = await this.linkService.create(body.userid, body.objectData);
            return link;
        } catch (e) {
            return new BadRequestException(e)
        }
    }

    @Post('/update')
    async updateLinks(@Body() body: Link) {
        try {
            const link = await this.linkService.update(body.userid, body.objectdata);
            return link
        } catch (e) {
            return new BadRequestException(e)
        }
    }

    @Get('/:userId')
    async getLinks(@Param('userId') userId: number) {
        try {
            const link = await this.linkService.findOneByUsername(userId);
            return link
        } catch (e) {
            return new BadRequestException(e)
        }
    }
}