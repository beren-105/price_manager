import { useContext, useEffect, useState } from "react";
import { dataListUp, organizeCategorie } from "../utils/Util";
import LocalChart from "./LocalChart";

export default function LocalCharts({ localData }) {
    const [chartData, setChartData] = useState([]);
    const [listData, setListdata] = useState([]);

    useEffect(() => {
        const chart = organizeCategorie(localData, 'A_NAME');
        setChartData(dataListUp(localData, chart));

        const list = localData.reduce((acc, cur) => {
            const mGuName = cur.A_SEQ;
            if (!acc[mGuName]) {
              acc[mGuName] = [];
            }
            acc[mGuName].push(cur);
            return acc;
          }, {});
          setListdata(list)
    }, [localData])


    return (
        <div className="flex flex-col lg:flex-wrap lg:flex-row">
            {chartData.map((data, index) => (
                <LocalChart
                    key={index}
                    chartData={data}
                    listData={localData.filter((local) => local.A_SEQ === data.nameNumber)}
                />
            ))}
        </div>
    )

}