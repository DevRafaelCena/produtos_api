import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosControler } from './livros.controller';
import { LivrosService } from './livros.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { Livro } from './livro.model';



@Module({
  imports: [ 
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '@1q2w3e#',
      database: 'produtos_api',
      autoLoadModels: true,  //le os models automaticamente
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livro]) //referencia o modelo do livro
  ],
  controllers: [AppController,LivrosControler],
  providers: [AppService, LivrosService],
})
export class AppModule {}
