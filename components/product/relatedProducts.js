import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";


const RelatedProducts = ({relatedProducts}) => {
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
                                <Link href={`/product/${product.slug}`}>
                                    <a href="">
                                        <img className='md:w-24 md:h-auto' src={product.images[0].src} loading={"lazy"}
                                             decoding={"async"} alt=""/>
                                    </a>
                                </Link>
                                <div className='md:ml-4'>
                                    <Link href={`/product/${product.slug}`}>
                                        <a className='md:font-bold md:mb-2 inline-block'>{product.name}</a>
                                    </Link>
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