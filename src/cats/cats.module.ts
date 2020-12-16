import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';

@Module({
	controllers: [CatsController],
	imports: [TypeOrmModule.forFeature([Cat])],
	providers: [CatsService]
})
export class CatsModule {}
