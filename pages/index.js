import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Product from "./../public/static/images/product.jpeg";
import Footer from "../components/Footer";
import StickyNavbar from "../components/StickyNavbar";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCommentDots, faHeart} from "@fortawesome/free-regular-svg-icons";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import Brand from "./../public/static/images/brand.png";
import shirt from './../public/static/images/shirt.png'
import product from './../public/static/images/product.png'
import {Swiper, SwiperSlide} from "swiper/react";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <HeroBanner></HeroBanner>
            <section className='md:mx-24 md:py-10'>
                <div className='grid grid-cols-12 gap-x-2'>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                    <div className='border rounded-full p-2'>
                        <img className='max-w-full h-auto' src={shirt} decoding={"async"} loading={"lazy"} alt=""/>
                    </div>
                </div>
            </section>
            <section className='md:mx-24 md:py-10'>
                <h2 className='font-semibold text-lg mb-8'>Recommended for you</h2>
                <Swiper slidesPerView={7}>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className='w-3/4 mx-auto h-auto mb-8' src={product} alt=""/>
                            <div className='text-sm mb-4'>product title here</div>
                            <div className='font-bold text-lg'>AED 100</div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <section className='md:mx-24 md:py-10'>
                <hr className='bg-gray-300 md:mb-12'/>
                <div>
                    <h3 className='uppercase text-gray-500 md:text-center md:font-bold md:mb-3'>looking for
                        collections</h3>
                    <h2 className='uppercase md:text-center md:text-2xl md:font-bold'>check latest bundle</h2>
                </div>
                <div className='md:mt-10'>
                    <div className='grid md:grid-cols-4 md:gap-x-8'>
                        <div>
                            <div
                                className='border md:px-4 md:py-4 relative'>
                                <div
                                    className='md:bg-gradient-to-b md:from-primary-light md:to-primary absolute inset-0'
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0%, 100% 50%, 0 100%)",
                                        zIndex: -1
                                    }}></div>
                                <h3 className='text-white md:font-bold md:text-4xl md:uppercase'>best brands <br/> 40%
                                </h3>
                                <img src={Brand} alt=""/>
                                <div className='md:text-center'>
                                    <button
                                        className='bg-primary-light text-white md:text-sm md:mt-3 md:uppercase md:font-bold md:px-6 md:py-3 md:rounded-full transition-all duration-300 transform md:hover:text-primary-light md:hover:bg-white md:hover:scale-110'>check
                                        now
                                    </button>
                                    <div className='md:text-sm md:mt-3'>Hurry up limited offers</div>
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-3'>
                            <div className='grid md:grid-cols-4 md:gap-x-5 md:gap-y-6'>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='border border-gray-300 rounded-md duration-300 hover:shadow-xl'>
                                    <div className='md:p-3'>
                                        <img className='md:w-4/5 mx-auto' src={Product} alt=""/>
                                        <div className='text-secondary md:font-bold md:mt-3'>AED29.99</div>
                                        <h4 className='md:font-bold md:mt-3'>Zimtown Android 6.0 TV Box Rockchip
                                            RK3229</h4>
                                        <div className='relative rounded-full md:mt-3 md:bg-gray-300 md:p-1'>
                                            <div
                                                className='md:absolute bg-secondary md:w-11/12 md:inset-0 md:rounded-full'></div>
                                        </div>
                                        <small className='text-gray-500 md:text-xs'>Already Sold: 91%</small>
                                    </div>
                                    <div className='border-t border-gray-300 grid md:grid-cols-3'>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                             className='hover:text-secondary'/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faSearchPlus} size={"sm"}/>
                                        </div>
                                        <div className='md:p-1 md:text-center hover:bg-gray-200'>
                                            <FontAwesomeIcon icon={faCommentDots} size={"sm"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='md:mx-24 md:py-10'>
                <h2 className='uppercase md:text-center md:text-2xl md:font-bold'>choose category</h2>
                <div className='md:mt-10'>
                    <table className='border border-collapse md:w-full'>
                        <tbody>
                        <tr>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>mobile
                                    phones</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Laptops &
                                    Accessories</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Phone
                                    Accessories</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Audio &
                                    Television</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Smart
                                    Watches</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Computer &
                                    IT Accessories</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Smart
                                    Phones</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Today's
                                    Deals</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Electronics</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Camera &
                                    Photo</h4>
                            </td>
                            <td className='border md:p-5 relative group'>
                                <div
                                    className='border border-primary duration-500 origin-center transform scale-x-0 group-hover:scale-x-100 absolute inset-x-0 top-0'></div>
                                <h4 className='md:font-bold md:text-lg group-hover:text-primary capitalize'>Best
                                    Seller's</h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}


export default Home