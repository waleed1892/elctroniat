const HtmlToReactParser = require('html-to-react').Parser;
const UserReviews = ({reviews}) => {
    let htmlToReactParser = new HtmlToReactParser();
    return (
        <div>
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
        </div>
    )
}
export default UserReviews