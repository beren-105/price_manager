
export default function ItemLists({ list }) {
    return (
        <tr>
            <td className="py-2 border-x">{list.id}</td>
            <td className="py-2 border-x">{list.name}</td>
            <td className="py-2 border-x">{list.lowest}원</td>
            <td className="py-2 border-x">{list.highest}원</td>
            <td className="py-2 border-x">{list.medium}원</td>
            <td className="py-2 border-x"></td>
        </tr>
    )
}
