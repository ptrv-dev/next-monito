import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/IndexPage/Hero';

const Home: NextPage = () => {
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
    </>
  );
};

export default Home;
