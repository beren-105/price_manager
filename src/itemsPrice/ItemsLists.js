import React, { useEffect, useState } from "react"
import { ItemNameDataFilter, organizeCategorie } from "../utils/Util";
import ItemList from "./ItemList";
import Paging from "./Paging";

export default function ItemsLists({ filterData, selestItemName, setSelestItemName, setModalList, setIsModalShow }) {

    const [page, setPage] = useState(1);
    const [showItems] = React.useState(20);
    const [nameTag, setNameTag] = useState([]);
    const [list, setList] = useState([]);
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
                    mediumPrice = Math.floor(mediumPrice / items.length);

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


    // 현재 보여질 페이지의 데이터 리스트업
    useEffect(() => {
        setCurrentList(list.slice((page-1) * showItems, (page-1) *showItems + showItems));
    }, [list, page])


    // 리스트보기 클릭 후 모달에 전달될 데이터 리스트업
    useEffect(() => {
        const filterList = ItemNameDataFilter(filterData, selestItemName);
        const filterListSort = filterList.sort((a,b) => parseInt(a.A_PRICE) - parseInt(b.A_PRICE));
        setModalList(filterListSort)
    }, [selestItemName])
    

    return(
        <section className="xl:ml-72">
            <div className="border rounded-xl mb-4 p-4 max-w-6xl mx-auto">
            {filterData.length === 0 ?
                <div>
                    <p>데이터가 없습니다.</p>
                </div>
            :
            <>
                <table className="w-full text-center">
                    <thead className="font-bold text-gray-400 sticky top-12 xl:top-0 bg-white">
                        <tr>
                            <th className="py-2">No.</th>
                            <th className="py-2">품목이름</th>
                            <th className="py-2">최저가</th>
                            <th className="py-2">최고가</th>
                            <th className="py-2">평균가</th>
                            <th className="py-2">리스트보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentList.map((currentList, index) => (
                            <ItemList
                                key={index}
                                index={index}
                                currentList={currentList}
                                setSelestItemName={setSelestItemName}
                                setIsModalShow={setIsModalShow}
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
