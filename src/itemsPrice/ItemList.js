
export default function ItemLists({ list }) {
    return (
        <tr>
            <td>{list.id}</td>
            <td>{list.name}</td>
            <td>{list.lowest}원</td>
            <td>{list.highest}원</td>
            <td>{list.medium}원</td>
            <td></td>
        </tr>
    )
}