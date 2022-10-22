import { NextApiRequest, NextApiResponse } from 'next';

export interface IDogItem {
  _id: number;
  SKU: number;
  images: string[];
  age: string;
  size: string;
  color: string;
  vaccinated: string;
  dewormed: string;
  cert: string;
  microchip: string;
  location: string;
  published: string;
  additionalInfo: string;
  title: string;
  price: number;
  gene: string;
}

export default function getDogs(
  req: NextApiRequest,
  res: NextApiResponse<IDogItem[]>
) {
  res.status(200).json([
    {
      _id: 1,
      SKU: 10001,
      images: ['MO231 - Pomeranian White.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO231 - Pomeranian White',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 2,
      SKU: 10002,
      images: ['MO502 - Poodle Tiny Yellow.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO502 - Poodle Tiny Yellow',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 3,
      SKU: 10003,
      images: ['MO102 - Poodle Tiny Sepia.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO102 - Poodle Tiny Sepia',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 4,
      SKU: 10004,
      images: ['MO512 - Alaskan Malamute Grey.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO512 - Alaskan Malamute Grey',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 5,
      SKU: 10005,
      images: ['MO231 - Pembroke Corgi Cream.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO231 - Pembroke Corgi Cream',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 6,
      SKU: 10006,
      images: ['MO502 - Pembroke Corgi Tricolor.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO502 - Pembroke Corgi Tricolor',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 7,
      SKU: 10007,
      images: ['MO232 - Pomeranian White.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO232 - Pomeranian White',
      price: 12345,
      gene: 'Male',
    },
    {
      _id: 8,
      SKU: 10008,
      images: ['MO512 - Poodle Tiny Dairy Cow.png'],
      age: '02 months',
      size: 'small',
      color: 'white',
      vaccinated: 'Yes',
      dewormed: 'Yes',
      cert: 'Yes (MKA)',
      microchip: 'Yes',
      location: 'Vietnam',
      published: '12-Oct-2022',
      additionalInfo: '',
      title: 'MO512 - Poodle Tiny Dairy Cow',
      price: 12345,
      gene: 'Male',
    },
  ]);
}
