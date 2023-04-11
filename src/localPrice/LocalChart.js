import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  import LocalList from "./LocalList";


export default function LocalChart({ chartData, listData }) {
    const [data, setData] = useState(null);


    useEffect(() => {
        // 데이터 정리
        setData([{
            name : chartData.name,
            최저가 : chartData.lowest,
            최고가 : chartData.highest,
            평균가 : chartData.medium
        }])

    }, [chartData])

    console.log(listData)


    return (
        <article className="flex flex-col items-center border p-4 rounded-xl">
            <div className='w-full'>
                <h3 className='mt-2 mb-6 text-lg'>{chartData.name}</h3>
            </div>
            <div className='mb-4'>
                <BarChart
                width={320}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="최저가" fill="#c4b5fd" />
                <Bar dataKey="평균가" fill="#a855f7" />
                <Bar dataKey="최고가" fill="#f9a8d4" />
            </BarChart>
            </div>
                {listData.map((data, index) => (
                    <LocalList
                        key={index}
                        data={data}
                    />
                ))}
            <div className='text-xl'>
            </div>
        </article>
    )

}