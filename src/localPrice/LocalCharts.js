import { useContext, useEffect, useState } from "react";
import { dataListUp, organizeCategorie } from "../utils/Util";
import LocalChart from "./LocalChart";

export default function LocalCharts({ localData }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const list = organizeCategorie(localData, 'A_NAME');
        setChartData(dataListUp(localData, list));
    }, [localData])


    return (
        <div className="flex flex-col flex-wrap justify-center gap-8 lg:flex-row">
            {chartData.map((data, index) => (
                <LocalChart
                    key={index}
                    chartData={data}
                    localData={localData}
                />
            ))}
        </div>
    )

}