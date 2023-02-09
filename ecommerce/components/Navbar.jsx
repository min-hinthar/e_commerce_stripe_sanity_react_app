import React from 'react';
import Link from 'next/link';
import { HiShoppingBag } from 'react-icons/hi';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/">
          Mandalay Star Gemstones
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick="">
        <HiShoppingBag />
        <span className='cart-item-qty'>
          1
        </span>
      </button>
    </div>
  )
}

export default Navbar