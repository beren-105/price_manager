import { useContext, useEffect, useState } from "react";
import { DataContext } from "../utils/ImportFetchData";
import { organizeCategorie } from "../utils/Util"

export default function LocalTotalChart() {
    const { filterDatas, traditionalData, marketData } = useContext(DataContext);
    const [localTag, setLocalTag] = useState([]);
    const [chartData, setChartData] = useState({
        local : null,
        traditionalCount: null,
        traditionalScore: null,
        marketCount: null,
        marketScore: null
    });

    useEffect(() => {
        setLocalTag(organizeCategorie(filterDatas, 'M_GU_NAME'));
    }, [filterDatas])

    console.log(localTag)



    return (
        <>
        </>
    )

}