import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SpotifyIcon from "../../assets/icons/products/spotify.svg";
import DetailIcon from "../../assets/icons/products/detail.svg";

const Product = ({item}) => {
    return (
        <div className='mb-10 mt-4 rounded-lg border border-gray-200 p-4'>
            <img src={SpotifyIcon} className='w-full mx-auto object-fit' />
            <p className='text-gray-400 text-center text-xl my-4'>موسیقی</p>
            <p className='text-gray-600 text-center text-xl my-2'>اسپاتیفای پرمیوم</p>
            <p className='text-gray-600 text-center text-xl my-2'>از ۱۹۸.۰۰۰ تومان</p>

            <div className='flex items-center justify-center rounded-lg p-1' 
                style={{backgroundColor : "#421515"}}>
                <p className='text-white'>جزییات</p>
                <img src={DetailIcon} className='size-4' />
            </div>
        </div>
    )
};


export default function Products() {

    const products = [1,2,3,4,5];
    return (
        <div className='m-4 my-8'>
            <p className='text-right text-lg'>محصولات مرتبط</p>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1.4}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    products.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Product item={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
};