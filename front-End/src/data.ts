import { Product } from "./app/shared/models/product";

export const sample_products: Product[] = [
    {
        id: '1',
        name: 'pshycho-bunny T-shirt',
        description: 'Camiseta roja de algodón',
        price: 199.99,
        stock: 20,
        images: ['assets/bunny_t-shirt.jpg'],
        category: 'playeras',
        size: ['chica', 'mediana', 'grande'],
        color: 'rojo',
      },
      {
        id: '2',
        name: ' true messiah T-shirt',
        description: 'Camiseta azul de algodón',
        price: 189.99,
        stock: 10,
        images: ['assets/jesus_t-shirt.jpg'],
        category: 'playeras',
        size: ['chica', 'mediana'],
        color: 'azul',
      },
]