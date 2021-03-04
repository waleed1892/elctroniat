import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Footer from "../../components/Footer";
import woocomerce from "../../woocomerce";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle, faSlidersH, faStar} from "@fortawesome/free-solid-svg-icons";
import Specification from "../../components/product/specification";
import UserReviews from "../../components/product/reviews";
import Offers from "../../components/product/offers";
import Policies from "../../components/product/policies";
import Inquiries from "../../components/product/inquiries";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";


const HtmlToReactParser = require('html-to-react').Parser;

const Product = ({product}) => {
    console.log(product)
    let htmlToReactParser = new HtmlToReactParser();
    let shortDescription = htmlToReactParser.parse(product.short_description);
    let description = htmlToReactParser.parse(product.description)
    const views = product.meta_data.find(item => item.key === 'rehub_views');
    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='md:mx-10 md:py-6'>
                <div className='grid md:grid-cols-3'>
                    <div></div>
                    {/*Product Info*/}
                    <div>
                        <h1 className='md:text-2xl md:font-bold md:mb-6'>{product.name}</h1>
                        <div className='border-b border-gray-100 md:flex md:items-center md:mb-6 md:pb-4'>
                            <a href='#reviews' className='text-gray-500 md:text-sm md:self-end'>Add your review</a>
                            <div className='md:ml-2 md:text-sm'><FontAwesomeIcon className='text-gray-500 md:text-sm'
                                                                                 icon={faEye}/> {views.value}
                            </div>
                            <div className='md:ml-2'>
                                {
                                    product.categories.map((category, index) =>
                                        <Link href={category.slug}><a
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
                                    <div className='md:mb-2'>
                                        <label className='md:font-semibold' for="">{attribute.name}: </label>
                                        {
                                            attribute.options.map((option, index) =>
                                                <span>{option}{index !== attribute.options.length - 1 && ', '}</span>)
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
                    <div></div>
                </div>
            </div>
            <div>
                <div id='productNav' className='bg-white border md:mb-6'>
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
                               href="">Reviews</a>
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
                    <UserReviews/>
                    <Offers/>
                    <Policies/>
                    <Inquiries/>
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
    return {
        props: {
            product
        }
    }
}
