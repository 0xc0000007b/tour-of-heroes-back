import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormSettings } from './typeormSettings';
import { HeroEntity } from './entity/hero.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([HeroEntity]),
    TypeOrmModule.forRoot(typeormSettings),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
