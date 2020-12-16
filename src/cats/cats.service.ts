import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
	constructor(
		@InjectRepository(Cat)
		private catRepository : Repository<Cat>
	) {}

	async create(cat: Cat): Promise<Cat> {
		const newCat = await this.catRepository.save(cat);
		return newCat; 
	}

	async findAll(): Promise<Cat[]> {
		return this.catRepository.find();
	}
	
	async findbyID(id: number): Promise<Cat> {
		return await this.catRepository.findOne(id);
	}
}
