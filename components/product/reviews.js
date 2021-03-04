import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const UserReviews = () => {
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
            <div className='md:mb-6'>There are not reviews yet</div>
            <h3 className='md:mb-6 md:font-bold md:text-xl'>Be the first to review <em>"</em>produc here<em>"</em></h3>
            <div className='text-gray-500 md:text-sm md:mb-6'>Your email address will not be published. Required fields
                are marked <span
                    className='text-secondary'>*</span></div>
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
            <form action="">
                <div className='md:grid md:grid-cols-2 md:gap-y-4 md:gap-x-10 md:mb-6'>
                    <div className='md:col-span-2'>
                        <label className='md:block' htmlFor="">Your Review <span
                            className='text-secondary md:text-lg'>*</span></label>
                        <textarea rows={3}
                                  className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'></textarea>
                    </div>
                    <div>
                        <textarea rows={3}
                                  className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'></textarea>
                    </div>
                    <div>
                        <textarea rows={3}
                                  className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'></textarea>
                    </div>
                    <div className='md:col-span-2'>
                        <label className='md:block' htmlFor="">Name <span
                            className='text-secondary md:text-lg'>*</span></label>
                        <input type="text"
                               className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'/>
                    </div>
                    <div className='md:col-span-2'>
                        <label className='md:block' htmlFor="">Email <span
                            className='text-secondary md:text-lg'>*</span></label>
                        <input type="email"
                               className='rounded outline-none border border-gray-300 duration-300 focus:border-gray-500 md:w-full md:py-1.5 md:px-2'/>
                    </div>
                </div>
                <label className='md:block md:mb-6' htmlFor=""><input type="checkbox"/> Save my name, email, and website
                    in this
                    browser for the next time I comment.</label>

                <button
                    className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>Submit
                </button>
            </form>
        </div>
    );
}

export default UserReviews