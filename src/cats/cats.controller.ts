import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './entities/cat.entity';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
	constructor(private catsService: CatsService) {}
	
	// Http 方法
	@Get()
	// 函式名稱: 回傳型態
	findAll(): Promise<Cat[]> {
		return this.catsService.findAll();
	} 
		
	@Post()
	create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
		const tCat = {
			id : null,
			...createCatDto
		}
		const newCat = this.catsService.create(tCat);
		return newCat;
	}
	
	@Get(':id')
	findOne(@Param() params): Promise<Cat> {
	  const tCat = this.catsService.findbyID(params.id);
	  return tCat;
	}
}