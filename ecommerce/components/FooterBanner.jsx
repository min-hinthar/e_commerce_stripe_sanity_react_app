import React from 'react';
import Link from 'next/link';

import { urlFor } from '@/lib/client';

const FooterBanner = ({ footerBanner: { discount, saleTime, largeText1, largeText2, smallText, midText, product, buttonText, image } }) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>
            {discount}
          </h3>
          <h3>
            {saleTime}
          </h3>
        </div>
        <div className='right'>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <h4>{largeText2}</h4>
          <Link href={`/product/${product}`}>
            <button type='button'>
              {buttonText}
            </button>
          </Link>
        </div>
        <img src={urlFor(image)} className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default FooterBanner