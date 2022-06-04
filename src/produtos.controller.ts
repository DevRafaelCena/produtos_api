import {Body, Controller,Get, Param, Post,Put,Delete} from "@nestjs/common"
import {Produto} from './produtos.model'

@Controller('produtos')
export class ProdutosControler {

    produtos: Produto[] = [
        new Produto('LIV01',"Livro TDD",10.00),
        new Produto('LIV02',"Livro Flutter",39.90),
        new Produto('LIV03',"Livro Java",29.20),
        new Produto('LIV04',"Livro Javascript",15.00),

    ]

    @Get()
    obterTodos(): Produto[] {
        return this.produtos
    }

    @Get('/:id')
    obertUm(@Param() params): Produto {
        return this.produtos[0]
    }

    @Post()
    criar(@Body() produto:Produto){
        produto.id = 100
        this.produtos.push(produto)       
    }

    @Put()
    alterar(@Body() produto: Produto):Produto{
        return produto
    }

    @Delete('/:id')
    apagar(@Param() params){
        this.produtos.pop()
    }

}