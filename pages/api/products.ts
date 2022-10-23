import { NextApiRequest, NextApiResponse } from 'next';

export interface IProductItem {
  _id: number;
  image: string;
  title: string;
  product: string;
  size?: string;
  price: number;
  present?: string;
  SKU: number;
}

export default function getProducts(
  req: NextApiRequest,
  res: NextApiResponse<IProductItem[]>
) {
  res.status(200).json([
    {
      _id: 1,
      SKU: 11001,
      image: 'Zealandia Deluxe Dog Salmon Pate.png',
      title: 'Zealandia Deluxe Dog Salmon Pate',
      product: 'Dog Food',
      size: '385gm',
      price: 140,
      present: 'Free Toy & Free Shaker',
    },
    {
      _id: 2,
      SKU: 11002,
      image: 'Reflex Plus Adult Cat Food Salmon.png',
      title: 'Reflex Plus Adult Cat Food Salmon',
      product: 'Cat Food',
      size: '1.5kg',
      price: 165,
      present: 'Free Toy & Free Shaker',
    },
    {
      _id: 3,
      SKU: 11003,
      image: 'Cat scratching ball toy kitten sisal rope ball.png',
      title: 'Cat scratching ball toy kitten sisal rope ball',
      product: 'Toy',
      price: 1100,
      present: 'Free Cat Food',
    },
    {
      _id: 4,
      SKU: 11004,
      image: 'Cute Pet Cat Warm Nest.png',
      title: 'Cute Pet Cat Warm Nest',
      product: 'Toy',
      price: 410,
      present: 'Free Cat Food',
    },
    {
      _id: 5,
      SKU: 11005,
      image: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil.png',
      title: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
      product: 'Dog Food',
      size: '385mg',
      price: 350,
      present: 'Free Toy & Free Shaker',
    },
    {
      _id: 6,
      SKU: 11006,
      image: 'Costumes Fashion Pet Clother Cowboy Rider.png',
      title: 'Costumes Fashion Pet Clother Cowboy Rider',
      product: 'Costume',
      size: '1.5kg',
      price: 500,
    },
    {
      _id: 7,
      SKU: 11007,
      image: 'Costumes Chicken Drumsti ck Headband.png',
      title: 'Costumes Chicken Drumsti ck Headband',
      product: 'Costume',
      price: 400,
    },
    {
      _id: 8,
      SKU: 11008,
      image: 'Plush Pet Toy.png',
      title: 'Plush Pet Toy',
      product: 'Toy',
      price: 300,
    },
  ]);
}
