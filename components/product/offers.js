import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";

const Offers = () => {
    return (
        <div id="offers" className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
            <h2 className='border-b border-gray-100 md:text-2xl md:mb-6 md:font-bold md:pb-4'>
                <FontAwesomeIcon className='text-yellow-500 align-baseline md:text-xl' icon={faLightbulb}/> Offers
            </h2>
            <div>No, more offers for this product!</div>
        </div>
    )
}
export default Offers