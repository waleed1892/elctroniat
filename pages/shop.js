import {useState} from "react";
import Link from "next/link";

import StickyNavbar from "../components/StickyNavbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import woocomerce from "../woocomerce";
import FilterBar from "../components/shop/filterBar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import Loader from "../components/Theme/Loader";


const shop = ({products, totalProducts, totalPages}) => {
    const [productsArr, setProducts] = useState(products)
    const [loader, setLoader] = useState(false)
    const [page, setPage] = useState(1)
    const paginationLinks = [];
    for (let i = 1; i <= totalPages; i++) {
        paginationLinks.push(i)
    }

    const changePage = async (e, page) => {
        e.preventDefault()
        setLoader(true)
        const {data} = await woocomerce.get(`products?per_page=12&page=${page}&orderby=title&order=asc`);
        setProducts(data)
        setLoader(false)
        setPage(page)
    }
    return (
        <div>
            <Header/>
            <StickyNavbar/>
            <div className='md:mx-24 md:py-6'>
                <div className='grid md:grid-cols-4 gap-x-6'>
                    <FilterBar/>
                    <div className='md:col-span-3'>
                        <div className='md:flex md:justify-between'>
                            <div
                                className='text-sm'>Showing {page === 1 ? 1 : ((page - 1) * 12 + 1)}-{page === totalPages ? totalProducts : productsArr.length * page} of {totalProducts} results
                            </div>
                            <select name="" id="">
                                <option value="default">Default Sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="average-rating">Sort by average rating</option>
                                <option value="latest">Sort by latest</option>
                                <option value="price:low-to-high">Sort by price:low to high</option>
                                <option value="price:high-to-low">Sort by price:high to low</option>
                            </select>
                        </div>
                        <div className='md:mt-6 relative'>
                            <Loader show={loader}/>
                            <div className='grid md:grid-cols-4 md:gap-x-5 md:gap-y-6'>
                                {
                                    productsArr.map(product =>
                                        <div key={product.id}
                                             className='bg-white shadow-lg border border-gray-50 md:flex md:flex-col md:justify-between'>
                                            <div className='md:py-2 md:px-4'>
                                                {
                                                    product.images.length > 0 &&
                                                    <img src={product.images[0].src}
                                                         alt=""/>
                                                }
                                                <Link href={`product/${product.slug}`}><a
                                                    className='md:font-bold md:text-xl md:mt-3 inline-block'>{product.name}</a>
                                                </Link>

                                            </div>
                                            <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                                <div>
                                                    <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                                     className='hover:text-secondary cursor-pointer'/>
                                                    <FontAwesomeIcon icon={faSearchPlus} size={"sm"}
                                                                     className='md:ml-3 cursor-pointer'/>
                                                </div>
                                                <div
                                                    className='text-secondary md:font-bold md:text-lg md:tracking-wide'>AED{product.price}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className='md:text-center md:mt-10'>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                 aria-label="Pagination">
                                {
                                    paginationLinks.map(page => <a onClick={(e) => {
                                            changePage(e, page)
                                        }} key={page} href="#"
                                                                   className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                                            {page}
                                        </a>
                                    )
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

export default shop;

export async function getStaticProps() {
    const {
        data,
        headers
    } = await woocomerce.get('products?per_page=12&page=1&orderby=title&order=asc')
    const products = data
    const totalProducts = headers['x-wp-total'];
    const totalPages = Number(headers['x-wp-totalpages']);
    return {
        props: {
            products,
            totalProducts,
            totalPages
        }
    }
}