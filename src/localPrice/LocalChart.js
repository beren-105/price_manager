import { useEffect, useState } from "react";
import LocalList from "./LocalList";


export default function LocalChart({ chartData, listData }) {

    console.log(listData)


    return (
        <article className="p-2 lg:basis-1/3">
            <div className="h-full flex flex-col items-center border p-4 rounded-xl">
                <div className='w-full'>
                    <h3 className='mt-2 mb-6 text-lg font-bold text-purple-500'>{chartData.name}</h3>
                </div>

                <div className='mb-8 flex w-full justify-evenly text-center'>
                    <article>
                        <p>평균가</p>
                        <p className="text-xl text-purple-500">{chartData.medium}원</p>
                    </article>
                    <article>
                        <p>최고가</p>
                        <p className="text-xl">{chartData.highest}원</p>
                    </article>
                    <article>
                        <p>최저가</p>
                        <p className="text-xl">{chartData.lowest}원</p>
                    </article>
                </div>

                <div className='w-full text-center mb-2'>
                    <ul>
                        {listData.map((data, index) => (
                            <LocalList
                                key={index}
                                listData={data}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    )

}