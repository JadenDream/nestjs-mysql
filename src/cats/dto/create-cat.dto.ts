import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateCatDto {
	@IsString()
    name: string;
	
	@IsInt()
    age: number;
	
	@IsString( { each: true } )
    color: string;
	
	@IsBoolean( { each: true } )
	isActive: boolean
}