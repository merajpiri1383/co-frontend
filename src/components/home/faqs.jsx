import QuestionIcon from "../../assets/icons/faqs/question.svg";
import ArrowUpIcon from "../../assets/icons/faqs/arrowUp.svg";
import ArrowDownIcon from "../../assets/icons/faqs/arrowDown.svg";
import { useState } from "react";



const Faq = ({ item }) => {

    const [open, setOpen] = useState(false);
    return (
        <div className="border border-gray-300 my-2 p-2 shadow rounded-xl transition">
            <div className={`grid grid-cols-5 items-center ${open && "border-b border-gray-300"}`}>
                <div className="col-span-1">
                    <img
                        src={open ? ArrowUpIcon : ArrowDownIcon}
                        className="size-5 cursor-pointer active:scale-110 transition"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="col-span-4 rtl text-sm">{item.question}</div>
            </div>
            {
                open && <div className="text-xs w-full col-span-4 pl-6 text-gray-700 rtl my-2">
                    {item.answer}</div>
            }
        </div>
    )
};


export default function Faqs() {

    const faqs = [
        {
            question: "چرا خرید اکانت اسپاتیفای فمیلی Spotify Family به صرفه تر است؟",
            answer: `در این روش اکانت مادر Spotify Owner خریداری و 5 عضو 
            Family Member در آن جوین خواهد شد. البته هیج اطلاعاتی مابین افراد
             به اشتراک گذاشته نمیگردد و هرشخصی اکانت شخصی خود را خواهد داشت.`
        }, {
            question: "چرا خرید اکانت اسپاتیفای فمیلی Spotify Family به صرفه تر است؟",
            answer: `در این روش اکانت مادر Spotify Owner خریداری و 5 عضو 
            Family Member در آن جوین خواهد شد. البته هیج اطلاعاتی مابین افراد
             به اشتراک گذاشته نمیگردد و هرشخصی اکانت شخصی خود را خواهد داشت.`
        }, {
            question: "چرا خرید اکانت اسپاتیفای فمیلی Spotify Family به صرفه تر است؟",
            answer: `در این روش اکانت مادر Spotify Owner خریداری و 5 عضو 
            Family Member در آن جوین خواهد شد. البته هیج اطلاعاتی مابین افراد
             به اشتراک گذاشته نمیگردد و هرشخصی اکانت شخصی خود را خواهد داشت.`
        }, {
            question: "چرا خرید اکانت اسپاتیفای فمیلی Spotify Family به صرفه تر است؟",
            answer: `در این روش اکانت مادر Spotify Owner خریداری و 5 عضو 
            Family Member در آن جوین خواهد شد. البته هیج اطلاعاتی مابین افراد
             به اشتراک گذاشته نمیگردد و هرشخصی اکانت شخصی خود را خواهد داشت.`
        }, {
            question: "چرا خرید اکانت اسپاتیفای فمیلی Spotify Family به صرفه تر است؟",
            answer: `در این روش اکانت مادر Spotify Owner خریداری و 5 عضو 
            Family Member در آن جوین خواهد شد. البته هیج اطلاعاتی مابین افراد
             به اشتراک گذاشته نمیگردد و هرشخصی اکانت شخصی خود را خواهد داشت.`
        },
    ]

    return (
        <div className="mx-4 my-10">
            <div className="flex items-center justify-center gap-4">
                <p className="text-2xl font-thin">سوالات پرتکرار</p>
                <img src={QuestionIcon} className="size-20" />
            </div>
            {
                faqs.map((item, index) => {
                    return (
                        <Faq item={item} key={index} />
                    )
                })
            }
        </div>
    )
};