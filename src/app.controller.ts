import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { HeroEntity } from './entity/hero.entity';
import { HeroDto } from './dto/hero.dto';

@Controller('heroes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAll(): Promise<HeroEntity[]> {
    return await this.appService.getAll();
  }
  @Post()
  async createHero(@Body() hero: HeroDto): Promise<HeroEntity[]> {
    console.log(hero);
    return await this.appService.creteHero(hero);
  }
  @Get(':id')
  async GetById(@Param('id') id: number): Promise<HeroEntity> {
    return await this.appService.findById(id);
  }
  @Put(':id')
  async editHero(
    @Param('id') id: number,
    @Body() hero: HeroDto,
  ): Promise<HeroEntity> {
    return this.appService.editHero(id, hero);
  }
  @Delete(':id')
  deleteHero(@Param('id') id: number): Promise<HeroEntity[]> {
    return this.appService.deleteHero(id);
  }
}
