import {useState} from "react";
import {Range} from "rc-slider";
import 'rc-slider/assets/index.css';
import woocomerce from "../../woocomerce";

const FilterBar = ({attributes, filterProducts}) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000);
    const [filters, setFilters] = useState({});

    const changePrice = (value) => {
        const [minPrice, maxPrice] = value
        setMinPrice(minPrice)
        setMaxPrice(maxPrice)
    }

    const inputHandler = (e) => {
        const {name, value} = e.target
        const filters = {...filters}
        filters[name] = value
        setFilters(filters)
    }

    const makeFilterUrl = async () => {
        let url = `products`;
        url += `?min_price=${minPrice}&max_price=${maxPrice}`
        Object.keys(filters).forEach((filter, index) => {
            // if (index === 0) {
            //     url += `?attribute=${filter}&attribute_term=${filters[filter]}`
            // } else {
            //     url += `&attribute=${filter}&attribute_term=${filters[filter]}`
            // }
            url += `&attribute=${filter}&attribute_term=${filters[filter]}`
        });
        filterProducts(url);
    }

    return (
        <div>
            <div className='filterBox'>
                <h3 className='border-b md:pb-2 md:text-lg md:font-bold md:mb-4'>Filter by price</h3>
                <Range trackStyle={[{backgroundColor: '#3fa547'}]}
                       handleStyle={[
                           {
                               backgroundColor: 'white',
                               border: '1px solid #aeaeae',
                               width: '16px',
                               height: '16px',
                               marginTop: '-6px'
                           },
                           {
                               backgroundColor: 'white',
                               border: '1px solid #aeaeae',
                               width: '16px',
                               height: '16px',
                               marginTop: '-6px'
                           }
                       ]}
                       min={0} max={10000}
                       defaultValue={[0, 10000]}
                       onChange={changePrice} allowCross={false}/>
                <div className='flex justify-between items-center md:mt-3'>
                    <button
                        onClick={makeFilterUrl}
                        className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>filter
                    </button>
                    <div className='text-sm'>Price:<span className='md:ml-2'>AED{minPrice}</span> - AED{maxPrice}</div>
                </div>
            </div>
            {
                attributes.map(attribute => {
                    return (
                        <div key={attribute.id} className='filterBox'>
                            <h3 className='border-b md:pb-2 md:text-lg md:font-bold capitalize'>{attribute.name}</h3>
                            <div className='md:mt-3'>
                                {
                                    attribute.options.map(option => {
                                        return (
                                            <label className='block' htmlFor={option.name}>
                                                <input className='align-middle' id={option.name}
                                                       name={attribute.slug}
                                                       onChange={inputHandler}
                                                       value={option.id}
                                                       type="radio"/> {option.name} <span
                                                className='text-gray-500 md:text-sm'>({option.count})</span>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default FilterBar