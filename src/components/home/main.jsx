import "../../assets/styles/main.css";
import SevenIcon from "../../assets/icons/main/seven.svg";
import CloudIcon from "../../assets/icons/main/cloud.svg";
import leftArrowIcon from "../../assets/icons/main/leftArrow.svg";
import rightArrowIcon from "../../assets/icons/main/rightArrow.svg";
import TruckIcon from "../../assets/icons/main/truck.svg";
import LineIcon from "../../assets/icons/main/line.svg";
import DuckIcon from "../../assets/icons/main/duck.svg";
import ErrorIcon from "../../assets/icons/main/error.svg";
import WonderIcon from "../../assets/icons/main/wonder.svg";
import Image_1 from "../../assets/icons/main/img_1.svg";
import Image_2 from "../../assets/icons/main/img_2.svg";
import Image_3 from "../../assets/icons/main/img_3.svg";
import Image_4 from "../../assets/icons/main/img_4.svg";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import axios from "axios";

import 'swiper/css';
import 'swiper/css/pagination';
import Plan from "./plan";

export default function Main() {

    const [currentFilter, setFilter] = useState("all");
    const swiperRef = useRef();
    const [plans, setPlans] = useState([]);
    const [result, setResult] = useState([]);

    useEffect(() => {
        currentFilter === "all" ?
            setPlans(result) :
            setPlans(result.filter((item) => item.duration === currentFilter))
    }, [result, currentFilter])

    useEffect(() => {
        (async () => {
            const result = await axios.get("https://api.redaccount.ir/services.php").then(
                (response) => setResult(response.data),
            )
        })();
    }, []);

    const filters = [
        {
            value: "all",
            text: "همه",
        },
        {
            value: "30",
            text: "سه ماهه ",
        },
        {
            value: "180",
            text: "شش ماهه ",
        },
        {
            value: "365",
            text: "یک ساله ",
        },
    ]

    return (
        <div>
            <div className="relative flex items-center justify-center md:hidden">
                <div className="flex items-center justify-center relative py-12 w-full my-6 mx-3">
                    <img src={CloudIcon} className="absolute" />
                    <p style={{ color: "#CB504E" }} className="text-lg">روز ضمانت باز گشت وجه</p>
                    <img src={SevenIcon} className="size-10" />
                </div>
            </div>

            <div className="m-3 md:my-6 flex items-center justify-center">
                <div className="w-full flex items-center justify-center">
                    <div className="grid filters grid-cols-4 p-2 gap-4 items-center justify-center">
                        {
                            filters.reverse().map((filter, index) => {
                                return (
                                    <div className="col-span-1 cursor-pointer flex items-center justify-center
                                    active:scale-110 transition"
                                        key={index}
                                        onClick={() => setFilter(filter.value)}>
                                        <div key={index} className={`w-fit p-1 py-2 text-xs text-center
                                        rounded-lg ${currentFilter === filter.value && "active-filter"}
                                        md:text-lg`}>
                                            <p>{filter.text}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="flex items-center jusitfy-between gap-4 w-full md:hidden">
                <img
                    src={leftArrowIcon}
                    className="h-6 ml-2 cursor-pointer"
                    onClick={() => swiperRef.current?.slidePrev()}
                />
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => { swiperRef.current = swiper }}
                >
                    {
                        plans.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Plan item={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <img
                    src={rightArrowIcon}
                    className="h-6 mr-2 cursor-pointer"
                    onClick={() => swiperRef.current?.slideNext()}
                />
            </div>

            <div className="md:block px-6 w-full hidden">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {
                        plans.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Plan item={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

            <div className="flex items-center justify-center my-6 gap-4 md:hidden">
                <p className="text-xl" style={{ color: "#CB504E" }}>قابل تحویل در ۳۰ دقیقه</p>
                <img src={TruckIcon} className="size-10" />
            </div>

            <img src={LineIcon} className="w-full my-4 md:hidden" />

            <div className="hidden md:grid grid-cols-5 gap-6 my-12 px-12">
                <div className="col-span-4 rtl">
                    <p className="text-xl my-2 rtl" style={{ color: "#7A0101" }}>
                        نکاتی که باید در هنگام خرید توجه کنید...!
                    </p>
                    <p className="text-lg text-gray-400">مطالعه و رعایت نکات ذکر شده در این بخش قبل از ثبت
                        سفارش الزامی می‌باشد و در صورت رعایت نکردن موارد ذکر شده، </p>
                    <p className="text-lg text-gray-400">ضمانت باطل می‌گردد.</p>
                    <p className="text-lg text-gray-400">امنیت: هنگام خرید اکانت از یک سایت، به اعتبار و
                        امنیت آن سایت اطمینان حاصل کنید.</p>
                    <p className="text-lg text-gray-400">گارانتی: از سایتی خرید کنید که گارانتی تعویض اکانت
                         در صورت بروز مشکل را ارائه دهد.</p>
                    <p className="text-lg text-gray-400">قوانین دولینگو: از قوانین دولینگو در مورد اشتراک‌گذاری 
                        اکانت آگاه باشید.</p>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                    <img src={WonderIcon} className="size-36" />
                </div>
            </div>

            <div className="my-4 grid grid-cols-5 items-center md:hidden">
                <div className="col-span-1 flex items-center justify-end">
                    <img src={DuckIcon} className="size-12" />
                </div>
                <div className="col-span-4 rtl">
                    <p className="text-xs text-gray-800">🔹 بدون نیاز به تغییر شماره.</p>
                    <p className="text-xs text-gray-800">🔹 فعالسازی روی اکانت شخصی شما</p>
                    <p className="text-xs text-gray-800">🔹 قابل تمدید، قانونی، کاملا امن و تضمین شده</p>
                    <p className="text-xs text-gray-800">🔹 بعد از سفارش اشتراک برای شما گیفت خواهد شد</p>
                </div>
            </div>

            <div style={{ backgroundColor: "#FFF2F2" }}
                className="flex items-center justify-center rounded-xl m-4 md:hidden">
                <div className="flex items-center justify-center my-4 gap-2">
                    <div className="rtl">
                        <p className="text-xs" style={{ color: "#8F0606" }}>لطفا پیش از ثبت سفارش، بخش</p>
                        <p className="text-xs" style={{ color: "#8F0606" }}>
                            نکات قبل از خرید را مطالعه فرمایید.</p>
                    </div>
                    <img src={ErrorIcon} className="size-6" />
                </div>
            </div>

            <div className="m-4 flex items-center justify-center md:hidden">
                <div className="flex items-center justify-between gap-2">
                    <img src={WonderIcon} className="size-10" />
                    <p className="text-sm rtl" style={{ color: "#7A0101" }}>
                        نکاتی که باید در هنگام خرید توجه کنید...!
                    </p>
                </div>
            </div>

            <div className="my-4 flex items-center justify-center md:hidden">
                <ul className="rtl">
                    <p className="text-xs my-1" style={{ color: "#696969" }}>
                        امنیت: هنگام خرید اکانت از یک سایت، به اعتبار و
                    </p>

                    <p className="text-xs my-1" style={{ color: "#696969" }}>
                        امنیت آن سایت اطمینان حاصل کنید.
                    </p>
                    <p className="text-xs my-1" style={{ color: "#696969" }}>
                        گارانتی: از سایتی خرید کنید که گارانتی تعویض
                    </p>
                    <p className="text-xs my-1" style={{ color: "#696969" }}>
                        اکانت در صورت بروز مشکل را ارائه دهد.
                    </p>
                    <p className="text-xs my-1" style={{ color: "#696969" }}>
                        قوانین دولینگو: از قوانین دولینگو در مورد
                    </p>
                    <p className="text-xs my-1" style={{ color: "#696969" }}>
                        اشتراک‌گذاری اکانت آگاه باشید.
                    </p>
                </ul>
            </div>

            <div className="my-4 hidden md:block"></div>

            <div className="m-4 flex items-center justify-center md:px-20">
                <div className="grid w-full grid-cols-2 md:grid-cols-4 md:gap-12 items-center gap-4">
                    <div className="col-span-1">
                        <div className="md:my-4">
                            <img src={Image_1} className="size-16 md:size-24 mx-auto" />
                        </div>
                        <p className="text-center text-xs md:text-lg" style={{ color: "#4B2626" }}>
                            پشتیبانی کامل
                        </p>
                    </div>
                    <div className="col-span-1">
                        <div className="md:my-4">
                            <img src={Image_2} className="size-16 md:size-24 mx-auto" />
                        </div>
                        <p className="text-center text-xs md:text-lg" style={{ color: "#4B2626" }}>
                            قیمت رقابتی
                        </p>
                    </div>
                    <div className="col-span-1">
                        <div className="md:my-4">
                            <img src={Image_3} className="size-16 md:size-24 mx-auto" />
                        </div>
                        <p className="text-center text-xs md:text-lg" style={{ color: "#4B2626" }}>
                            ثبت سفارش سریع
                        </p>
                    </div>
                    <div className="col-span-1">
                        <div className="md:my-4">
                            <img src={Image_4} className="size-16 md:size-24 mx-auto" />
                        </div>
                        <p className="text-center text-xs md:text-lg" style={{ color: "#4B2626" }}>
                            ضمانت بازگشت وجه
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};
