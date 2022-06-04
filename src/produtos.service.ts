import { Injectable } from "@nestjs/common";
import { Produto } from "./produtos.model";

@Injectable()
export class ProdutosService{

    produtos: Produto[] = [
        new Produto('LIV01',"Livro TDD",10.00),
        new Produto('LIV02',"Livro Flutter",39.90),
        new Produto('LIV03',"Livro Java",29.20),
        new Produto('LIV04',"Livro Javascript",15.00),

    ]

    obterTodos(): Produto[] {
        return this.produtos
    }

    obterUm(id: string): Produto {
        return this.produtos[0]
    }

    criar(produto: Produto): Produto {
        produto.id = 100
        this.produtos.push(produto)       
        return produto
    }

    alterar(produto: Produto): Produto {
        return produto
    }

    apagar(id: string): Produto {
        this.produtos.pop()
        return this.produtos[0]
    }
}