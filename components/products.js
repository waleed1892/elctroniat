import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faArrowDown, faSearchPlus} from "@fortawesome/free-solid-svg-icons";

const Products = ({products}) => {
    const editorChoice = (product) => {
        const editorChoice = product.meta_data.find(item => item.key === 'is_editor_choice')
        if (editorChoice) {
            if (editorChoice.value === '2') {
                return <div>best seller</div>
            } else if (editorChoice.value === '3') {
                return <div>best value</div>
            }
        } else {
            return false;
        }
    }

    const score = (product) => {
        let score = product.meta_data.find(item => item.key === 'rehub_review_overall_score')
        if (!score) {
            return;
        }
        score = Number(score.value);
        let className;
        if (score < 7) {
            className = 'bg-orange-500'
        } else if (score >= 7 && score <= 8.5) {
            className = 'bg-primary-light'
        } else if (score > 8.5) {
            className = 'bg-primary'
        }
        return <div
            className={`text-white ${className} w-10 h-10 rounded-full flex items-center justify-center font-bold`}>{score}</div>;
    }
    return (
        <div className='md:mt-6 relative'>
            <div className='grid md:grid-cols-4 md:gap-x-5 md:gap-y-6'>
                {
                    products.map(product =>
                        <div key={product.id}
                             className='bg-white shadow-lg border border-gray-50 md:flex md:flex-col md:justify-between'>
                            {
                                editorChoice(product)
                            }
                            <div className='md:py-2 md:px-4'>
                                {
                                    product.images.length > 0 &&
                                    <img loading={"lazy"} decoding={"async"} src={product.images[0].src}
                                         alt=""/>
                                }
                                <div className='flex items-center'>
                                    <Link href={`/product/${product.slug}`}>
                                        <a className='md:font-bold md:text-xl md:mt-3 inline-block'>{product.name}</a>
                                    </Link>
                                    {
                                        score(product)
                                    }
                                </div>
                            </div>
                            <div className='flex justify-between items-center border-t md:px-4 md:py-1'>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} size={"sm"}
                                                     className='hover:text-secondary cursor-pointer'/>
                                    <FontAwesomeIcon icon={faSearchPlus} size={"sm"}
                                                     className='md:ml-3 cursor-pointer'/>
                                </div>
                                <div
                                    className='text-secondary md:font-bold md:text-lg md:tracking-wide'>
                                    AED{product.price}
                                    {
                                        product.price < product.regular_price &&
                                        <span
                                            className='text-primary text-right block text-xs'><FontAwesomeIcon
                                            icon={faArrowDown}/>
                                            {Math.floor((((product.regular_price - product.price) / product.regular_price) * 100))} %
                                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products