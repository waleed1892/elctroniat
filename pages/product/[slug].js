import {useState} from "react";

import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Footer from "../../components/Footer";
import woocomerce from "../../woocomerce";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Specification from "../../components/product/specification";
import Offers from "../../components/product/offers";
import Policies from "../../components/product/policies";
import Inquiries from "../../components/product/inquiries";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import RelatedProducts from "../../components/product/relatedProducts";
import Reviews from "../../components/product/reviews/reviews";
import axios from "axios";
import ProductImages from "../../components/product/productImages";
import ProductMainInfo from "../../components/product/productMainInfo";

const HtmlToReactParser = require('html-to-react').Parser;
const publicIp = require('public-ip');

const Product = ({product, reviews, relatedProducts}) => {
    const [ip, setIp] = useState(null)
    const [quantity, setQuantity] = useState(1);
    let htmlToReactParser = new HtmlToReactParser();
    let description = htmlToReactParser.parse(product.description)
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
            wish_count: 'add',
            post_id: product.id
        }
        await axios.post('https://elctroniat.com/wp-admin/admin-ajax.php', data,)
    }

    const inputHandler = (e) => {
        const {value} = e.target;
        if (value < 1) {
            return;
        }
        setQuantity(value)
    }

    const addToCart = async () => {
        const data = {
            id: product.id,
            quantity: quantity
        }
        await axios.post('http://elctroniat.com/wp-json/wc/store/cart/add-item', data, {
            headers: {
                "X-WC-Store-API-Nonce": "8056546845",
            }
        })
    }

    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='md:mx-10 md:py-6'>
                <div className='grid md:grid-cols-5 md:gap-x-4'>
                    {/*Product Images*/}
                    <div className='md:col-span-2'>
                        <ProductImages product={product}/>
                    </div>
                    {/*Product Images End*/}

                    {/*Product Info*/}
                    <div className='md:col-span-2'>
                        <ProductMainInfo reviews={reviews} product={product}/>
                    </div>
                    {/*Product Info End*/}
                    <div>
                        <div className='bg-white border border-gray-100 md:shadow-md md:p-3'>
                            <div className='md:text-2xl md:mb-6'>AED {product.price}</div>
                            <div className='md:flex md:items-center md:mb-6'>
                                <form className='md:w-2/12'>
                                    <input onChange={inputHandler}
                                           value={quantity}
                                           className='appearance-none border-b w-full outline-none' type="number"/>
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
                               href="#specification">Additional Information</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="#reviews">Reviews <span className='text-base'>({reviews.length})</span></a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="#offers">More Offers</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="#policies">Store Policies</a>
                        </li>
                        <li>
                            <a className='text-gray-400 relative inline-block md:px-4 md:py-2 md:text-lg md:font-semibold'
                               href="#inquiries">Inquiries</a>
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
            relatedProducts,
        }
    }
}
