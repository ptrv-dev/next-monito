import { DogsList, IDogItem } from './index';
import { NextApiRequest, NextApiResponse } from 'next';
export default function getOneDog(
  req: NextApiRequest,
  res: NextApiResponse<IDogItem | { msg: string }>
) {
  const { SKU } = req.query;
  const response = DogsList.find((item) => item.SKU === Number(SKU));
  if (!response) return res.status(404).json({ msg: 'Not Found' });
  res.status(200).json(response);
}
