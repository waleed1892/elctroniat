import Link from 'next/link'
import AppStore from "./../public/static/images/app-store.png";
import PlayStore from "./../public/static/images/google-store.png";
import InstagramLogo from "./../public/static/images/instagram.svg";
import FacebookLogo from "./../public/static/images/facebook-logo.svg";
import TwitterLogo from "./../public/static/images/twitter-logo.svg";
import YoutubeLogo from "./../public/static/images/youtube-logo.svg";
import FacebookMessengerLogo from "./../public/static/images/facebook-messenger.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHandsHelping} from "@fortawesome/free-solid-svg-icons";


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
                        <div className='flex items-center'>
                            <div
                                className='bg-gray-500 rounded-full w-10 h-10 md:flex md:items-center md:justify-center md:rounded-l-full'>
                                <FontAwesomeIcon size={"lg"} className='text-white' icon={faHandsHelping}/>
                            </div>
                            <div className='md:ml-3'>
                                <h5 className='md:font-bold md:text-xl text-gray-500 capitalize'>Help Center</h5>
                                <div className='text-sm'>support.elctroniat.com</div>
                            </div>
                        </div>
                        <div className='md:flex md:items-center'>
                            <div
                                className='bg-gray-500 rounded-full w-10 h-10 md:flex md:items-center md:justify-center md:rounded-l-full'>
                                <FontAwesomeIcon icon={faEnvelope} className='text-white' size={"lg"}/>
                            </div>
                            <div className='md:ml-3'>
                                <h5 className='md:font-bold md:text-xl text-gray-500 capitalize'>Email Support</h5>
                                <div className='text-sm'>support@elctroniat.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mx-24 md:py-6'>
                <div className='grid md:grid-cols-3'>
                    <ul className='flex flex-col'>
                        <li><Link href='/'><a
                            className='text-sm md:inline-block md:py-1 hover:text-primary'>Home</a></Link></li>
                        <li><Link href='/'><a
                            className='text-sm md:inline-block md:py-1 hover:text-primary'>Checkout</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>My
                            Account</a></Link></li>
                        <li><Link href='/'><a
                            className='text-sm md:inline-block md:py-1 hover:text-primary'>Shop</a></Link></li>
                        <li><Link href='/'><a
                            className='text-sm md:inline-block md:py-1 hover:text-primary'>Wishlist</a></Link></li>
                    </ul>
                    <ul className='flex flex-col'>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Best
                            Sellers</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Today's
                            Deals</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Mobile
                            Phones</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Laptop &
                            Accessories</a></Link></li>
                        <li><Link href='/'><a
                            className='text-sm md:inline-block md:py-1 hover:text-primary'>Electronics</a></Link></li>
                    </ul>
                    <ul className='flex flex-col'>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Smart
                            Phones</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Smart
                            Watches</a></Link></li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Phone
                            Accessories</a></Link>
                        </li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Computer &
                            IT Accessories</a></Link>
                        </li>
                        <li><Link href='/'><a className='text-sm md:inline-block md:py-1 hover:text-primary'>Camera &
                            Photo</a></Link></li>
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