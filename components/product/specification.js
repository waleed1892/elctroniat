import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSlidersH} from "@fortawesome/free-solid-svg-icons";

const Specification = ({product}) => {
    return (
        <div id='specification' className='border border-gray-100 shadow-md md:mb-6 md:px-12 md:py-10'>
            <h2 className='border-b border-gray-100 md:text-2xl md:mb-6 md:font-bold md:pb-4'>
                <FontAwesomeIcon className='text-gray-500 md:text-xl'
                                 icon={faSlidersH}/> Specification: <span
                className='text-gray-500'>{product.name}</span>
            </h2>
            <table className='border md:w-full'>
                {
                    product.attributes.map(attribute => {
                        return (
                            <tr>
                                <th className='border border-gray-100 md:py-1 md:px-2 md:text-right md:text-sm'>{attribute.name}</th>
                                <td className='border border-gray-100 md:py-1 md:px-2'>
                                    {
                                        attribute.options.map((option, index) => {
                                            return (
                                                <span>{option}{index !== attribute.options.length && ', '}</span>
                                            )
                                        })
                                    }
                                </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Specification
