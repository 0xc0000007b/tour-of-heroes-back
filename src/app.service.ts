import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HeroEntity } from './entity/hero.entity';
import { Repository } from 'typeorm';
import { HeroDto } from './dto/hero.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(HeroEntity) private heroRepo: Repository<HeroEntity>,
  ) {}
  async getAll(): Promise<HeroEntity[]> {
    return await this.heroRepo.find();
  }
  async findById(id: number): Promise<HeroEntity> {
    return this.heroRepo.findOne({ where: { id } });
  }
  async creteHero(heroDto: HeroDto): Promise<HeroEntity[]> {
    const hero = new HeroEntity();
    Object.assign(hero, heroDto);
    await this.heroRepo.save(hero);
    return this.heroRepo.find();
  }
  async editHero(id: number, heroDto: HeroDto): Promise<HeroEntity> {
    const hero = await this.heroRepo.findOne({ where: { id } });
    if (!hero) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    const newHero = Object.assign(hero, heroDto);
    await this.heroRepo.save(newHero);
    return await this.heroRepo.findOne({ where: { id } });
  }
  async deleteHero(id: number): Promise<HeroEntity[]> {
    const hero = await this.heroRepo.findOne({ where: { id } });
    await this.heroRepo.delete(hero);
    return await this.heroRepo.find();
  }
}
