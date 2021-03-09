import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import ReviewForm from "./reviewForm";

const HtmlToReactParser = require('html-to-react').Parser;

const UserReviews = ({product, reviews}) => {
    let htmlToReactParser = new HtmlToReactParser();

    return (
        <div id='reviews' className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
            <h2 className='border-b border-gray-100 md:text-2xl md:mb-6 md:font-bold md:pb-4'>
                <FontAwesomeIcon className='text-primary align-baseline md:text-xl' icon={faStar}/> User Reviews</h2>
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
                        <div className='md:ml-2'>0</div>
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
                        <div className='md:ml-2'>0</div>
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
                        <div className='md:ml-2'>0</div>
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
                        <div className='md:ml-2'>0</div>
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
                        <div className='md:ml-2'>0</div>
                    </div>
                </div>
                <div className='md:w-2/12 md:text-center'>
                    <button
                        className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>Write
                        Review
                    </button>
                </div>
            </div>
            {
                reviews.length > 0 ?
                    <div className='md:mb-6'>
                        {
                            reviews.map(review => {
                                return (
                                    <div key={review.id}
                                         className='border border-gray-300 md:flex md:items-center md:p-4 md:mb-3'>
                                        <img className='border-4 border-gray-200 md:w-20 md:h-20 md:rounded-full'
                                             src={review.reviewer_avatar_urls[Object.keys(review.reviewer_avatar_urls)[Object.keys(review.reviewer_avatar_urls).length - 1]]}
                                             alt=""/>
                                        <div className='border-b border-gray-200 md:ml-3 md:flex-1'>
                                            <div
                                                className='text-sm font-semibold uppercase text-gray-600 md:mb-2'>{review.reviewer} - <span
                                                className='text-gray-400 font-normal'>{review.date_created}</span></div>
                                            <div className='md:mb-3'>
                                                {htmlToReactParser.parse(review.review)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    <div className='md:mb-6'>There are not reviews yet</div>
            }
            <h3 className='md:mb-6 md:font-bold md:text-xl'>Be the first to review <em>"</em>{product.name}<em>"</em>
            </h3>
            <div className='text-gray-500 md:text-sm md:mb-6'>Your email address will not be published. Required fields
                are marked <span
                    className='text-secondary'>*</span></div>
            <ReviewForm product={product}></ReviewForm>
        </div>
    );
}

export default UserReviews