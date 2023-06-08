import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { HeroEntity } from './entity/hero.entity';

export const typeormSettings: TypeOrmModuleOptions = {
  type: 'mysql',
  username: 'root',
  password: '',
  database: 'heroes',
  host: 'localhost',
  port: 3306,
  dropSchema: false,
  synchronize: true,
  entities: [HeroEntity],
};
