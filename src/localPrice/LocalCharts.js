import { useContext, useEffect, useState } from "react";
import { dataListUp, organizeCategorie } from "../utils/Util";
import LocalChart from "./LocalChart";

export default function LocalCharts({ localData }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const list = organizeCategorie(localData, 'A_NAME');
        setChartData(dataListUp(localData, list));
    }, [localData])

    
    console.log(chartData)


    return (
        <>
            <LocalChart
                chartData={chartData}
            />
        </>
    )

}