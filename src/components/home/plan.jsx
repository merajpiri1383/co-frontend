import StarIcon from "../../assets/icons/header/star.svg";
import DiscountIcon from "../../assets/icons/header/discount.svg";
import TruckIcon from "../../assets/icons/main/truck.svg";
import StoreIcon from "../../assets/icons/main/store.svg";

export default function Plan({ item }) {

    const clickHandler = () => {
        window.location.href = "https://redaccount.ir/payment/payment/?source=redaccount&service_id=" + item.id
    };

    return (
        <>
            <div className="w-full plan rounded-xl mb-9 md:hidden">
                <div className="flex items-center justify-between">
                    <p className="p-2 plan-color text-white rounded-ss-xl rounded-ee-xl">گیفت</p>
                    <p className="line-through text-sm text-gray-400">{item.original_price}</p>
                    <p className="p-2 plan-color text-white rounded-es-xl rounded-se-xl">
                        {item.title_fa}
                    </p>
                </div>
                <div className="flex items-center justify-center p-4">
                    <p className="text-xl font-bold rtl text-gray-800">9000 تومان</p>
                </div>

                <div className="plan-color text-center rounded-es-xl rounded-ee-xl text-white p-1
            cursor-pointer" onClick={() => clickHandler()}>خرید مستقیم</div>
            </div>

            <div className="hidden md:block w-full mb-9">
                <div className="rounded-2xl border border-gray-300">
                    <div className="grid grid-cols-3 plan-desktop-color rounded-t-2xl ">
                        <div className="col-span-1 flex justify-start">
                            <p className="p-2 w-fit h-fit plan-color text-white rounded-ss-2xl rounded-ee-2xl">
                                {item.title_fa}
                            </p>
                        </div>
                        <div className="col-span-1">
                            <img src={StarIcon} className="size-32 mt-6 mb-3" />
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <p className="p-2 w-fit h-fit plan-color text-white rounded-es-2xl rounded-se-2xl
                        ">به صورت گیفت</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center px-12 gap-3">
                        <img src={DiscountIcon} className="size-16" />
                        <p className="line-through text-lg text-gray-400">{item.original_price}</p>
                    </div>
                    <div className="flex items-center justify-center px-12 gap-3">
                        <p className="rtl text-2xl font-semibold">{item.cost} تومان</p>
                    </div>
                    <div className="flex items-center justify-center my-3 gap-4">
                        <p className="text-lg" style={{ color: "#CB504E" }}>قابل تحویل در ۳۰ دقیقه</p>
                        <img src={TruckIcon} className="size-8" />
                    </div>
                    <div className="col-span-4 rtl px-10 pb-9">
                        <p className="text-sm text-gray-800">🔹 بدون نیاز به تغییر شماره.</p>
                        <p className="text-sm text-gray-800">🔹 فعالسازی روی اکانت شخصی شما</p>
                        <p className="text-sm text-gray-800">🔹 قابل تمدید، قانونی، کاملا امن و تضمین شده</p>
                        <p className="text-sm text-gray-800">🔹 بعد از سفارش اشتراک برای شما گیفت خواهد شد</p>
                    </div>
                </div>
                <div className="plan-color flex items-center justify-center gap-2 p-2 my-2 rounded-b-xl
                cursor-pointer" onClick={() => clickHandler()}>
                    <p className="text-white">بریم خرید</p>
                    <img src={StoreIcon} />
                </div>
            </div>
        </>
    )
};