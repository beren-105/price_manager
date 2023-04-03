import { useEffect, useState } from "react"
import { ItemNameDataFilter, organizeCategorie } from "../utils/Util";

export default function ItemsLists({ filterData }) {
    const [nameTag, setNameTag] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() =>{
        setNameTag(organizeCategorie(filterData, 'A_NAME'));
    }, [filterData])
    
    useEffect(() => {    
        // 데이터 리스트업: 최저가, 최고가, 평균가 계산
        if (nameTag.length > 0) {
            const lists = nameTag.map(name => {
                const items = ItemNameDataFilter(filterData, name);
                const sort = items.sort((a,b) => parseInt(a.A_PRICE) - parseInt(b.A_PRICE));
                let medium;

                if (sort.length === 1) {
                    medium = sort[0].A_PRICE;
                } else {
                    medium = items.reduce((acc, item) => {
                        return acc + parseInt(item.A_PRICE)
                    }, 0) / sort.length
                }

                const itemList = {
                    name: name,
                    lowest: sort[0].A_PRICE,
                    highest: sort[sort.length - 1].A_PRICE,
                    medium: medium
                }
                
                return itemList
            })

            setList([...lists])
        }
        
    }, [nameTag])
    console.log(list)
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