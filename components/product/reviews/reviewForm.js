import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import woocomerce from "../../../woocomerce";
import Rating from "react-rating";

// const Rating = require('react-rating');

const ReviewForm = ({product}) => {
    const [reviewObj, setReview] = useState({
        review: '',
        pros: '',
        cons: '',
        reviewer: '',
        reviewer_email: '',
        rating: 5,
        product_id: product.id
    })

    const inputHandler = (e) => {
        const {name, value} = e.target;
        const review = {...reviewObj};
        review[name] = value;
        setReview(review)
    }
    const submitReview = async (e) => {
        e.preventDefault()
        try {
            await woocomerce.post('products/reviews', reviewObj);
            await woocomerce(`products/reviews?product=${[product.id]}`)
        } catch (e) {

        }
    }

    const changeRating = (value) => {
        const review = {...reviewObj};
        review["rating"] = value;
        setReview(review)
    }

    return (
        <form onSubmit={submitReview} method='post'>
            <div className='md:flex md:items-center md:mb-6'>
                <div>Your rating</div>
                <div className='md:ml-2'>
                    <Rating
                        emptySymbol={<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                          className="svg-inline--fa fa-star fa-w-18 text-gray-200 md:text-sm"
                                          role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor"
                                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>}
                        fullSymbol={
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                 className="svg-inline--fa fa-star fa-w-18 text-orange-500 md:text-sm"
                                 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor"
                                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </svg>
                        }
                        onChange={changeRating}/>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-y-4 md:gap-x-10 md:mb-6'>
                <div className='md:col-span-2'>
                    <label className='md:block' htmlFor="">Your Review <span
                        className='text-secondary md:text-lg'>*</span></label>
                    <textarea onChange={inputHandler} value={reviewObj.review} name='review' placeholder='Content...'
                              rows={3}
                              className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'></textarea>
                </div>
                <div>
                        <textarea onChange={inputHandler} value={reviewObj.pros} name='pros' placeholder='Pros...'
                                  rows={3}
                                  className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'></textarea>
                </div>
                <div>
                        <textarea onChange={inputHandler} value={reviewObj.cons} name='cons' placeholder='Cons...'
                                  rows={3}
                                  className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'></textarea>
                </div>
                <div className='md:col-span-2'>
                    <label className='md:block' htmlFor="">Name <span
                        className='text-secondary md:text-lg'>*</span></label>
                    <input onChange={inputHandler} type="text"
                           name='reviewer'
                           value={reviewObj.reviewer}
                           className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'/>
                </div>
                <div className='md:col-span-2'>
                    <label className='md:block' htmlFor="">Email <span
                        className='text-secondary md:text-lg'>*</span></label>
                    <input onChange={inputHandler} type="email" name='reviewer_email'
                           value={reviewObj.reviewer_email}
                           className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'/>
                </div>
            </div>
            <label className='md:inline-block md:mb-6' htmlFor="terms"><input id='terms' type="checkbox"/> Save my
                name, email, and website
                in this
                browser for the next time I comment.</label>

            <button type='submit'
                    className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:block'>Submit
            </button>
        </form>
    )
}

export default ReviewForm