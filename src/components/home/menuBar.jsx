import { useEffect, useState } from "react";
import MenuBarIcon from "../../assets/icons/header/MenuBar.svg";
import StoreIcon from "../../assets/icons/header/store.svg";
import ProductsIcon from "../../assets/icons/header/products.svg";
import BookIcon from "../../assets/icons/header/book.svg";
import CallIcon from "../../assets/icons/header/call.svg";
import { Slide } from "react-awesome-reveal";

export default function MenuBar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window && window.addEventListener("click", () => {
            setShow(false);
        })
    }, []);

    const clickHandler = (e) => {
        e.stopPropagation();
        setShow(!show);
    }

    return (
        <div className="">
            <img
                src={MenuBarIcon}
                onClick={(e) => clickHandler(e)}
                className="size-8 active:scale-110 cursor-pointer transition"
            />

            {
                show && <Slide 
                    direction="right"
                    duration={200}
                    className="bg-rose-950 z-50 fixed right-0 top-20
                    rounded-ss-lg rounded-bl-lg bottom-auto">
                    <div className="grid grid-cols-1 gap-4 px-4 my-8">
                        <div className="col-span-1 flex items-center cursor-pointer justify-end px-4 gap-4
                            hover:bg-gray-200 text-white rounded-lg hover:text-rose-950 transition">
                            <p className="text-xl">فروشگاه</p>
                            <img src={StoreIcon} className="size-8" />
                        </div>
                        <div className="col-span-1 flex items-center cursor-pointer justify-end px-4 gap-4
                            hover:bg-gray-200 text-white rounded-lg hover:text-rose-950 transition">
                            <p className="text-xl">محصولات</p>
                            <img src={ProductsIcon} className="size-8" />
                        </div>
                        <div className="col-span-1 flex items-center cursor-pointer justify-end px-4 gap-4
                            hover:bg-gray-200 text-white rounded-lg hover:text-rose-950 transition">
                            <p className="text-xl">پشتیبانی</p>
                            <img src={CallIcon} className="size-8" />
                        </div>
                        <div className="col-span-1 flex items-center cursor-pointer justify-end px-4 gap-4
                            hover:bg-gray-200 text-white rounded-lg hover:text-rose-950 transition">
                            <p className="text-xl">بلاگ</p>
                            <img src={BookIcon} className="size-8" />
                        </div>
                    </div>
                </Slide>
            }
        </div>
    )
};