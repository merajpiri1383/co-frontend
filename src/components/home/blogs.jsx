import BlankImage from "../../assets/icons/blog/blank.svg";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Blog1Image from "../../assets/icons/blog/blog_1.svg";
import Blog2Image from "../../assets/icons/blog/blog_2.svg";
import Blog3Image from "../../assets/icons/blog/blog_3.svg";
import leftArrowIcon from "../../assets/icons/main/leftArrow.svg";
import rightArrowIcon from "../../assets/icons/main/rightArrow.svg";
import KeyboardOpen from "../../assets/icons/blog/keyboard_open.svg";



const Blog = ({ item }) => {
    return (
        <div className='mb-10 mt-4'>
            <img src={item.image} className='w-full mx-auto object-fit' />
            <p className='text-gray-900 text-right text-sm md:text-lg my-4'>
                {item.title}
            </p>
            <p className="text-xs rtl m-1 text-gray-500 md:text-sm">
                {item.text}
            </p>
        </div>
    )
};


export default function Blogs() {

    const swiper = useSwiper();

    const blogs = [
        {
            image: Blog1Image,
            title: "بهترین اپ های موسیقی",
            text: `سرویس پخش موسیقی امروزه راحت­ترین راه برای گوش دادن به 
            آهنگ­های مورد علاقه خود است. بعضی از افراد نگران کیفیت موسیقی­ به صورت استریم
            و آنلاین هستند اما شاید تعجب کنید که کیفیت صدای استریم آهنگ­ها در حد یک CD و یا حتی بهتر است.`,
        }, {
            image: Blog2Image,
            title: "قوی ترین هوش مصنوعی",
            text: `سرویس پخش موسیقی امروزه
            راحت­ترین راه برای گوش دادن به آهنگ­های مورد علاقه خود است. بعضی از افراد نگران کیفیت موسیقی­
            به صورت استریم و آنلاین هستند اما شاید تعجب کنید که کیفیت صدای استریم آهنگ­ها در حد یک 
            CD و یا حتی بهتر است.`
        }, {
            image: Blog3Image,
            title: "بهترین سایت های طراحی",
            text: `سرویس پخش موسیقی امروزه راحت­ترین راه 
            برای گوش دادن به آهنگ­های مورد علاقه خود است. بعضی از افراد نگران کیفیت موسیقی­ به
            صورت استریم و آنلاین هستند اما شاید تعجب کنید که کیفیت صدای استریم آهنگ­ها در حد یک CD و یا حتی بهتر است.`
        }
    ]
    return (
        <>
            <div className='m-4 my-8 md:hidden'>
                <p className="text-xl text-right">آخرین مطالب وبلاگ</p>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={10}
                    slidesPerView={1.4}
                    navigation
                    dir="rtl"
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

            <div className="m-6 hidden md:block">
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1 flex items-center justify-center gap-2">
                        <p style={{ color: "#AE1B1B" }}>بریم بلاگ</p>
                        <img src={KeyboardOpen} className="size-6" />
                    </div>
                    <div className="col-span-1 text-center">
                        <p className="text-2xl">آخرین مطالب وبلاگ</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 my-4">
                    <div className="col-span-1 flex items-center justify-center">
                        <img
                            src={leftArrowIcon}
                            className="size-8 "
                            onClick={() => swiper.slidePrev()}
                        />
                    </div>
                    <div className="col-span-10">
                        <Swiper
                            modules={[Navigation, Pagination, A11y]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            dir="rtl"
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
                    <div className="col-span-1 flex items-center justify-center">
                        <img
                            src={rightArrowIcon}
                            className="size-8 active:scale-110 transition cursor-pointer"
                            onClick={() => swiper.slideNext()}
                        />
                    </div>
                </div>
            </div>
        </>
    )
};