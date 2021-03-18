import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Logo from './../public/static/images/logo.png'
import debounce from "lodash.debounce";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight, faSpinner} from "@fortawesome/free-solid-svg-icons";
import woocomerce from "../woocomerce";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core';
import chunk from "lodash.chunk";

SwiperCore.use([Navigation])


const Header = () => {
    const [searchLoader, setSearchLoader] = useState(false)
    const [searchedProducts, setSearchedProducts] = useState([]);
    const nextRef = useRef(null);
    const prevRef = useRef(null);

    const searchInputHandler = debounce(async (e) => {
        const {value} = e.target
        if (value) {
            setSearchLoader(true)
            const {data} = await woocomerce(`products?search=${value}`)
            setSearchedProducts(data)
            setSearchLoader(false)
        }
    }, 1000)
    useEffect(() => {
        window.addEventListener('click', function (e) {
            if (e.target.id !== 'searchResults') {
                const el = document.getElementById('searchResults');
                if (el) {
                    el.style.display = 'none';
                }
            }
        })
    }, [])

    const toggleSearch = () => {
        if (searchedProducts.length) {
            document.getElementById('searchResults').style.display = 'block';
        }
    }
    return (
        <header>
            <div id='top-nav' className='flex border-b border-gray-400 md:justify-between md:items-center md:mx-24'>
                <ul className='flex'>
                    <li><Link href='/'><a
                        className='px-2 py-1 inline-block text-gray-500 text-sm font-bold hover:text-primary'>Home</a></Link>
                    </li>
                    <li><Link href='/checkout'><a
                        className='px-2 py-1 inline-block text-gray-500 text-sm font-bold hover:text-primary'>Checkout</a></Link>
                    </li>
                    <li><Link href='/account'><a
                        className='px-2 py-1 inline-block text-gray-500 text-sm font-bold hover:text-primary'>My
                        Account</a></Link>
                    </li>
                    <li><Link href='/shop'><a
                        className='px-2 py-1 inline-block text-gray-500 text-sm font-bold hover:text-primary'>Shop</a></Link>
                    </li>
                    <li><Link href='/wishlist'><a
                        className='px-2 py-1 inline-block text-gray-500 text-sm font-bold hover:text-primary'>Wishlist</a></Link>
                    </li>
                </ul>
                <div className='flex md:justify-between'>
                    <span></span>
                    <div>
                        <Link href='/account'><a
                            className='text-primary px-2 py-1 inline-block hover:text-black'>Login</a></Link>
                        <span>|</span>
                        <Link href='/account'><a
                            className='text-primary px-2 py-1 inline-block hover:text-black'>Register</a></Link>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-8 md:items-center md:gap-x-2 md:mx-14 md:py-4">
                <div className='md:col-span-2'>
                    <Link href='/'>
                        <a href="">
                            <img src={Logo} className='w-4/5 h-auto' alt=""/>
                        </a>
                    </Link>
                </div>
                <div className='relative md:col-span-2'>
                    <input onFocus={toggleSearch} onChange={searchInputHandler} type="text"
                           className='border outline-none bg-gray-100 md:w-full md:px-4 md:py-1.5'
                           placeholder='What are you looking for...'/>
                    {
                        searchLoader &&
                        <div
                            className='bg-white border border-t-0 md:py-1 border-gray-200 absolute inset-x-0 z-50 md:text-center'>
                            <FontAwesomeIcon icon={faSpinner} size={"lg"} spin/>
                        </div>
                    }
                    {
                        searchedProducts.length > 0 &&
                        <div
                            id='searchResults'
                            className='bg-white border border-t-0 md:py-1 md:px-2 border-gray-200 absolute inset-x-0 z-50'>
                            <div className='md:flex md:justify-between md:mb-1'>
                                <div></div>
                                <div>
                                    <span
                                        ref={prevRef}
                                        className='border border-gray-300 hover:text-white hover:bg-blue-600 cursor-pointer md:px-1'><FontAwesomeIcon
                                        size={"sm"} icon={faChevronLeft}/></span>
                                    <span ref={nextRef}
                                          className='swiper-button-next border border-gray-300 hover:text-white hover:bg-blue-600 cursor-pointer md:px-1 md:ml-2'><FontAwesomeIcon
                                        className='swiper-button-next'
                                        size={"sm"} icon={faChevronRight}/></span>
                                </div>
                            </div>
                            <Swiper allowTouchMove={false} navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current
                            }}>
                                {
                                    chunk(searchedProducts, 5).map(chunkedProducts => {
                                        return (
                                            <SwiperSlide className='flex flex-col items-center justify-center'>
                                                {
                                                    chunkedProducts.map(product => {
                                                        return (
                                                            <Link href={`/product/${product.slug}`}>
                                                                <a className='hover:bg-gray-50 md:w-full md:flex md:py-1'>
                                                                    <img className='md:w-10 md:h-auto'
                                                                         src={product.images[0].src}
                                                                         loading={"lazy"} decoding={"async"}
                                                                         alt=""/>
                                                                    <div className='md:ml-2'>
                                                                        <div
                                                                            className='md:font-semibold'>{product.name}</div>
                                                                        <div>AED{product.price}</div>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <Link href='/shop'><a className='text-primary md:font-semibold' href="">See all
                                results</a></Link>
                        </div>
                    }
                </div>
                <ul className='md:col-span-3 md:flex md:divide-x md:divide-gray-400 md:text-sm md:font-semibold text-gray-500'>
                    <li><Link href='/'><a className='inline-block px-3'>Download App</a></Link></li>
                    <li><Link href='/'><a className='inline-block px-3'>Deals</a></Link></li>
                    <li><Link href='/'><a className='inline-block px-3'>Customer Care</a></Link></li>
                    <li><Link href='/'><a className='inline-block px-3'>Wishlist</a></Link></li>
                </ul>
                <span className='text-primary md:justify-self-end'>AED</span>
            </div>
        </header>
    );
}

export default Header