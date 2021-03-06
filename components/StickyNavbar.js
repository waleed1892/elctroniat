import Link from "next/link";

const StickyNavbar = () => {
    return (
        <nav id='sticky-navbar' className='bg-primary text-white md:sticky md:top-0 md:z-40 text-center md:text-xl'>
            <Link href='/category/best-sellers'><a className='inline-block md:px-8 md:py-3 md:font-semibold'>Best Sellers</a></Link>
            <Link href='/category/todays-deals'><a className='inline-block md:px-8 md:py-3 md:font-semibold'>Today's Deals</a></Link>
            <Link href='/category/mobile-phones'><a className='inline-block md:px-8 md:py-3 md:font-semibold'>Mobile Phones</a></Link>
            <Link href='/category/laptop-accessories'><a className='inline-block md:px-8 md:py-3 md:font-semibold'>Laptop & Accessories</a></Link>
            <Link href='/electronics'><a className='inline-block md:px-8 md:py-3 md:font-semibold'>Electronics</a></Link>
        </nav>
    )
}

export default StickyNavbar