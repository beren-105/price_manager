import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ItemLists({ currentList }) {
    return (
        <tr>
            <td className="py-2 border-t">{currentList.id}</td>
            <td className="py-2 border-t">{currentList.name}</td>
            <td className="py-2 border-t">{currentList.lowest}원</td>
            <td className="py-2 border-t">{currentList.highest}원</td>
            <td className="py-2 border-t">{currentList.medium}원</td>
            <td className="py-2 border-t">
                <button>
                    <FontAwesomeIcon icon={faListUl} />
                </button>
            </td>
        </tr>
    )
}
