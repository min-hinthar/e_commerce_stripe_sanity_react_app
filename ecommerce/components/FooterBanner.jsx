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

        </div>
      </div>
    </div>
  )
}

export default FooterBanner