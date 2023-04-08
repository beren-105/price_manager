import { useContext, useEffect, useState } from "react";
import { DataContext } from "../utils/ImportFetchData";

export default function LocalChart({ localTag }) {
    const { filterDatas, traditionalData, marketData } = useContext(DataContext);
    const [chartData, setChartData] = useState({
        local : null,
        localScore: null,
        traditionalCount: null,
        marketCount: null,
    });
    console.log(filterDatas)

    useEffect(() => {
        const localData = filterDatas.reduce((acc, cur) => {
            const localName = cur.M_GU_NAME;

            if (acc[localName]) {
                acc[localName].push(cur);
            } else {
                acc[localName] = [cur];
            }

            return acc
        }, {});

        
        console.log(localData)
    }, [localTag])


    return (
        <>
        </>
    )

}