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
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                {!selectedOption ? <p>구를 선택해주세요!</p> : 
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