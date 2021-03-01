import Link from 'next/link'
import AppStore from "./../public/static/images/app-store.png";
import PlayStore from "./../public/static/images/google-store.png";
import InstagramLogo from "./../public/static/images/instagram.svg";
import FacebookLogo from "./../public/static/images/facebook-logo.svg";
import TwitterLogo from "./../public/static/images/twitter-logo.svg";
import YoutubeLogo from "./../public/static/images/youtube-logo.svg";
import FacebookMessengerLogo from "./../public/static/images/facebook-messenger.svg";


const Footer = () => {
    return (
        <footer>
            <div className='border-t border-b bg-gray-100'>
                <div className='md:mx-24 md:py-2'>
                    <div className='grid md:grid-cols-3 justify-items-center'>
                        <div>
                            <h5 className='md:font-bold md:text-xl text-gray-500 capitalize'>mobile phones</h5>
                            <div className='text-sm'>Reach out to us through any of these support channels</div>
                        </div>
                        <div>
                            <h5 className='md:font-bold md:text-xl text-gray-500 capitalize'>Help Center</h5>
                            <div className='text-sm'>support.elctroniat.com</div>
                        </div>
                        <div>
                            <h5 className='md:font-bold md:text-xl text-gray-500 capitalize'>Email Support</h5>
                            <div className='text-sm'>support@elctroniat.com</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mx-24 md:py-6'>
                <div className='grid md:grid-cols-3'>
                    <ul className='flex flex-col'>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Home</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Checkout</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>My Account</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Shop</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Wishlist</a></Link></li>
                    </ul>
                    <ul className='flex flex-col'>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Best Sellers</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Today's Deals</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Mobile Phones</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Laptop &
                            Accessories</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Electronics</a></Link></li>
                    </ul>
                    <ul className='flex flex-col'>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Smart Phones</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Smart Watches</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Phone Accessories</a></Link>
                        </li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Computer & IT Accessories</a></Link>
                        </li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1'>Camera & Photo</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className='border-t bg-gray-100 md:py-2'>
                <div className='grid md:grid-cols-2 justify-items-center'>
                    <div className='text-center'>
                        <h5 className='md:text-lg md:mb-3 md:font-bold text-gray-500 uppercase'>Find us in store</h5>
                        <div className='flex'>
                            <img src={AppStore} alt=""/>
                            <img src={PlayStore} alt=""/>
                        </div>
                    </div>
                    <div className='text-center'>
                        <h5 className='md:text-lg md:mb-3 md:font-bold text-gray-500 uppercase'>Connect with us</h5>
                        <div className='md:flex'>
                            <img className='md:w-8 md:h-auto md:mx-4' src={InstagramLogo} alt=""/>
                            <img className='md:w-8 md:h-auto md:mx-4' src={FacebookLogo} alt=""/>
                            <img className='md:w-8 md:h-auto md:mx-4' src={TwitterLogo} alt=""/>
                            <img className='md:w-8 md:h-auto md:mx-4' src={YoutubeLogo} alt=""/>
                            <img className='md:w-8 md:h-auto md:mx-4' src={FacebookMessengerLogo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer