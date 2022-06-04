import {Body, Controller,Get, Param, Post,Put,Delete} from "@nestjs/common"
import {Livro} from './livro.model'
import { LivrosService } from "./livros.service"

@Controller('livros')
export class LivrosControler {

    constructor(private livrosService: LivrosService){
        
    }
    
    @Get()
    obterTodos(): Livro[] {
        return this.livrosService.obterTodos()
    }

    @Get('/:id')
    obertUm(@Param() params): Livro {
        return this.livrosService.obterUm(params.id)
    }

    @Post()
    criar(@Body() produto:Livro){
        produto.id = 100
        this.livrosService.criar(produto) 
    }

    @Put()
    alterar(@Body() produto: Livro):Livro{
        return this.livrosService.alterar(produto)
    }

    @Delete('/:id')
    apagar(@Param() params){
        this.livrosService.apagar(params.id)
    }

}