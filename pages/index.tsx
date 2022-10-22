import type { NextPage } from 'next';
import Head from 'next/head';
import Catalog from '../components/Catalog';
import CatalogItem from '../components/Catalog/CatalogItem';
import Hero from '../components/IndexPage/Hero';
import Section from '../components/Section';
import Button from '../components/UI/Button';
import { IDogItem } from './api/dogs';

interface HomeProps {
  dogs: IDogItem[];
}

const Home: NextPage<HomeProps> = ({ dogs }) => {
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
    </>
  );
};

export default Home;

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/dogs').then((res) =>
    res.json()
  );
  return { dogs: res };
};
