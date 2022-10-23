import type { NextPage } from 'next';
import Head from 'next/head';
import Banner from '../components/Banner';
import Catalog from '../components/Catalog';
import CatalogItem from '../components/Catalog/CatalogItem';
import Hero from '../components/IndexPage/Hero';
import Section from '../components/Section';
import Button from '../components/UI/Button';
import { IDogItem } from './api/dogs';

interface HomeProps {
  dogs: IDogItem[];
  products: IProductItem[];
}

import bannerStyle from '../components/Banner/Banner.module.scss';
import { IProductItem } from './api/products';
import Sellers from '../components/Sellers';

const Home: NextPage<HomeProps> = ({ dogs, products }) => {
  return (
    <>
      <Head>
        <title>Monito | Pets for Best</title>
        <meta
          name="description"
          content="Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Hero />
      <Section
        suptitle="Whats new?"
        title="Take a look at some of our pets"
        button={
          <Button border>
            View more{' '}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM7.80304 7.19699L11.1364 10.5303L12.197 9.46966L8.8637 6.13633L7.80304 7.19699ZM11.1364 9.46966L7.80304 12.803L8.8637 13.8637L12.197 10.5303L11.1364 9.46966Z"
                fill="#003459"
              />
            </svg>
          </Button>
        }
      >
        <Catalog>
          {dogs.map((dog) => (
            <CatalogItem
              key={dog._id}
              category="dogs"
              SKU={dog.SKU}
              image={dog.images[0]}
              title={dog.title}
              price={dog.price}
              description={[
                ['Gene', dog.gene],
                ['Age', dog.age],
              ]}
            />
          ))}
        </Catalog>
      </Section>
      <Banner background="url('/static/img/317/01.png'), #003459" right>
        <h1>One more friend</h1>
        <h2>Thousands more fun!</h2>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className={`${bannerStyle.buttonsRow}`}>
          <Button border>
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
          <Button>Explore Now</Button>
        </div>
      </Banner>
      <Section
        suptitle="Hard to choose right products for your pets?"
        title="Our Products"
        button={
          <Button border>
            View more{' '}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM7.80304 7.19699L11.1364 10.5303L12.197 9.46966L8.8637 6.13633L7.80304 7.19699ZM11.1364 9.46966L7.80304 12.803L8.8637 13.8637L12.197 10.5303L11.1364 9.46966Z"
                fill="#003459"
              />
            </svg>
          </Button>
        }
      >
        <Catalog>
          {products.map((product) => (
            <CatalogItem
              key={product._id}
              category="products"
              SKU={product.SKU}
              image={product.image}
              title={product.title}
              description={[
                ['Product', product.product],
                ['Size', product.size || ''],
              ]}
              price={product.price}
              present={product.present}
            />
          ))}
        </Catalog>
      </Section>
      <Section
        title="Proud to be part of Pet Sellers"
        button={
          <Button border>
            View all our sellers{' '}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.8637 6.13633C8.57081 5.84343 8.09594 5.84343 7.80304 6.13633C7.51015 6.42922 7.51015 6.90409 7.80304 7.19699L8.8637 6.13633ZM11.6667 9.99999L12.197 10.5303C12.3377 10.3897 12.4167 10.1989 12.4167 9.99999C12.4167 9.80108 12.3377 9.61031 12.197 9.46966L11.6667 9.99999ZM7.80304 12.803C7.51015 13.0959 7.51015 13.5708 7.80304 13.8637C8.09594 14.1565 8.57081 14.1565 8.8637 13.8637L7.80304 12.803ZM7.80304 7.19699L11.1364 10.5303L12.197 9.46966L8.8637 6.13633L7.80304 7.19699ZM11.1364 9.46966L7.80304 12.803L8.8637 13.8637L12.197 10.5303L11.1364 9.46966Z"
                fill="#003459"
              />
            </svg>
          </Button>
        }
      >
        <Sellers />
      </Section>
      <Banner background="url('/static/img/317/02.png'), #FFB775">
        <h1>
          Adoption
          <img src="/static/img/icons/paw-icon.svg" alt="" />
        </h1>
        <h2>Thousands more fun!</h2>
        <p>
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className={`${bannerStyle.buttonsRow}`}>
          <Button border>
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
          <Button>Explore Now</Button>
        </div>
      </Banner>
    </>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const dogs = await fetch('http://localhost:3000/api/dogs').then((res) =>
    res.json()
  );

  const products = await fetch('http://localhost:3000/api/products').then(
    (res) => res.json()
  );
  return { dogs: dogs, products: products };
};
