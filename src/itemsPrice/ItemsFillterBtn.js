import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from "../utils/ImportFetchData";
import { guNameDataFilter, guNameMarketTypeIsEqual, marketTypeDataFilter, organizeCategorie } from "../utils/Util";


export default function ItemsFillterBtn({ setFilterData }) {
    const { filterDatas }  = useContext(DataContext);

    const [isShow, setIsShow] = useState(false);
    const [guNameTag, setguNameTag] = useState([]);
    const [marketNameTag, setMarketNameTag] = useState([]);
    const [fillterTag, setFillterTag] = useState({
        guName: '전체',
        marketName: '전체'
    });
    
    useEffect(() => {
        // 태그 업데이트
        if (filterDatas) {
            let guName = organizeCategorie(filterDatas, 'M_GU_NAME');
            let markerName = organizeCategorie(filterDatas, 'M_TYPE_NAME');
            guName.unshift('전체');
            markerName.unshift('전체');

            setguNameTag(guName);
            setMarketNameTag(markerName);
        }

    }, [filterDatas, isShow])

    useEffect(() => {
        dataFilltering();
    }, [filterDatas, fillterTag])

    // 필터링 버튼 클릭시
    function dataFilltering() {
        if (filterDatas) {
            const guNameData =  guNameDataFilter(filterDatas, fillterTag.guName);
            const marketTypeData = marketTypeDataFilter(filterDatas, fillterTag.marketName);
            const equalData = guNameMarketTypeIsEqual(guNameData, marketTypeData, fillterTag.guName, fillterTag.marketName);
            setFilterData(equalData);
        }
    }

    return (
        <section className="xl:ml-72 mb-4">

            {/* 필터 버튼 */}
            <div className="flex justify-end mb-2 max-w-6xl mx-auto xl:px-0 px-4">
                <button
                    className={`border rounded px-4 py-2 ${fillterTag.guName !== '전체' || fillterTag.marketName !== '전체' ? 'text-white bg-purple-500' : null}`}
                    onClick={() => setIsShow(!isShow)}
                >
                    Filer
                    <FontAwesomeIcon
                        className="ml-1"
                        icon={faFilter}
                        color={fillterTag.guName !== '전체' || fillterTag.marketName !== '전체' ? '#fff' : '#aaa'}
                    />
                </button>
            </div>

            {/* 필터 버튼 상세 */}
            <div className={`bg-slate-50 max-w-6xl mx-auto xl:px-0 overflow-hidden ${isShow ? 'h-full' : 'h-0'}`}>
                <article className="flex items-center content-stretch border-t py-2">
                    <h4
                        className="font-bold shrink-0 p-4"
                    >
                        자치구
                    </h4>
                    <div className="pl-4 border-l">
                        {guNameTag.map((guNameTag, i) => (
                            <button
                                className={`px-3 py-1 m-1 border rounded-full text-sm ${fillterTag.guName === guNameTag ? 'text-white bg-purple-500' : 'bg-white'}`}
                                key={i}
                                onClick={(e) => setFillterTag({...fillterTag, guName: e.target.value})}
                                value={guNameTag}
                            >
                                {guNameTag}
                            </button>
                        ))}
                    </div>
                </article>
                <article className="flex items-center content-stretch border-y py-2">
                    <h4
                        className="font-bold shrink-0 p-4"
                    >
                        시장
                    </h4>
                    <div className="pl-4 border-l">
                        {marketNameTag.map((marketNameTag, i) => (
                            <button
                                className={`px-3 py-1 m-1 border rounded-full text-sm ${fillterTag.marketName === marketNameTag ? 'text-white bg-purple-500' : 'bg-white'}`}
                                key={i}
                                onClick={(e) => setFillterTag({...fillterTag, marketName: e.target.value})}
                                value={marketNameTag}
                            >
                                {marketNameTag}
                            </button>
                        ))}
                    </div>
                </article>
            </div>
        </section>
    )
}