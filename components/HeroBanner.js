const HeroBanner = () => {
    return (
        <div className='bg-blue-400 md:py-20'>
            <div className='text-white md:w-2/4 md:mx-auto'>
                <div className='md:text-2xl md:mb-3'>Best Deals For All New</div>
                <h1 className='md:text-5xl md:font-bold md:mb-3 uppercase'>Mobiles and tablets</h1>
                <p className='md:text-sm md:mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos est molestiae mollitia neque pariatur
                    perspiciatis, quia quis quo. Adipisci, cum illum labore quisquam ratione recusandae sint soluta
                    veniam
                    vero voluptates!</p>
                <button className='bg-primary-light md:text-lg md:uppercase md:font-bold md:px-6 md:py-3 md:rounded-full transition-all duration-300 transform md:hover:text-primary-light md:hover:bg-white md:hover:scale-110'>get started now!</button>
            </div>
        </div>
    )
}
export default HeroBanner