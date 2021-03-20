import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuestionCircle, faStar} from "@fortawesome/free-solid-svg-icons";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const isString = require('lodash.isstring')

const HtmlToReactParser = require('html-to-react').Parser;
const ProductMainInfo = ({product, reviews}) => {
    const htmlToReactParser = new HtmlToReactParser();
    let shortDescription = htmlToReactParser.parse(product.short_description);
    const views = product.meta_data.find(item => item.key === 'rehub_views') || 0;
    const advancedFields = []
    product.meta_data.forEach(item => {
        if (isString(item.value)) {
            if (item.value.match('field_')) {
                let temp = product.meta_data.find(customField => customField.key === item.key.slice(1))
                if (temp && temp.value) {
                    advancedFields.push(temp)
                }
            }
        }
    })
    return (
        <div>
            <h1 className='md:text-2xl md:font-bold md:mb-6'>{product.name}</h1>
            <div className='border-b border-gray-100 md:flex md:items-center md:mb-6 md:pb-4'>
                {
                    reviews.length > 0 ?
                        <div className='text-xs'>
                            <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                            <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                            <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                            <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                            <FontAwesomeIcon className='text-orange-500' icon={faStar}/>
                            <span
                                className='md:ml-2 text-gray-500'>({reviews.length} customer reviews)</span>
                        </div>
                        :
                        <a href='#reviews' className='text-gray-500 md:text-sm md:self-end'>Add your
                            review</a>
                }

                <div className='md:ml-2 md:text-sm'><FontAwesomeIcon className='text-gray-500 md:text-sm'
                                                                     icon={faEye}/> {views.value}
                </div>
                <div className='md:ml-2'>
                    {
                        product.categories.map((category, index) =>
                            <Link key={category.id} href={category.slug}><a
                                className='text-primary hover:underline md:text-xs'>{category.name}{(index !== product.categories.length - 1) && ', '}</a></Link>
                        )
                    }
                </div>
            </div>
            <div className='md:text-3xl md:font-bold md:mb-6 text-secondary'>{product.price}</div>
            <div className='md:text-sm md:mb-6'>{shortDescription}</div>
            <div className='md:mb-4'>
                {product.attributes.map(attribute => {
                    return (
                        <div key={attribute.id} className='md:mb-2'>
                            <label className='md:font-semibold' htmlFor="">{attribute.name}: </label>
                            {
                                attribute.options.map((option, index) =>
                                    <span
                                        key={option}>{option}{index !== attribute.options.length - 1 && ', '}</span>)
                            }
                        </div>
                    )
                })}
                {
                    advancedFields.map(item => {
                        return (
                            <div key={item.id} className='md:mb-2'>
                                <label className='md:font-semibold capitalize' htmlFor="">{item.key.replace('_', ' ').toLowerCase()}: </label>
                                <span>{item.value}</span>
                            </div>
                        )
                    })
                }
            </div>
            <button
                className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md md:mb-6'>
                <FontAwesomeIcon icon={faQuestionCircle}/> Ask
                Question
            </button>
        </div>
    )
}

export default ProductMainInfo