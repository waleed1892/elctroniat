import Header from "../components/Header";
import StickyNavbar from "../components/StickyNavbar";
import Footer from "../components/Footer";
import Link from 'next/link';

const account = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className='md:mx-24 md:py-6'>
                <div className='md:border md:py-3 md:px-6'>
                    <h1 className='uppercase md:text-2xl md:font-bold'>My Account</h1>
                    <div className='grid md:grid-cols-2 md:gap-x-12 md:mt-6'>
                        <div>
                            <h2 className='uppercase md:text-xl md:font-bold'>Login</h2>
                            <form action="" className='md:mt-6'>
                                <div className='md:mb-3'>
                                    <label className='md:text-sm md:block' htmlFor="">Username or Email Address <span
                                        className='text-secondary md:text-lg'>*</span></label>
                                    <input type="text"
                                           className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                                </div>
                                <div className='md:mb-3'>
                                    <label className='md:text-sm md:block' htmlFor="">Password <span
                                        className='text-secondary md:text-lg'>*</span></label>
                                    <input type="text"
                                           className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                                </div>
                                <div className='md:mb-3'>
                                    <label htmlFor="remember"><input id='remember' type="checkbox" value=''/> Remember
                                        Me</label>
                                </div>
                                <button
                                    className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>login
                                </button>
                            </form>
                            <Link href='/'><a className='text-primary hover:text-black md:mt-3 md:inline-block'>Lost
                                your password?</a></Link>
                        </div>
                        <div>
                            <h2 className='uppercase md:text-xl md:font-bold'>Register</h2>
                            <form action="" className='md:mt-6'>
                                <div className='md:mb-3'>
                                    <label className='md:text-sm md:block' htmlFor="">Username <span
                                        className='text-secondary md:text-lg'>*</span></label>
                                    <input type="text"
                                           className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                                </div>
                                <div className='md:mb-3'>
                                    <label className='md:text-sm md:block' htmlFor="">Email Address <span
                                        className='text-secondary md:text-lg'>*</span></label>
                                    <input type="text"
                                           className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                                </div>
                                <div className='md:mb-3'>
                                    <label className='md:text-sm md:block' htmlFor="">Password <span
                                        className='text-secondary md:text-lg'>*</span></label>
                                    <input type="password"
                                           className='rounded-sm outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2 md:mt-2'/>
                                </div>
                                <p className='md:text-sm md:mb-3'>Your personal data will be used to support your
                                    experience throughout this website, to manage access to your account, and for other
                                    purposes described in our <Link href='privacy-policy'><a
                                        className='text-primary'>privacy policy</a></Link>.</p>
                                <button
                                    className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-3'>Register
                                </button>
                            </form>
                            <Link href='/become-vendor'><a className='text-primary hover:text-black'>Become
                                Vendor</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default account