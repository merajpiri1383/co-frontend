import "../../assets/styles/header.css";
import RegisterIcon from "../../assets/icons/header/register.svg";
import RedAccountIcon from "../../assets/icons/header/redAccount.svg";
import DiscountIcon from "../../assets/icons/header/discount.svg";
import Vector_1 from "../../assets/icons/header/vector_1.svg";
import Vector_2 from "../../assets/icons/header/vector_2.svg";
import Vector_3 from "../../assets/icons/header/vector_3.svg";
import TelegramIcon from "../../assets/icons/header/telegram.svg";
import PhoneImage from "../../assets/icons/header/phone.svg";
import MedalIcon from "../../assets/icons/header/medal.svg";
import MoneyIcon from "../../assets/icons/header/money.svg";
import MenuBar from "./menuBar";
import Countdown from 'react-countdown';

export default function () {

    const renderer = ({ hours, minutes, seconds, completed}) => {
        return <span>{hours}:{minutes}:{seconds}</span>;
    };

    return (
        <div className="header">
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
                        <div className="col-span-2" style={{color : "#ADDC3F"}}>
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
    )
};