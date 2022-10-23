import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { IDogItem } from '../api/dogs';

interface DogFullPageProps {
  dog: IDogItem;
}

import style from '../../styles/DogFullPage.module.scss';
import Slider from '../../components/Slider';

const DogFullPage: NextPage<DogFullPageProps> = ({ dog }) => {
  console.log(dog);
  return (
    <>
      <Head>
        <title>{dog.title} | Monito</title>
      </Head>
      <main className={`${style.root}`}>
        <div className="container">
          <div className={`${style.body}`}>
            <div className={`${style.bodyColumn}`}>
              <Slider images={dog.images} />
            </div>
            <div className={`${style.bodyColumn}`}></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DogFullPage;

DogFullPage.getInitialProps = async (props) => {
  const { SKU } = props.query;
  const res = await fetch(`http://localhost:3000/api/dogs/${SKU}`).then((res) =>
    res.json()
  );
  return { dog: res };
};
