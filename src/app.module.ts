import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosControler } from './produtos.controller';

@Module({
  imports: [],
  controllers: [AppController,ProdutosControler],
  providers: [AppService],
})
export class AppModule {}
