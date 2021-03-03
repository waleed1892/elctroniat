const FilterBar = () => {
    return (
        <div>
            <div className='filterBox'>
                <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Filter by price</h3>
                <div className='flex justify-between items-center md:mt-3'>
                    <button
                        className='uppercase bg-primary text-white md:font-bold md:py-1 md:px-5 md:rounded-sm md:shadow-md'>filter
                    </button>
                    <div className='text-sm'>Price:AED0 - AED10,000</div>
                </div>
            </div>
            <div className='filterBox'>
                <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Color</h3>
                <div className='md:mt-3'>
                    <label className='block' htmlFor="black"><input className='align-middle' id='black'
                                                                    name='color'
                                                                    type="radio"/> black</label>
                    <label className='block' htmlFor="blue"><input className='align-middle' id='blue'
                                                                   name='color'
                                                                   type="radio"/> blue</label>
                    <label className='block' htmlFor="brown"><input className='align-middle' id='brown'
                                                                    name='color'
                                                                    type="radio"/> brown</label>
                    <label className='block' htmlFor="gold"><input className='align-middle' id='gold'
                                                                   name='color'
                                                                   type="radio"/> gold</label>
                    <label className='block' htmlFor="gray"><input className='align-middle' id='gray'
                                                                   name='color'
                                                                   type="radio"/> gray</label>
                </div>
            </div>
            <div className='filterBox'>
                <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Memory</h3>
                <div className='md:mt-3'>
                    <label className='block' htmlFor="128GB"><input className='align-middle' id='128GB'
                                                                    name='color'
                                                                    type="radio"/> 128GB</label>
                    <label className='block' htmlFor="16GB"><input className='align-middle' id='16GB'
                                                                   name='color'
                                                                   type="radio"/> 16GB</label>
                    <label className='block' htmlFor="256GB"><input className='align-middle' id='256GB'
                                                                    name='color'
                                                                    type="radio"/> 256GB</label>
                    <label className='block' htmlFor="32GB"><input className='align-middle' id='32GB'
                                                                   name='color'
                                                                   type="radio"/> 32GB</label>
                    <label className='block' htmlFor="64GB"><input className='align-middle' id='64GB'
                                                                   name='color'
                                                                   type="radio"/> 64GB</label>
                </div>
            </div>
            <div className='filterBox'>
                <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Display Type</h3>
                <div className='md:mt-3'>
                    <label className='block' htmlFor="10.5"><input className='align-middle' id='10.5'
                                                                   name='color'
                                                                   type="radio"/> 10.5"</label>
                    <label className='block' htmlFor="12"><input className='align-middle' id='12'
                                                                 name='color'
                                                                 type="radio"/> 12"</label>
                    <label className='block' htmlFor="15"><input className='align-middle' id='15'
                                                                 name='color'
                                                                 type="radio"/> 15"</label>
                    <label className='block' htmlFor="gold"><input className='align-middle' id='gold'
                                                                   name='color'
                                                                   type="radio"/> gold</label>
                    <label className='block' htmlFor="6.4"><input className='align-middle' id='6.4'
                                                                  name='color'
                                                                  type="radio"/> 6.4"</label>
                </div>
            </div>
            <div className='filterBox'>
                <h3 className='border-b md:pb-2 md:text-lg md:font-bold'>Operating System</h3>
                <div className='md:mt-3'>
                    <label className='block' htmlFor="android"><input className='align-middle' id='android'
                                                                      name='color'
                                                                      type="radio"/> Android</label>
                    <label className='block' htmlFor="ios"><input className='align-middle' id='ios'
                                                                  name='color'
                                                                  type="radio"/> iOS</label>
                </div>
            </div>
        </div>
    )
}

export default FilterBar