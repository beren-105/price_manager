import { useContext, useEffect, useState } from "react"
import { DataContext } from "../utils/ImportFetchData"
import { organizeCategorie } from "../utils/Util"
import LocalCharts from "./LocalCharts";
import Select from "react-select";

export default function LocalPrice() {
    const { filterDatas } = useContext(DataContext);
    const [localTag, setLocalTag] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [localData, setLocalData] = useState([]);
    const [listData, setListData] = useState([]);
    

    useEffect(() => {
        setLocalTag(organizeCategorie(filterDatas, 'M_GU_NAME'));
    }, [filterDatas]);

    useEffect(() => {
        const tags = localTag.map((tag) => {
            return {value: tag, label: tag}
        });
        setOptions(tags);
        
        if (selectedOption) {
            const data = filterDatas.filter((data) => data.M_GU_NAME === selectedOption.value);
            setLocalData(data);
        }
    }, [localTag, selectedOption])


    return (
        <>
        <section className="pt-20 xl:ml-72">
            <div className="flex items-center max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <h1 className="mr-2 text-2xl text-purple-500">내가 속한 자치구는</h1>
                <Select
                    options={options}
                    onChange={setSelectedOption}
                    defaultValue={selectedOption}
                />
            </div>
        </section>

        <section className="xl:ml-72">
            <article className="relative max-w-6xl mx-auto mb-8 overflow-hidden xl:rounded-2xl">
                <div className="absolute inset-0 flex items-center -z-10">
                    <div className="absolute inset-0 bg-black/[0.5] "></div>
                    <img className="object-cover w-full h-full" src="./image/bridge-gc2093adea_1920.jpg" alt="배너 이미지" />
                </div>

                <div className="px-6 py-16 text-white z-10">
                    <h3 className="text-4xl mb-4">
                        우리구의 물가 한눈에 알아보기
                    </h3>
                    <p>
                        상단 Select버튼을 통해 자신의 구를 선택해주세요.
                    </p>
                </div>
            </article>
        </section>

        <section className="xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                {!selectedOption ? <p className="text-lg text-center">상단 Select 버튼에서 구를 선택해주세요!</p> : 
                    (localData.length === 0 ? <p>데이터가 없습니다.</p>
                    :
                    <LocalCharts
                        localData={localData}
                    />
                    )
                }
            </div>
        </section>
        </>
    )
}