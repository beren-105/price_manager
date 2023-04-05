import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ItemsModal({ modalList, selestItemName, setIsModalShow }) {

    return (
        <div
            className="fixed inset-0 bg-black/[0.5] z-50 flex items-center justipy-center"
            onClick={(e) => e.target === e.currentTarget && setIsModalShow(false)}
        >
            <div className="max-w-4xl w-full h-4/5 overflow-y-auto mx-auto px-4 bg-white rounded-xl">
                <button
                    className="float-right p-4"
                    onClick={() => setIsModalShow(false)}
                >
                    <FontAwesomeIcon
                        size='xl'
                        icon={faXmark}
                        color='#aaa'
                    />
                </button>
                <h2 className="px-4 py-8 text-xl font-bold text-purple-500">{selestItemName}</h2>
                <table className="w-full text-center">
                    <thead className="font-bold text-gray-400">
                        <tr>
                            <th className="py-2">No.</th>
                            <th className="py-2">가게 이름</th>
                            <th className="py-2">자치구</th>
                            <th className="py-2">가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {modalList.map((list, index) => (
                            <ModalList
                                key={index}
                                index={index}
                                list={list}
                            />
                        ))}
                    </tbody>
                </table>    
            </div>
        </div>
    )
}

function ModalList({ list, index }) {
    return (
        <tr className="odd:bg-slate-50">
            <td className="py-2 border-t">{index + 1}</td>
            <td className="py-2 border-t">{list.M_NAME}</td>
            <td className="py-2 border-t">{list.M_GU_NAME}</td>
            <td className="py-2 border-t">{list.A_PRICE}원</td>
        </tr>
    )
}