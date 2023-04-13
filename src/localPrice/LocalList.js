export default function LocalList({ listData }) {
    
    return (
        <li className="flex justify-conter odd:bg-slate-50">
            <p className="basis-2/4 pb-2 border-r">{listData.M_NAME}</p>
            <p className="basis-1/4 pb-2 border-r">{listData.A_PRICE}원</p>
            <p className="basis-1/4 pb-2 text-gray-400">{listData.M_TYPE_NAME}</p>
        </li>
    )
}