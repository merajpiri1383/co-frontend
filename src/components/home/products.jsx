import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import BoxIcon from "../../assets/icons/products/box.svg";
import 'swiper/css';
import 'swiper/css/pagination';
import SpotifyIcon from "../../assets/icons/products/spotify.svg";
import DetailIcon from "../../assets/icons/products/detail.svg";

const Product = ({ item }) => {
    return (
        <div className='mb-10 mt-4 rounded-lg border border-gray-200 p-4'>
            <img src={SpotifyIcon} className='w-full mx-auto object-fit' />
            <p className='text-gray-400 text-center text-xl my-4'>موسیقی</p>
            <p className='text-gray-600 text-center text-xl my-2'>اسپاتیفای پرمیوم</p>
            <p className='text-gray-600 text-center text-xl my-2'>از ۱۹۸.۰۰۰ تومان</p>

            <div className='flex items-center justify-center rounded-lg p-1'
                style={{ backgroundColor: "#421515" }}>
                <p className='text-white'>جزییات</p>
                <img src={DetailIcon} className='size-4' />
            </div>
        </div>
    )
};


export default function Products() {

    const products = [1, 2, 3, 4, 5];
    return (
        <>
            <div className='m-4 my-8 md:hidden'>
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

            <div className='m-12 hidden md:grid grid-cols-6'>
                <div className='col-span-6 rtl'>
                    <p className='text-right text-2xl '>محصولات مرتبط</p>
                </div>
                <div className='col-span-2 grid grid-cols-1 items-center'>
                    <div className='col-span-1 mt-20'>
                        <img src={BoxIcon} className='size-60 mx-auto' />
                    </div>
                    <div className='col-span-1 text-center text-2xl'>
                        <span>از ا</span>
                        <span style={{color : "#00D856"}}>سپاتیفای</span>
                    </div>
                    <div className='col-span-1 text-center text-2xl mb-24'>
                        <span>تا</span>
                        <span style={{color : "#AD0000"}}>دولینگو</span>
                    </div>
                </div>
                <div className='col-span-4'>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
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
            </div>
        </>
    )
};