import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LivrosControler } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
  imports: [],
  controllers: [AppController,LivrosControler],
  providers: [AppService, LivrosService],
})
export class AppModule {}
