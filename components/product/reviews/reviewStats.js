import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const ReviewStats = ({reviews}) => {
    return (
        <div className='divide-gray-100 border-b border-gray-100 md:mb-6 md:pb-4 md:flex md:items-center'>
            <div className='md:w-2/12 md:text-center'>
                <div className='text-gray-500'><span
                    className='text-orange-500 md:text-3xl md:font-bold'>0.0</span> out of 5
                </div>
            </div>
            <div className='border-l border-r border-gray-100 md:w-8/12 md:px-4'>
                <div className='md:flex items-center'>
                    <div>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                    </div>
                    <div className='flex-1 rounded-full bg-gray-200 md:h-2.5 md:ml-2'></div>
                    <div className='md:ml-2'>{reviews.filter(review => review.rating === 5).length}</div>
                </div>
                <div className='md:flex items-center'>
                    <div>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                    </div>
                    <div className='flex-1 rounded-full bg-gray-200 md:h-2.5 md:ml-2'></div>
                    <div className='md:ml-2'>{reviews.filter(review => review.rating === 4).length}</div>
                </div>
                <div className='md:flex items-center'>
                    <div>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                    </div>
                    <div className='flex-1 rounded-full bg-gray-200 md:h-2.5 md:ml-2'></div>
                    <div className='md:ml-2'>{reviews.filter(review => review.rating === 3).length}</div>
                </div>
                <div className='md:flex items-center'>
                    <div>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                    </div>
                    <div className='flex-1 rounded-full bg-gray-200 md:h-2.5 md:ml-2'></div>
                    <div className='md:ml-2'>{reviews.filter(review => review.rating === 2).length}</div>
                </div>
                <div className='md:flex items-center'>
                    <div>
                        <FontAwesomeIcon className='text-orange-500 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                        <FontAwesomeIcon className='text-gray-200 md:text-sm' icon={faStar}/>
                    </div>
                    <div className='flex-1 rounded-full bg-gray-200 md:h-2.5 md:ml-2'></div>
                    <div className='md:ml-2'>{reviews.filter(review => review.rating === 1).length}</div>
                </div>
            </div>
            <div className='md:w-2/12 md:text-center'>
                <button
                    className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>Write
                    Review
                </button>
            </div>
        </div>
    )
}
export default ReviewStats