import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const Loader = ({show}) => {
    return (
        <div
            className={'absolute inset-0 bg-gray-50 bg-opacity-50 z-10 flex items-center justify-center' + (show ? '' : ' hidden')}>
            <FontAwesomeIcon size={'2x'} icon={faSpinner} spin/>
        </div>
    )
}

export default Loader