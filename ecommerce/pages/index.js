import React from 'react';
import Head from 'next/head';

const Home = () => {
  return (
    <> 
        <Head>
          <title> Mandalay Star Marketplace </title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" key='title'/>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
    {/* Hero Banner */}
        HeroBanner

    {/* Product Details */}
      <div>
        <h2> No.1 Gems & Jewellery Marketplace </h2>
        <p> In addition to its world-renowned rubies and jadeites, Myanmar has produced several other interesting gemstone materials. The Mogok Stone Tract has produced spinel, apatite, scapolite, moonstone, zircon, garnet, iolite and amethyst gemstones. </p>
      </div>
      
      <div>
        {['Peridot', 'Emerald', 'Sapphire', 'Tourmaline'].map((product) => product)}
      </div>
      
    {/* Footer */}
      Footer
    </>
  )
}

export default Home;