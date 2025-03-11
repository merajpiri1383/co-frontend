

export default function Plan ({ item }) {
    return (
        <div className="w-full plan rounded-xl mb-9">
            <div className="flex items-center justify-between">
                <p className="p-2 plan-color text-white rounded-ss-xl rounded-ee-xl">گیفت</p>
                <p className="line-through text-sm text-gray-400">20000</p>
                <p className="p-2 plan-color text-white rounded-es-xl rounded-se-xl">{item} ماهه</p>
            </div>
            <div className="flex items-center justify-center p-4">
                <p className="text-xl font-bold rtl text-gray-800">9000 تومان</p>
            </div>

            <div className="plan-color text-center rounded-es-xl rounded-ee-xl text-white p-1
            cursor-pointer">خرید مستقیم</div>
        </div>
    )
};