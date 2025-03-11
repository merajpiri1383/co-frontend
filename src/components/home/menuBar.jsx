import { useEffect, useState } from "react";
import MenuBarIcon from "../../assets/icons/MenuBar.svg";
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
                    className="bg-gray-200 fixed right-0 top-0 rounded-bl-lg bottom-20">
                    hello
                </Slide>
            }
        </div>
    )
};