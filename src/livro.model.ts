import { Column, DataType, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize/types";

@Table
export class Livro extends Model<Livro>{    

    @Column({type: DataType.STRING(60), allowNull: false})
    codigo: string;

    @Column({type: DataType.STRING, allowNull: false})
    nome: string;

    @Column({type: DataType.DECIMAL(10,2), allowNull: false})
    preco: number;

}