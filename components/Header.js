import Link from "next/link";
import Logo from './../public/static/images/logo.png'
import debounce from "lodash.debounce";


const Header = () => {

    const searchInputHandler = debounce((e) => {
        const {name, value} = e.target
        console.log(value)
    }, 1000)
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
                <div className='md:col-span-2'>
                    <input onChange={searchInputHandler} type="text"
                           className='border outline-none bg-gray-100 md:w-full md:px-4 md:py-1.5'
                           placeholder='What are you looking for...'/>
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
    )
}

export default Header