export class Product{
    id!: string;
    name!: string;
    description!: string;
    price!: number;
    stock!: number;
    images!: string[]; 
    category!: string;
    size?: string[];
    color?: string;
}