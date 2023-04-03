import { useEffect, useState } from "react"
import { organizeCategorie } from "../utils/Util";

export default function ItemsLists({ filterData }) {
    const [nameTag, setNameTag] = useState([]);

    useEffect(() =>{
        setNameTag(organizeCategorie(filterData, 'A_NAME'));

        if (nameTag.length > 0) {
            
        }
    }, [filterData])
    console.log(nameTag)
    return(
        <section className="xl:ml-72">
            <div className="border py-4 max-w-6xl mx-auto xl:px-0 px-4">
            {filterData.length === 0 ?
                <div>
                    <p>데이터가 없습니다.</p>
                </div>
            :
            <>
                <ul className="flex justify-around">
                    <li>No.</li>
                    <li>품목이름</li>
                    <li>최저가</li>
                    <li>최고가</li>
                    <li>평균가</li>
                    <li>기타</li>
                </ul>
                <ul>

                </ul>
            </>
            }
            </div>
        </section>
    )
}