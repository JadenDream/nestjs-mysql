import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateCatDto {
	@IsString()
    name: string;
	
	@IsInt()
    age: number;
	
	@IsString()
    color: string;
	
	@IsBoolean()
	isActive: boolean
}