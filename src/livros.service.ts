import { Injectable } from "@nestjs/common";
import { Livro } from "./livro.model";

@Injectable()
export class LivrosService{

    livros: Livro[] = [
        // new Livro('LIV01',"Livro TDD",10.00),
        // new Livro('LIV02',"Livro Flutter",39.90),
        // new Livro('LIV03',"Livro Java",29.20),
        // new Livro('LIV04',"Livro Javascript",15.00),

    ]

    obterTodos(): Livro[] {
        return this.livros
    }

    obterUm(id: string): Livro {
        return this.livros[0]
    }

    criar(livro: Livro): Livro {
        livro.id = 100
        this.livros.push(livro)       
        return livro
    }

    alterar(livro: Livro): Livro {
        return livro
    }

    apagar(id: string): Livro {
        this.livros.pop()
        return this.livros[0]
    }
}