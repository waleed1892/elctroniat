import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Footer from "../../components/Footer";
import woocomerce from "../../woocomerce";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle} from "@fortawesome/free-solid-svg-icons";

const HtmlToReactParser = require('html-to-react').Parser;

const Product = ({product}) => {
    console.log(product)
    let htmlToReactParser = new HtmlToReactParser();
    let shortDescription = htmlToReactParser.parse(product.short_description);
    let description = htmlToReactParser.parse(product.description)
    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='md:mx-10 md:py-6'>
                <div className='grid md:grid-cols-3'>
                    <div></div>
                    {/*Product Info*/}
                    <div>
                        <h1 className='md:text-2xl md:font-bold'>{product.name}</h1>
                        <div className='md:text-3xl md:font-bold text-secondary'>{product.price}</div>
                        <div className='text-sm'>{shortDescription}</div>
                        <div>
                            {product.attributes.map(attribute => {
                                return (
                                    <div>
                                        <label for="">{attribute.name}: </label>
                                        {
                                            attribute.options.map(option => <span>{option}</span>)
                                        }
                                    </div>
                                )
                            })}
                        </div>
                        <button
                            className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-3'>
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
                <div id='productDescription' className='border border-gray-100 shadow-md md:mx-10 md:mb-6 md:px-12 md:py-10'>
                    {description}
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
