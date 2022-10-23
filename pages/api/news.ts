import { NextApiRequest, NextApiResponse } from 'next';

export interface INewsItem {
  _id: number;
  image: string;
  tags?: string[];
  title: string;
  text: string;
}

export default function getNews(
  req: NextApiRequest,
  res: NextApiResponse<INewsItem[]>
) {
  res.status(200).json([
    {
      _id: 1,
      image: '1.png',
      tags: ['Pet knowledge'],
      title: 'What is a Pomeranian? How to Identify Pomeranian Dogs',
      text: 'The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.',
    },
    {
      _id: 2,
      image: '2.png',
      tags: ['Pet knowledge'],
      title: 'Dog Diet You Need To Know',
      text: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    },
    {
      _id: 3,
      image: '3.png',
      tags: ['Pet knowledge'],
      title:
        'Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively',
      text: 'Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.',
    },
  ]);
}
