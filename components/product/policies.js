import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faKey, faLightbulb} from "@fortawesome/free-solid-svg-icons";

const Policies = () => {
    return (
        <div className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
            <h2 className='border-b border-gray-100 md:text-2xl md:mb-6 md:font-bold md:pb-4'>
                <FontAwesomeIcon className='text-gray-500 align-baseline md:text-xl' icon={faKey}/> Store Policies
            </h2>
        </div>
    )
}
export default Policies