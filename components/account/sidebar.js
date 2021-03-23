import userAccountStyles from "../../styles/userAccount.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";

import {
    faAngleDoubleRight,
    faChild,
    faFileDownload,
    faHome,
    faLifeRing, faQuestionCircle,
    faShoppingBasket, faSignOutAlt,
    faSlidersH,
    faUser
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <ul className="divide-y border-t">
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/useraccount'><a className={userAccountStyles.sidebarItem} href="">Dashboard</a></Link>
                <FontAwesomeIcon className="text-gray-400 group-hover:text-black" icon={faSlidersH}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/orders'><a className={userAccountStyles.sidebarItem} href="">Orders</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black'
                                 icon={faShoppingBasket}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/downloads'><a className={userAccountStyles.sidebarItem} href="">Downloads</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black'
                                 icon={faFileDownload}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/addresses'><a className={userAccountStyles.sidebarItem} href="">Addresses</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black' icon={faHome}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/account-details'><a className={userAccountStyles.sidebarItem} href="">Account-Details</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black' icon={faUser}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/followings'><a className={userAccountStyles.sidebarItem} href="">Followings</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black' icon={faChild}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/support-ticket'><a className={userAccountStyles.sidebarItem} href="">Support Tickets</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black' icon={faLifeRing}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <Link href='/account/inquiries'><a className={userAccountStyles.sidebarItem} href="">Inquiries</a></Link>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black'
                                 icon={faQuestionCircle}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <div className={userAccountStyles.sidebarItem}>Wishlist</div>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black'
                                 icon={faAngleDoubleRight}/>
            </li>
            <li className="py-2.5 flex items-center justify-between group cursor-pointer">
                <div className={userAccountStyles.sidebarItem}>Logout</div>
                <FontAwesomeIcon className='text-gray-400 group-hover:text-black' icon={faSignOutAlt}/>
            </li>
        </ul>
    )
}

export default Sidebar