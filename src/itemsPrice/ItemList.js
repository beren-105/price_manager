import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemLists({ currentList, setSelestItemName, setIsModalShow }) {
    function handleModal() {
        setIsModalShow(true);
        setSelestItemName(currentList.nameNumber);
    }
    return (
        <tr className="odd:bg-slate-50">
            <td className="py-2 border-t">{currentList.id}</td>
            <td className="py-2 border-t">{currentList.name}</td>
            <td className="py-2 border-t">{currentList.lowest}원</td>
            <td className="py-2 border-t">{currentList.highest}원</td>
            <td className="py-2 border-t">{currentList.medium}원</td>
            <td className="py-2 border-t">
                <button
                    onClick={() => handleModal()}
                >
                    <FontAwesomeIcon icon={faListUl} />
                </button>
            </td>
        </tr>
    )
}
