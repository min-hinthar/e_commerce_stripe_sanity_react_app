import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

import { client, urlFor } from '@/lib/client';
import { Product } from '../../components';

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price } = product;

  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src={urlFor(image && image[0])} style={{width: 500, height: 500, borderRadius: 10,}}/>
                </div>
                {/* <div className='small-images-container'>
                    {image?.map((item, i) => (
                        <img 
                            src={urlFor(item)}
                            className=''
                            onMouseEnter=''
                        />
                    ))}
                </div> */}
            </div>
        {/* Descriptions */}
            <div className='product-detail-desc'>
                <h1>
                    {name}
                </h1>
            {/* Reviews */}
                <div className='reviews'>
                    <div>
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                    </div>
                    <p>
                        (562)
                    </p>
                </div>
                <h4>
                    Details:
                </h4>
                <p>
                    {details}
                </p>
                <p className='price'>
                    ${price}
                </p>
                <div className='quantity'>
                    <h3>
                        Quantity:
                    </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick=''><AiOutlineMinus /></span>
                        <span className='num' onClick=''>0</span>
                        <span className='plus' onClick=''><AiOutlinePlus /></span>
                    </p>
                </div>
                <div className='buttons'>
                    <button type='button' className='add-to-cart' onClick=''>
                        Add to Cart
                    </button>
                    <button type='button' className='buy-now' onClick=''>
                        Reserve Now
                    </button>
                </div>
            </div>
        </div>
    {/* May Also Like Products Suggestions */}
        <div className='maylike-products-wrapper'>
                <h2>
                    Our Finest Collections 💎
                </h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
            slug {
                current
            }   
        }
    `;
    
    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    }
};

export const getStaticProps = async ({ params: {slug}}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { product, products }
    }
};

export default ProductDetails