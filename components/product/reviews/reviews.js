import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ReviewForm from "./reviewForm";
import ReviewStats from "./reviewStats";
import UserReviews from "./userReviews";

const Reviews = ({product, reviews}) => {
    return (
        <div id='reviews' className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
            <h2 className='border-b border-gray-100 md:text-2xl md:mb-6 md:font-bold md:pb-4'>
                <FontAwesomeIcon className='text-primary align-baseline md:text-xl' icon={faStar}/> User Reviews</h2>
            <ReviewStats reviews={reviews}></ReviewStats>
            <UserReviews reviews={reviews}></UserReviews>
            {
                reviews.length > 0 ?
                    <h3 className='md:mb-6 md:font-bold md:text-xl'>{reviews.length} reviews
                        for <span className='text-gray-500'>{product.name}</span></h3>
                    :
                    <h3 className='md:mb-6 md:font-bold md:text-xl'>Be the first to
                        review <em>"</em>{product.name}<em>"</em>
                    </h3>
            }

            <div className='text-gray-500 md:text-sm md:mb-6'>Your email address will not be published. Required fields
                are marked <span
                    className='text-secondary'>*</span></div>
            <ReviewForm product={product}></ReviewForm>
        </div>
    );
}

export default Reviews