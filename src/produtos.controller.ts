import {Body, Controller,Get, Param, Post,Put,Delete} from "@nestjs/common"
import {Produto} from './produtos.model'
import { ProdutosService } from "./produtos.service"

@Controller('produtos')
export class ProdutosControler {

    constructor(private produtosService: ProdutosService){
        
    }
    
    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obterTodos()
    }

    @Get('/:id')
    obertUm(@Param() params): Produto {
        return this.produtosService.obterUm(params.id)
    }

    @Post()
    criar(@Body() produto:Produto){
        produto.id = 100
        this.produtosService.criar(produto) 
    }

    @Put()
    alterar(@Body() produto: Produto):Produto{
        return this.produtosService.alterar(produto)
    }

    @Delete('/:id')
    apagar(@Param() params){
        this.produtosService.apagar(params.id)
    }

}