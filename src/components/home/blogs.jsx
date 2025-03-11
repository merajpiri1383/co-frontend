import BlankImage from "../../assets/icons/blog/blank.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Blog = ({ item }) => {
    return (
        <div className='mb-10 mt-4'>
            <img src={BlankImage} className='w-full mx-auto object-fit' />
            <p className='text-gray-900 text-right text-sm my-4'>بهترین اپ های موسیقی</p>
            <p className="text-xs rtl m-1 text-gray-500">سرویس پخش موسیقی امروزه راحت­ترین
                راه برای گوش دادن به آهنگ­های مورد
                علاقه خود است. بعضی از افراد نگران کیفیت موسیقی­ به صورت استریم و آنلاین هستند</p>
        </div>
    )
};


export default function Blogs() {

    const blogs = [1, 2, 3, 4, 5];
    return (
        <div className='m-4 my-8'>
            <p className="text-xl text-right">آخرین مطالب وبلاگ</p>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10}
                slidesPerView={1.4}
                navigation
                pagination={{ clickable: true }}
            >
                {
                    blogs.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Blog item={item} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
};