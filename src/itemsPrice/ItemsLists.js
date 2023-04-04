import React, { useEffect, useState } from "react"
import { ItemNameDataFilter, organizeCategorie } from "../utils/Util";
import ItemList from "./ItemList";
import Paging from "./Paging";

export default function ItemsLists({ filterData }) {
    const [nameTag, setNameTag] = useState([]);
    const [list, setList] = useState([]);
    const [page, setPage] = useState(1);
    const [showItems] = React.useState(20);
    const [currentList, setCurrentList] = useState([]);

    // 데이터 카테고리 만들기
    useEffect(() =>{
        setNameTag(organizeCategorie(filterData, 'A_NAME'));
    }, [filterData])
    
    // 데이터 리스트업: 최저가, 최고가, 평균가 계산
    useEffect(() => {    
        if (nameTag.length > 0) {
            const lists = nameTag.map((name, index) => {
                const items = ItemNameDataFilter(filterData, name);
                const sort = items.sort((a,b) => parseInt(a.A_PRICE) - parseInt(b.A_PRICE));
                let medium;

                if (sort.length === 1) {
                    medium = sort[0].A_PRICE;
                } else {
                    let mediumPrice = items.reduce((acc, item) => {
                        return acc + parseInt(item.A_PRICE)
                    }, 0);
                    Math.floor(mediumPrice / sort.length);

                    medium = mediumPrice
                }

                const itemList = {
                    id: index + 1,
                    name: name,
                    lowest: sort[0].A_PRICE,
                    highest: sort[sort.length - 1].A_PRICE,
                    medium: medium
                }
                
                return itemList
            })

            setList([...lists])
        }
        
    }, [nameTag]);

    useEffect(() => {
        setCurrentList(list.slice((page-1) * showItems, (page-1) *showItems + showItems));
    }, [list, page])
    

    return(
        <section className="xl:ml-72">
            <div className="border mb-4 py-4 max-w-6xl mx-auto xl:px-0 px-4">
            {filterData.length === 0 ?
                <div>
                    <p>데이터가 없습니다.</p>
                </div>
            :
            <>
                <table className="w-full text-center">
                    <thead className="font-bold text-gray-400">
                        <tr>
                            <th className="py-2 border-x border-b">No.</th>
                            <th className="py-2 border-x border-b">품목이름</th>
                            <th className="py-2 border-x border-b">최저가</th>
                            <th className="py-2 border-x border-b">최고가</th>
                            <th className="py-2 border-x border-b">평균가</th>
                            <th className="py-2 border-x border-b">기타</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentList.map((list, index) => (
                            <ItemList
                                key={index}
                                list={list}
                            />
                        ))}
                    </tbody>
                </table>
            </>
            }
            </div>
            {filterData.length !== 0 &&
                <Paging
                    list={list}
                    page={page}
                    setPage={setPage}
                    showItems={showItems}
                />
            }
        </section>
    )
}
