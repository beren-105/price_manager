export default function LocalList({ listData }) {
    
    return (
        <li className="flex gap-4 justify-center">
            <p>{listData.M_NAME}</p>
            <p>{listData.A_PRICE}원</p>
            <p>{listData.M_TYPE_NAME}</p>
        </li>
    )
}