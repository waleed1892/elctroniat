import Header from "../components/Header";
import StickyNavbar from "../components/StickyNavbar";
import Link from "next/link";
import product from "./../public/static/images/product.jpeg";


const Wishlist = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className='md:mx-24 md:py-6'>
                <div className='border md:py-3 md:px-6'>
                    <h1 className='uppercase md:text-2xl md:font-bold'>Wishlist</h1>
                    <div className='md:mt-3'>There's nothing in your wishlist</div>
                    <table className='border border-collapse md:w-full'>
                        <tbody>
                        <tr>
                            <td className='border md:w-1/12 md:text-center md:py-4'>
                                <Link href='/'><a className='text-secondary text-2xl'>&times;</a></Link>
                            </td>
                            <td className='border md:w-2/12 md:text-center md:py-4'>
                                <Link href='/'>
                                    <a>
                                        <img src={product} className='md:w-1/4 md:mx-auto' alt=""/>
                                    </a>
                                </Link>
                            </td>
                            <td className='border md:w-7/12 md:px-5 md:py-4'>
                                <Link href='/'><a className='text-primary hover:text-black'>Zimtown Android 6.0 TV Box
                                    Rockchip RK3229 Quad Core </a></Link>
                            </td>
                            <td className='border md:w-2/12 md:text-center md:py-4'>
                                <div>
                                    <div className='text-primary md:mb-3 md:font-bold'>AED29.99</div>
                                    <button
                                        className='bg-primary text-white uppercase rounded-sm md:font-bold md:px-2 md:py-1'>Add
                                        to cart
                                    </button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Wishlist