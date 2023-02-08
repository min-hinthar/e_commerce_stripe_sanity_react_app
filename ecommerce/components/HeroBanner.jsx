import React from 'react';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
        <div>
            <p className='beats-solo'>
                The August Birthstone
            </p>
            <h3>
                Peridot
            </h3>
            <img src='' alt='peridot' className='hero-banner-image'/>
            <div>
                <Link href="/product/ID">
                    <button type='button'>
                        BUTTON
                    </button>
                </Link>
                <div className='desc'>
                    <h5>
                        Description
                    </h5>
                    <p>
                        DESCRIPTION
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner