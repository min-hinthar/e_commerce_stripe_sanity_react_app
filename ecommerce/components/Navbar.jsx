import React from 'react';
import Link from 'next/link';
import { HiShoppingBag } from 'react-icons/hi';
import Image from 'next/image';

import { Cart } from './';
import { useStateContext } from '@/context/StateContext';
import logo from '../public/static/MorningStar.png'

const Navbar = () => {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href="/" passHref>
          <a>
           <Image src={logo} alt='logo' height={50} width={70}/>           
          </a>
        </Link>
      </p>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <HiShoppingBag />
        <span className='cart-item-qty'>
          {totalQuantities}
        </span>
      </button>

      { showCart && <Cart /> }
    </div>
  )
}

export default Navbar