import { useContext, useEffect, useState } from "react"
import { DataContext } from "../utils/ImportFetchData"
import { organizeCategorie } from "../utils/Util"
import LocalChart from "./LocalChart";
import Select from "react-select";

export default function LocalPrice() {
    const { filterDatas } = useContext(DataContext);
    const [localTag, setLocalTag] = useState([]);
    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    

    useEffect(() => {
        setLocalTag(organizeCategorie(filterDatas, 'M_GU_NAME'));
    }, [filterDatas]);

    useEffect(() => {
        const tags = localTag.map((tag) => {
            return {value: tag, label: tag}
        });
        setOptions(tags);
    }, [localTag])


    console.log(selectedOption)
    return (
        <>
        <section className="pt-20 xl:ml-72">
            <div className="flex items-center max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <h1>내가 속한 자치구는</h1>
                <Select
                    options={options}
                    onChange={setSelectedOption}
                    defaultValue={selectedOption}
                />
            </div>
        </section>
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <LocalChart
                    localTag={localTag}
                />
            </div>
        </section>
        </>
    )
}