import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from "react";
import SwiperCore, {Thumbs} from "swiper";

SwiperCore.use([Thumbs]);

const ProductImages = ({product}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className='md:flex'>
            <div className='md:w-2/12 md:self-start'>
                <Swiper
                    direction='vertical'
                    spaceBetween={10}
                    onSwiper={setThumbsSwiper}
                    slidesPerView={'auto'}>
                    {
                        product.images.map(image => {
                            return (
                                <SwiperSlide className='h-auto p-1'>
                                    <img className='border md:w-14 md:h-14 cursor-pointer' src={image.src} alt=""/>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
            <div className='md:w-10/12'>
                <Swiper thumbs={{swiper: thumbsSwiper}}>
                    {
                        product.images.map(image => {
                            return (
                                <SwiperSlide><img className='md:w-3/5 md:h-auto mx-auto' src={image.src} alt=""/></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default ProductImages