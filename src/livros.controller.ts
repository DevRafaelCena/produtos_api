import {Body, Controller,Get, Param, Post,Put,Delete} from "@nestjs/common"
import {Livro} from './livro.model'
import { LivrosService } from "./livros.service"

@Controller('livros')
export class LivrosControler {

    constructor(private livrosService: LivrosService){
        
    }
    
    @Get()
    async obterTodos(): Promise<Livro[]> {
        return this.livrosService.obterTodos()
    }

    @Get('/:id')
    async obertUm(@Param() params): Promise<Livro> {
        return this.livrosService.obterUm(params.id)
    }

    @Post()
    async criar(@Body() produto:Livro){
        produto.id = 100
        this.livrosService.criar(produto) 
    }

    @Put()
    async alterar(@Body() produto: Livro): Promise<[number]>{
        return this.livrosService.alterar(produto)
    }

    @Delete('/:id')
    async apagar(@Param() params){
        this.livrosService.apagar(params.id)
    }

}