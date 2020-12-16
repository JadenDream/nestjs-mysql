import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { Cat } from './cats/entities/cat.entity';

@Module({
  imports: [CatsModule,
	TypeOrmModule.forRoot({
	      type: 'mysql',
	      host: '127.0.0.1',
	      port: 3306,
	      username: 'admin', // MYSQL_USER
	      password: 'admin', // MYSQL_PASSWORD
	      database: 'test',  // MYSQL_DATABASE
	      entities: [Cat],
	      synchronize: true,
	    })
  ],
})
export class AppModule {}
