import React from 'react';
import Head from 'next/head';

import { client } from '../lib/client';
import { Product, HeroBanner, FooterBanner } from '@/components';

const Home = ({ products, bannerData }) => {
  return (
    <> 
        <Head>
          <title> Mandalay Star Marketplace </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key='title'/>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
    {/* Hero Banner */}
        <HeroBanner />
        {console.log(bannerData)}
    {/* Product Details */}
      <div className='products-heading'>
        <h2> No.1 Gems Digital Marketplace </h2>
        <p> In addition to its world-renowned rubies and jadeites, Burma has produced several other interesting gemstone materials. The Mogok Stone Tract has produced spinel, apatite, scapolite, moonstone, zircon, garnet, iolite and amethyst gemstones. </p>
      </div>
      
      <div className='products-container'>
        {products?.map((product) => product.name)}
        {console.log(products)}
      </div>
      
    {/* Footer */}
      <FooterBanner />
    </>
  )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
};

export default Home;