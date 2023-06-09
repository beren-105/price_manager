import { useState } from "react"
import ItemsFillterBtn from "./ItemsFillterBtn";
import ItemsLists from "./ItemsLists";
import ItemsModal from "./ItemsModal";

export default function ItemsPrice() {
    const [filterData, setFilterData] = useState([]);
    const [modalList, setModalList] = useState([]);
    const [ismodalshow, setIsModalShow] = useState(false);
    const [selestItemName, setSelestItemName] = useState(null);

    console.log(modalList)
    return (
        <>
        <section className="pt-20 xl:ml-72">
            <h2 className="max-w-6xl mx-auto mb-8 text-2xl text-purple-500 px-4 xl:px-0">품목별 물가</h2>

            <article className="relative max-w-6xl mx-auto mb-8 overflow-hidden xl:rounded-2xl">
                <div className="absolute inset-0 flex items-center -z-10">
                    <div className="absolute inset-0 bg-black/[0.5] "></div>
                    <img className="object-cover w-full h-full" src="./image/items_price.jpg" alt="배너 이미지" />
                </div>

                <div className="px-6 py-16 text-white z-10">
                    <h3 className="text-4xl mb-4">
                        지금 물가는 어때?
                    </h3>
                    <p>
                        매주 금요일 물가를 조사하여 만들어진 자료를 바탕으로 하고 있습니다.
                    </p>
                </div>
            </article>
        </section>
        <ItemsFillterBtn
            setFilterData={setFilterData}
        />
        <ItemsLists
            filterData={filterData}
            setModalList={setModalList}
            setIsModalShow={setIsModalShow}
            selestItemName={selestItemName}
            setSelestItemName={setSelestItemName}
        />
        {ismodalshow &&
            <ItemsModal
                modalList={modalList}
                setIsModalShow={setIsModalShow}
            />
        }
        </>
    )
}
