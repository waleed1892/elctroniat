import Header from "../components/Header";
import StickyNavbar from "../components/StickyNavbar";
import Footer from "../components/Footer";
import Sidebar from "../components/account/sidebar";


const userAccount = () => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className="border border-gray-300 md:mx-24 md:my-4 md:p-6 shadow-md">
                <h1 className="text-black text-4xl font-bold md:mb-6">My account</h1>
                <div className="md:flex md:space-x-6">
                    <div className="md:w-2/12">
                        <Sidebar></Sidebar>
                    </div>
                    <div
                        className="md:w-10/12 self-start border border-gray-200 border-opacity-100">
                        <div className='border border-gray-200 border-opacity-70 bg-gray-100 px-4 pt-6 pb-12 font-medium'>
                            <div className="">Hello <strong>admin</strong> (not <strong>admin?</strong>
                                <a className="md:text-green-600 " href="https://www.w3schools.com">Logout</a>)
                            </div>
                            <div className="md:mt-8">
                                From your account dashboard you can view your <a className="md:text-green-600 "
                                                                                 href="https://www.w3schools.com">recent
                                orders</a>, manage your <a className="md:text-green-600 "
                                                           href="https://www.w3schools.com">shipping
                                and billing addresses</a>, and <a className="md:text-green-600 "
                                                                  href="https://www.w3schools.com">edit your password
                                and
                                account details</a>.

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default userAccount