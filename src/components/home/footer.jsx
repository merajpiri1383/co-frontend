import "../../assets/styles/footer.css";
import WifiIcon from "../../assets/icons/footer/wifi.svg";
import SmsIcon from "../../assets/icons/footer/sms.svg";
import RedAccountIcon from "../../assets/icons/footer/redAccount.svg";
import LinkedinIcon from "../../assets/icons/footer/linkedin.svg";
import InstaIcon from "../../assets/icons/footer/insta.svg";
import TelegramIcon from "../../assets/icons/footer/telegram.svg";
import CallIcon from "../../assets/icons/footer/call.svg";
import PostIcon from "../../assets/icons/footer/post.svg";
import InamaIcon from "../../assets/icons/footer/inama.svg";
import LineIcon from "../../assets/icons/main/line.svg";
import CopyrightIcon from "../../assets/icons/footer/copyright.svg";
import ManIcon from "../../assets/icons/footer/man.svg";


const SearchBox = () => {

    const clickHandler = () => {
        window.Goftino.open();
    }

    return (
        <div className="flex items-center justify-center bg-white z-50 rounded-xl" onClick={clickHandler}>
            <div className=" w-full flex items-center justify-center p-2">
                <button className="bg-slate-950 text-white p-1 px-4 rounded-lg mr-4">ثبت</button>
                <input
                    type="text"
                    placeholder="example@gmail.com"
                    className="w-full outline-none border-r text-gray-400 text-sm"
                />
                <img src={SmsIcon} className="h-full mx-2" />
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-search py-2 md:hidden">
                <div className="m-4 flex items-center jusitfy-center z-20 ">
                    <div className="w-full flex items-center justify-center">
                        <p className="text-white text-lg rtl">نیاز به راهنمایی و مشاوره داری؟</p>
                        <img src={WifiIcon} className="size-8" />
                    </div>
                </div>

                <div className="m-4 my-6">
                    <SearchBox />
                </div>


                <div className="m-2 my-6 items-center justify-center ">
                    <div className="grid grid-cols-5 text-xs gap-2 items-center">
                        <div className="col-span-4 rtl" style={{ color: "#A5A0A0" }}>

                            <p>
                                <span className="font-bold"
                                    style={{ color: "#FF4F4F" }}>درباره Red Account </span>
                                <span>اکانت های پریمیوم شبکه </span>
                            </p>
                            <p>های اجتماعی را کاملا قانونی و با ضمانت خرید کنید. </p>
                            <p>در کمترین زمان ممکن با بهترین پشتیبانی و خدمات</p>
                            <p>پس از فروش.</p>
                        </div>
                        <div className="col-span-1">
                            <img src={RedAccountIcon} className="w-auto h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-search hidden md:flex items-center justify-center">
                <div className="grid grid-cols-10 w-96 mt-48 mb-12">
                    <div className="col-span-1 flex items-center justify-center">
                        <img src={ManIcon} />
                    </div>
                    <div className="col-span-8">
                        <p className="text-white text-2xl rtl my-2">نیاز به راهنمایی و مشاوره داری؟</p>
                        <SearchBox />
                    </div>
                    <div className="col-span-1">
                        <img src={WifiIcon} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 items-center md:hidden">
                <div className="col-span-1 p-4">
                    <img src={LinkedinIcon} className="size-10" />
                    <img src={InstaIcon} className="size-10" />
                    <a href="https://t.me/redaccountt">
                        <img src={TelegramIcon} className="size-10 cursor-pointer" />
                    </a>

                </div>
                <div className="col-span-1 p-2">
                    <p className="text-white text-sm text-right">محبوب‌ترین ها</p>
                    <div className="grid grid-cols-1 border-t-2 border-white gap-2 py-2 my-2">
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                    </div>
                </div>
                <div className="col-span-1 p-2">
                    <p className="text-white text-sm text-right">دسترسی سریع</p>
                    <div className="grid grid-cols-1 border-t-2 border-white gap-2 py-2 my-2">
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        <p className="text-xs text-white col-span-1 text-right">لینک</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between mx-4 md:hidden">
                <img src={InamaIcon} className="size-16" />
                <div className="text-white text-xs">
                    <div className="flex items-center jusitfy-center rtl gap-2 my-2">
                        <img src={CallIcon} className="size-5" />
                        <p>شماره تماس ۳۲۵۴۴۵۶۷-۰۱۷ </p>
                    </div>
                    <div className="flex items-center jusitfy-center rtl gap-2 my-2">
                        <img src={PostIcon} className="size-5" />
                        <div>
                            <p>آدرس استان گلستان، شهرستان گرگان</p>
                            <p>میدان باهنر، هلدینگ متزون</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:grid grid-cols-2">
                <div className="col-span-1 grid grid-cols-3 items-center justify-center">
                    <div className="col-span-1">
                        <div className="flex items-start justify-center">
                            <img src={InamaIcon} className="size-24" />
                        </div>
                        <div className="flex items-center justify-center gap-2 mt-5">
                            <img src={LinkedinIcon} className="size-8" />
                            <img src={InstaIcon} className="size-8" />
                            <a href="https://t.me/redaccountt">
                                <img src={TelegramIcon} className="size-8 cursor-pointer" />
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1 p-2 rtl">
                        <p className="text-white text-sm text-right">دسترسی سریع</p>
                        <div className="grid grid-cols-1 border-t-2 w-fit border-white px-4 gap-2 py-2 my-2">
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        </div>
                    </div>
                    <div className="col-span-1 p-2 rtl">
                        <p className="text-white text-sm text-right">دسترسی سریع</p>
                        <div className="grid grid-cols-1 border-t-2 border-white gap-2 px-4 w-fit py-2 my-2">
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                            <p className="text-xs text-white col-span-1 text-right">لینک</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="m-2 my-6 items-center justify-center ">
                        <div className="grid grid-cols-5 text-xs gap-2 items-center">
                            <div className="col-span-4 rtl" style={{ color: "#A5A0A0" }}>
                                <p>
                                    <span className="font-bold"
                                        style={{ color: "#FF4F4F" }}>درباره Red Account </span>
                                    <span>اکانت های پریمیوم شبکه </span>
                                </p>
                                <p>های اجتماعی را کاملا قانونی و با ضمانت خرید کنید. </p>
                                <p>در کمترین زمان ممکن با بهترین پشتیبانی و خدمات</p>
                                <p>پس از فروش.</p>
                            </div>
                            <div className="col-span-1">
                                <img src={RedAccountIcon} className="w-auto h-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="text-white text-xs px-12">
                        <div className="flex items-center jusitfy-center rtl gap-2 my-2">
                            <img src={CallIcon} className="size-5" />
                            <p>شماره تماس ۳۲۵۴۴۵۶۷-۰۱۷ </p>
                        </div>
                        <div className="flex items-center jusitfy-center rtl gap-2 my-2">
                            <img src={PostIcon} className="size-5" />
                            <div>
                                <p>آدرس استان گلستان، شهرستان گرگان</p>
                                <p>میدان باهنر، هلدینگ متزون</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={LineIcon} className="w-full py-4" />

            <div className="flex items-center justify-between text-xs text-gray-300 mx-4">
                <div className="my-4">
                    <p className="font-bold">Designed by Rasin</p>
                </div>
                <div className="gap-2 my-4 flex items-center justify-between">
                    <img src={CopyrightIcon} className="size-4" />
                    <div className="rtl">
                        <p>تمامی حقوق این وبسایت متعلق</p>
                        <p>به شرکت متزون می باشد.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};