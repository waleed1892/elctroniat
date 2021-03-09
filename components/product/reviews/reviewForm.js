import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import woocomerce from "../../../woocomerce";

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
    return (
        <form onSubmit={submitReview} method='post'>
            <div className='md:flex md:items-center md:mb-6'>
                <div>Your rating</div>
                <div className='md:ml-2'>
                    <FontAwesomeIcon className='duration-100 transition-colors hover:text-orange-500 text-gray-200'
                                     size={"sm"}
                                     icon={faStar}/>
                    <FontAwesomeIcon className='duration-100 transition-colors hover:text-orange-500 text-gray-200'
                                     size={"sm"}
                                     icon={faStar}/>
                    <FontAwesomeIcon className='duration-100 transition-colors hover:text-orange-500 text-gray-200'
                                     size={"sm"}
                                     icon={faStar}/>
                    <FontAwesomeIcon className='duration-100 transition-colors hover:text-orange-500 text-gray-200'
                                     size={"sm"}
                                     icon={faStar}/>
                    <FontAwesomeIcon className='duration-100 transition-colors hover:text-orange-500 text-gray-200'
                                     size={"sm"}
                                     icon={faStar}/>
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