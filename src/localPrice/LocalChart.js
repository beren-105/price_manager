import { useEffect, useState } from "react";
import LocalList from "./LocalList";


export default function LocalChart({ chartData, listData }) {

    console.log(listData)


    return (
        <article className="flex flex-col items-center border p-4 rounded-xl basis-1/3">
            <div className='w-full'>
                <h3 className='mt-2 mb-6 text-lg font-bold text-purple-500'>{chartData.name}</h3>
            </div>

            <div className='mb-4'>
                <article>
                    <p>평균가</p>
                    <p>{chartData.medium}원</p>
                </article>
                <article>
                    <p>최고가<span>{chartData.highest}원</span></p>
                </article>
                <article>
                    <p>최저가<span>{chartData.lowest}원</span></p>
                </article>
            </div>

            <div className=''>
                <ul>
                    {listData.map((data, index) => (
                        <LocalList
                            key={index}
                            listData={data}
                        />
                    ))}
                </ul>
            </div>
        </article>
    )

}