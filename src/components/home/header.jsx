import "../../assets/styles/header.css";
import RegisterIcon from "../../assets/icons/header/register.svg";
import RedAccountIcon from "../../assets/icons/header/redAccount.svg";
import DiscountIcon from "../../assets/icons/header/discount.svg";
import Vector_1 from "../../assets/icons/header/vector_1.svg";
import Vector_2 from "../../assets/icons/header/vector_2.svg";
import Vector_3 from "../../assets/icons/header/vector_3.svg";
import Vector_4 from "../../assets/icons/header/vector_4.svg";
import Vector_5 from "../../assets/icons/header/vector_5.svg";
import Vector_6 from "../../assets/icons/header/vector_6.svg";
import TelegramIcon from "../../assets/icons/header/telegram.svg";
import Telegram2Icon from "../../assets/icons/header/telegram_2.svg";
import PhoneImage from "../../assets/icons/header/phone.svg";
import MedalIcon from "../../assets/icons/header/medal.svg";
import MoneyIcon from "../../assets/icons/header/money.svg";
import PawelIcon from "../../assets/icons/header/pawel.svg";
import MenuBar from "./menuBar";
import Countdown from 'react-countdown';
import RegisterRedAccountIcon from "../../assets/icons/header/registerRedAccount.svg";

export default function () {

    const renderer = ({ hours, minutes, seconds, completed }) => {
        return <span>{hours}:{minutes}:{seconds}</span>;
    };

    return (
        <>
            <div className="header md:hidden">
                <div className="grid grid-cols-2 p-3 items-center">
                    <div className="col-span-1 flex items-center justify-between gap-4">
                        <img src={RegisterIcon} className="h-10" />
                        <img src={RedAccountIcon} className="size-10" />
                    </div>
                    <div className="col-span-1 flex items-center justify-end">
                        <MenuBar />
                    </div>
                </div>

                <div className="grid grid-cols-2 px-3 items-center">
                    <div className="col-span-1"></div>
                    <div className="col-span-1">
                        <img src={DiscountIcon} className="h-16" />
                    </div>
                </div>

                <div className="flex items-center justify-start py-3">
                    <img src={Vector_1} className="w-20" />
                    <p className="font-black text-2xl discount-text">تخفیف های آخر سال!</p>
                </div>

                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-3 flex items-center justify-start py-3">
                        <img src={Vector_2} className="w-14" />
                        <p className="font-black text-2xl telegram-preimum-text">تلگرام پرمیوم</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-2xl font-black text-white mx-2 text-center border-b border-white
                    border-b-2">
                            <Countdown
                                renderer={renderer}
                                date={Date.now() + 10000000000} />
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-5">
                    <div className="col-span-3 flex justify-end">
                        <img src={TelegramIcon} className="size-14 mx-2" />
                    </div>
                    <div className="col-span-2 flex items-center justify-end">
                        <img src={Vector_3} className="w-12 self-start" />
                    </div>
                </div>

                <div className="grid grid-cols-2 items-center">
                    <div className="col-span-1 pl-3">
                        <div className="flex items-center justify-start">
                            <p className="text-yellow-header_medal font-black text-sm">پشتیبانی ۲۴ ساعته</p>
                            <img src={MedalIcon} className="size-8" />
                        </div>
                        <div className="grid grid-cols-3 items-center">
                            <div className="col-span-2" style={{ color: "#ADDC3F" }}>
                                <p className="text-xs text-center">ضمانت بازگشت</p>
                                <p className="text-xs text-center">وجه تا هفت روز!</p>
                            </div>
                            <div className="col-span-1">
                                <img src={MoneyIcon} className="h-16" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img src={PhoneImage} className="self-start" />
                    </div>
                </div>
            </div>

            <div className="hidden md:block header">
                <div className="grid-cols-9 grid p-6">
                    <div className="col-span-3 flex items-center justify-center">
                        <img src={RegisterRedAccountIcon} className="w-48 cursor-pointer" />
                    </div>
                    <div className="col-span-4 grid-cols-4 grid">
                        <div className="col-span-1 flex items-center justify-center px-4 gap-2 text-white">
                            <p className="text-lg">فروشگاه</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center px-4 gap-4 text-white">
                            <p className="text-lg">محصولات</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center px-4 gap-4 text-white">
                            <p className="text-lg">پشتیبانی</p>
                        </div>
                        <div className="col-span-1 flex items-center justify-center px-4 gap-4 text-white">
                            <p className="text-lg">بلاگ</p>
                        </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                        <img src={RedAccountIcon} className="size-20 cursor-pointer object-fit" />
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1 grid grid-cols-6 items-center">
                        <div className="col-span-1">
                            <img src={Vector_6} className="w-full" />
                        </div>
                        <div className="col-span-3">
                            <p className="font-black text-white mx-2 text-center border-b border-white
                            border-b-2" style={{ fontSize: "3rem" }}>
                                <Countdown
                                    renderer={renderer}
                                    date={Date.now() + 10000000000} />
                            </p>
                        </div>
                        <div className="col-span-2 flex-row justify-between">
                            <img src={DiscountIcon} />
                            <img src={Vector_5} />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <p className="font-black discount-text rtl" style={{ fontSize: "3rem" }}>
                            تخفیف های آخر سال!</p>
                    </div>
                    <div className="col-span-1">
                        <img src={Vector_4} className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-3 px-6">
                    <div className="col-span-1 self-end">
                        <img src={PawelIcon} className="h-80" />
                    </div>
                    <div className="col-span-1">
                        <div className="flex items-center justify-end gap-4">
                            <img src={Telegram2Icon} className="size-20" />
                            <p className="font-black telegram-preimum-text"
                                style={{ fontSize: "3rem" }}>تلگرام پرمیوم</p>
                        </div>
                        <div className="flex items-center justify-end gap-2">
                            <p className="text-white font-black text-2xl">پشتیبانی ۲۴ ساعته</p>
                            <img src={MedalIcon} className="size-14" />
                        </div>
                        <div className="flex items-center justify-end gap-2 my-2">
                            <p className="rtl text-white text-2xl">ضمانت بازگشت وجه تا هفت روز!</p>
                            <img src={MoneyIcon} className="h-16" />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <img src={PhoneImage} className="h-96" />
                    </div>
                </div>
            </div>
        </>
    )
};