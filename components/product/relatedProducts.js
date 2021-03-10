import Header from "../Header";
import StickyNavbar from "../StickyNavbar";
import Footer from "../Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const RelatedProducts = ({relatedProducts}) => {
    console.log(relatedProducts)
    return (
        <div className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
            <h2 className='border-b border-gray-100 md:text-2xl md:mb-6 md:font-bold md:pb-4'>
                <FontAwesomeIcon className='text-primary align-baseline md:text-xl' icon={faStar}/> Related Products
            </h2>
            <div className='grid md:grid-cols-3 md:gap-6'>
                {
                    relatedProducts.map(product => {
                        return (
                            <div className='border md:p-3 md:flex'>
                                <img className='md:w-24 md:h-auto' src={product.images[0].src} loading={"lazy"} decoding={"async"} alt=""/>
                                <div className='md:ml-4'>
                                    <h3 className='md:font-bold md:mb-2'>{product.name}</h3>
                                    <div className='text-primary md:text-sm'>AED{product.price}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default RelatedProducts