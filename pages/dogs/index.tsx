import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Banner from '../../components/Banner';
import Button from '../../components/UI/Button';

import style from '../../styles/DogsPage.module.scss';
import bannerStyle from '../../components/Banner/Banner.module.scss';
import Catalog from '../../components/Catalog';
import Filter from '../../components/Filter';
import CatalogItem from '../../components/Catalog/CatalogItem';
import FilterCategory from '../../components/Filter/FilterCategory';
import Checkbox from '../../components/UI/Checkbox';
import NumberInput from '../../components/UI/NumberInput';

interface DogsPageProps {
  dogs: IDogItem[];
}

import filterCategoryStyle from '../../components/Filter/FilterCategory/FilterCategory.module.scss';
import Head from 'next/head';
import { IDogItem } from '../../components/Search';

const DogsPage: NextPage<DogsPageProps> = ({ dogs }) => {
  return (
    <main>
      <Head>
        <title>All our dogs 😊 | Monito</title>
      </Head>
      <div className={`${style.container} container`}>
        <div className={`${style.path}`}>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5303 8.46967C11.2374 8.17678 10.7626 8.17678 10.4697 8.46967C10.1768 8.76256 10.1768 9.23744 10.4697 9.53033L11.5303 8.46967ZM14 12L14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L14 12ZM10.4697 14.4697C10.1768 14.7626 10.1768 15.2374 10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303L10.4697 14.4697ZM10.4697 9.53033L13.4697 12.5303L14.5303 11.4697L11.5303 8.46967L10.4697 9.53033ZM13.4697 11.4697L10.4697 14.4697L11.5303 15.5303L14.5303 12.5303L13.4697 11.4697Z"
              fill="#667479"
            />
          </svg>

          <Link href={'/dogs'}>
            <a>Dogs</a>
          </Link>
        </div>
        <Banner background="url('/static/img/317/03.png'), #FCEFD6" right>
          <h1 className="text-white">One more friend</h1>
          <h2 className="text-white">Thousands more fun!</h2>
          <p className="text-white">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className={`${bannerStyle.buttonsRow}`}>
            <Button border white>
              View Intro{' '}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 9V15L15 12L10 9Z" fill="#003459" />
                <path
                  d="M10 9L10.3859 8.35688C10.1542 8.21786 9.86561 8.21422 9.63048 8.34735C9.39534 8.48048 9.25 8.7298 9.25 9H10ZM10 15H9.25C9.25 15.2702 9.39534 15.5195 9.63048 15.6526C9.86561 15.7858 10.1542 15.7821 10.3859 15.6431L10 15ZM15 12L15.3859 12.6431C15.6118 12.5076 15.75 12.2634 15.75 12C15.75 11.7366 15.6118 11.4924 15.3859 11.3569L15 12ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM9.25 9V15H10.75V9H9.25ZM10.3859 15.6431L15.3859 12.6431L14.6141 11.3569L9.61413 14.3569L10.3859 15.6431ZM15.3859 11.3569L10.3859 8.35688L9.61413 9.64312L14.6141 12.6431L15.3859 11.3569Z"
                  fill="#003459"
                />
              </svg>
            </Button>
            <Button href="/dogs" white>
              Explore Now
            </Button>
          </div>
        </Banner>
        <div className={`${style.body}`}>
          <Filter className={style.filter}>
            <FilterCategory title="Gender">
              <Checkbox id="gender-male">Male</Checkbox>
              <Checkbox id="gender-female">Female</Checkbox>
            </FilterCategory>
            <FilterCategory title="Color">
              <Checkbox id="color-white">White</Checkbox>
              <Checkbox id="color-red">Red</Checkbox>
              <Checkbox id="color-apricot">Apricot</Checkbox>
              <Checkbox id="color-black">Black</Checkbox>
              <Checkbox id="color-blackwhite">Black & White</Checkbox>
              <Checkbox id="color-silver">Silver</Checkbox>
              <Checkbox id="color-tan">Tan</Checkbox>
            </FilterCategory>
            <FilterCategory title="Price">
              <div className={`${filterCategoryStyle.row}`}>
                <NumberInput placeholder="Min" />
                <NumberInput placeholder="Max" />
              </div>
            </FilterCategory>
            <FilterCategory title="Breed">
              <Checkbox id="breed-small">Small</Checkbox>
              <Checkbox id="breed-medium">Medium</Checkbox>
              <Checkbox id="breed-large">Large</Checkbox>
            </FilterCategory>
          </Filter>
          <div className={`${style.catalog}`}>
            <h3>All our dogs 😊</h3>
            <Catalog columnsCount={3}>
              {dogs.map((dog) => (
                <CatalogItem
                  key={dog._id}
                  category="dogs"
                  image={dog.images[0]}
                  title={dog.title}
                  price={dog.price}
                  SKU={dog.SKU}
                  description={[
                    ['Gene', dog.gene],
                    ['Age', dog.age],
                  ]}
                />
              ))}
            </Catalog>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DogsPage;

export const getStaticProps: GetStaticProps = async () => {
  const dogs = await fetch(
    'https://6358307cc26aac906f3dda7a.mockapi.io/dogs'
  ).then((res) => res.json());
  return { props: { dogs: dogs } };
};

DogsPage.getInitialProps = async () => {
  const dogs = await fetch(
    'https://6358307cc26aac906f3dda7a.mockapi.io/dogs'
  ).then((res) => res.json());
  return { dogs: dogs };
};
