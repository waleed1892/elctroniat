import StickyNavbar from "../components/StickyNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "./../public/static/images/product.jpeg";
import HeartIcon from "./../public/static/images/heart.svg";


const shop = () => {
    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='md:mx-24 md:py-6'>
                <div className='grid md:grid-cols-4 gap-x-6'>
                    <div>
                        <div className='filterBox'>
                            <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Filter by price</h3>
                            <div className='flex justify-between items-center md:mt-3'>
                                <button
                                    className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>filter
                                </button>
                                <div className='text-sm'>Price:AED0 - AED10,000</div>
                            </div>
                        </div>
                        <div className='filterBox'>
                            <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Color</h3>
                            <div className='md:mt-3'>
                                <label className='block' htmlFor="black"><input className='align-middle' id='black'
                                                                                name='color'
                                                                                type="radio"/> black</label>
                                <label className='block' htmlFor="blue"><input className='align-middle' id='blue'
                                                                               name='color'
                                                                               type="radio"/> blue</label>
                                <label className='block' htmlFor="brown"><input className='align-middle' id='brown'
                                                                                name='color'
                                                                                type="radio"/> brown</label>
                                <label className='block' htmlFor="gold"><input className='align-middle' id='gold'
                                                                               name='color'
                                                                               type="radio"/> gold</label>
                                <label className='block' htmlFor="gray"><input className='align-middle' id='gray'
                                                                               name='color'
                                                                               type="radio"/> gray</label>
                            </div>
                        </div>
                        <div className='filterBox'>
                            <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Memory</h3>
                            <div className='md:mt-3'>
                                <label className='block' htmlFor="128GB"><input className='align-middle' id='128GB'
                                                                                name='color'
                                                                                type="radio"/> 128GB</label>
                                <label className='block' htmlFor="16GB"><input className='align-middle' id='16GB'
                                                                               name='color'
                                                                               type="radio"/> 16GB</label>
                                <label className='block' htmlFor="256GB"><input className='align-middle' id='256GB'
                                                                                name='color'
                                                                                type="radio"/> 256GB</label>
                                <label className='block' htmlFor="32GB"><input className='align-middle' id='32GB'
                                                                               name='color'
                                                                               type="radio"/> 32GB</label>
                                <label className='block' htmlFor="64GB"><input className='align-middle' id='64GB'
                                                                               name='color'
                                                                               type="radio"/> 64GB</label>
                            </div>
                        </div>
                        <div className='filterBox'>
                            <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Display Type</h3>
                            <div className='md:mt-3'>
                                <label className='block' htmlFor="10.5"><input className='align-middle' id='10.5'
                                                                               name='color'
                                                                               type="radio"/> 10.5"</label>
                                <label className='block' htmlFor="12"><input className='align-middle' id='12'
                                                                             name='color'
                                                                             type="radio"/> 12"</label>
                                <label className='block' htmlFor="15"><input className='align-middle' id='15'
                                                                             name='color'
                                                                             type="radio"/> 15"</label>
                                <label className='block' htmlFor="gold"><input className='align-middle' id='gold'
                                                                               name='color'
                                                                               type="radio"/> gold</label>
                                <label className='block' htmlFor="6.4"><input className='align-middle' id='6.4'
                                                                              name='color'
                                                                              type="radio"/> 6.4"</label>
                            </div>
                        </div>
                        <div className='filterBox'>
                            <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Operating System</h3>
                            <div className='md:mt-3'>
                                <label className='block' htmlFor="android"><input className='align-middle' id='android'
                                                                                  name='color'
                                                                                  type="radio"/> Android</label>
                                <label className='block' htmlFor="ios"><input className='align-middle' id='ios'
                                                                              name='color'
                                                                              type="radio"/> iOS</label>
                            </div>
                        </div>
                    </div>
                    <div className='md:col-span-3'>
                        <div className='md:flex md:justify-between'>
                            <div className='text-sm'>Showing 1-12 of 34 results</div>
                            <select name="" id="">
                                <option value="default">Default Sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="average-rating">Sort by average rating</option>
                                <option value="latest">Sort by latest</option>
                                <option value="price:low-to-high">Sort by price:low to high</option>
                                <option value="price:high-to-low">Sort by price:high to low</option>
                            </select>
                        </div>
                        <div className='md:mt-6'>
                            <div className='grid md:grid-cols-4 md:gap-x-5 md:gap-y-6'>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                                <div className='bg-white shadow-lg border border-gray-50'>
                                    <div className='md:py-2 md:px-4'>
                                        <img src={Product} alt=""/>
                                        <h2 className='md:font-bold md:text-xl md:mt-3'>Apple Ipod Touch</h2>
                                    </div>
                                    <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                        <div>
                                            <img className='w-4 h-auto' src={HeartIcon} alt=""/>
                                        </div>
                                        <div className='text-secondary md:font-bold md:text-lg'>AED199.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default shop;

export async function getStaticProps() {
    return {
        props: {}
    }
}