import {useState} from "react";

import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Footer from "../../components/Footer";
import woocomerce from "../../woocomerce";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle, faStar} from "@fortawesome/free-solid-svg-icons";
import Specification from "../../components/product/specification";
import Offers from "../../components/product/offers";
import Policies from "../../components/product/policies";
import Inquiries from "../../components/product/inquiries";
import {faEye, faHeart} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Thumbs} from 'swiper/core';
import RelatedProducts from "../../components/product/relatedProducts";
import Reviews from "../../components/product/reviews/reviews";
import axios from "axios";

SwiperCore.use([Thumbs]);

const HtmlToReactParser = require('html-to-react').Parser;
const publicIp = require('public-ip');

const Product = ({product, reviews, relatedProducts}) => {
    console.log(product)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [ip, setIp] = useState(null)
    let htmlToReactParser = new HtmlToReactParser();
    let shortDescription = htmlToReactParser.parse(product.short_description);
    let description = htmlToReactParser.parse(product.description)
    const views = product.meta_data.find(item => item.key === 'rehub_views') || 0;
    const wishlistCount = product.meta_data.find(item => item.key === 'post_wish_count') || 0;

    const getPublicIp = async () => {
        let ip = await publicIp.v4()
        setIp(ip)
    }
    getPublicIp();
    let inMyWishlist = product.meta_data.find(item => item.key === '_userwish_IP')
    if (inMyWishlist) {
        inMyWishlist = Object.values(inMyWishlist.value[0])
        inMyWishlist = inMyWishlist.includes(ip)
    }

    const toggleWish = async (e) => {
        const data = {
            action: 'rhwishlist',
            wishnonce: 'b885cf9d2b',
            wish_count: 'remove',
            post_id: product.id
        }
        await axios.post('https://elctroniat.com/wp-admin/admin-ajax.php', data)
    }

    const addToCart = async () => {
        const data = {
            product_id: product.id
        }
        await axios.post('https://elctroniat.com/?wc-ajax=add_to_cart', data)
    }

    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='md:mx-10 md:py-6'>
                <div className='grid md:grid-cols-5 md:gap-x-4'>
                    {/*Product Images*/}
                    <div className='md:col-span-2'>
                        <div className='md:flex'>
                            <div className='md:w-2/12 md:self-start'>
                                <Swiper
                                    direction='vertical'
                                    spaceBetween={15}
                                    onSwiper={setThumbsSwiper}
                                    slidesPerView={4}>
                                    {
                                        product.images.map(image => {
                                            return (
                                                <SwiperSlide>
                                                    <img className='border md:w-14 md:h-auto' src={image.src} alt=""/>
                                                </SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                            <div className='md:w-10/12'>
                                <Swiper thumbs={{swiper: thumbsSwiper}}>
                                    {
                                        product.images.map(image => {
                                            return (
                                                <SwiperSlide><img src={image.src} alt=""/></SwiperSlide>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    {/*Product Images End*/}

                    {/*Product Info*/}
                    <div className='md:col-span-2'>
                        <h1 className='md:text-2xl md:font-bold md:mb-6'>{product.name}</h1>
                        <div className='border-b border-gray-100 md:flex md:items-center md:mb-6 md:pb-4'>
                            {
                                reviews.length > 0 ?
                                    <div className='text-xs'>
                                        <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                                        <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                                        <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                                        <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                                        <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                                        <span
                                            className='md:ml-2 text-gray-500'>({reviews.length} customer reviews)</span>
                                    </div>
                                    :
                                    <a href='#reviews' className='text-gray-500 md:text-sm md:self-end'>Add your
                                        review</a>
                            }

                            <div className='md:ml-2 md:text-sm'><FontAwesomeIcon className='text-gray-500 md:text-sm'
                                                                                 icon={faEye}/> {views.value}
                            </div>
                            <div className='md:ml-2'>
                                {
                                    product.categories.map((category, index) =>
                                        <Link key={category.id} href={category.slug}><a
                                            className='text-primary hover:underline md:text-xs'>{category.name}{(index !== product.categories.length - 1) && ', '}</a></Link>
                                    )
                                }
                            </div>
                        </div>
                        <div className='md:text-3xl md:font-bold md:mb-6 text-secondary'>{product.price}</div>
                        <div className='md:text-sm md:mb-6'>{shortDescription}</div>
                        <div className='md:mb-4'>
                            {product.attributes.map(attribute => {
                                return (
                                    <div key={attribute.id} className='md:mb-2'>
                                        <label className='md:font-semibold' for="">{attribute.name}: </label>
                                        {
                                            attribute.options.map((option, index) =>
                                                <span
                                                    key={option}>{option}{index !== attribute.options.length - 1 && ', '}</span>)
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <button
                            className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-6'>
                            <FontAwesomeIcon icon={faQuestionCircle}/> Ask
                            Question
                        </button>
                    </div>
                    {/*Product Info End*/}
                    <div>
                        <div className='bg-white border border-gray-100 md:shadow-md md:p-3'>
                            <div className='md:text-2xl md:mb-6'>AED {product.price}</div>
                            <div className='md:flex md:items-center md:mb-6'>
                                <form className='md:w-2/12'>
                                    <input className='appearance-none border-b w-full outline-none' type="number"/>
                                </form>
                                <div className='md:w-10/12 md:text-center'>
                                    <button
                                        onClick={addToCart}
                                        className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>Add
                                        to cart
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={toggleWish}
                                className='transform rounded-sm relative origin-left duration-300 focus:outline-none hover:scale-x-105 hover:text-secondary border border-transparent group hover:border-gray-200 md:flex md:items-center md:px-2 md:py-1'>
                                <FontAwesomeIcon className={inMyWishlist ? 'text-secondary' : ''} icon={faHeart}/>
                                <div className='md:ml-2'>Add to wishlist</div>
                                <span
                                    className='absolute duration-100 transform transition-transform -top-3 scale-0 right-0 text-sm text-white bg-secondary w-5 h-5 items-center justify-center flex rounded-full group-hover:scale-100'>{wishlistCount ? wishlistCount.value : 0}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div id='productNav' className='bg-white border md:mb-6 md:shadow-md'>
                    <ul className='md:flex md:justify-center list-none'>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="">Description</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="">Additional Information</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="">Reviews <span className='text-base'>({reviews.length})</span></a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="">More Offers</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="">Store Policies</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="">Inquiries</a>
                        </li>
                    </ul>
                </div>
                <div className='md:mx-10'>
                    <div id='productDescription'
                         className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
                        {description}
                    </div>
                    <Specification product={product}/>
                    <Reviews product={product} reviews={reviews}/>
                    <Offers/>
                    <Policies/>
                    <Inquiries/>
                    {
                        relatedProducts.length > 0 &&
                        <RelatedProducts relatedProducts={relatedProducts}></RelatedProducts>
                    }
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Product

// This gets called on every request
export async function getServerSideProps({params}) {
    const {slug} = params
    const {data} = await woocomerce(`products?slug=${slug}`);
    const product = data[0]
    const reviewRes = await woocomerce(`products/reviews?product=${[product.id]}`)
    const reviews = reviewRes.data
    let relatedProducts = [];
    if (product.related_ids.length > 0) {
        const relatedProductsRes = await woocomerce.get(`products?include=${product.related_ids}`);
        relatedProducts = relatedProductsRes.data
    }
    return {
        props: {
            product,
            reviews,
            relatedProducts
        }
    }
}
