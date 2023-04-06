import React, { useEffect, useState } from 'react';
import MarkerChart from './MarkerChart';

export default function MarkerArticle({ tradition, marker }) {
    const [data, setData] = useState(null);
    const [hightTradition, setHightTradition] = useState(false);

    useEffect(() => {
        // 데이터 정리
        setData([{
            name : tradition.name,
            marker : tradition.marker,
            최저가 : tradition.lowest,
            최고가 : tradition.highest,
            평균가 : tradition.medium
        }, {
            name : marker.name,
            marker : marker.marker,
            최저가 : marker.lowest,
            최고가 : marker.highest,
            평균가 : marker.medium
        }])

        // 평균가가 어느쪽이 더 낮은가
        if (tradition.medium < marker.medium) {
            setHightTradition(true);
        } else {
            setHightTradition(false);
        }
    }, [tradition, marker])
    
    
    return (
        <article className='flex flex-col items-center border p-4 rounded-xl'>
            <div className='w-full'>
                <h3 className='mt-2 mb-6 text-lg'>{tradition.name}</h3>
            </div>
            <div className='mb-4'>
                <MarkerChart
                    data={data}
                />
            </div>
            <div className='text-xl'>
                <span className={`${hightTradition && 'text-purple-500 font-bold text-2xl'}`}>전통시장</span>
                <span className='mx-2'>VS</span>
                <span className={`${!hightTradition && 'text-purple-500 font-bold text-2xl'}`}>대형마트</span>
            </div>
        </article>
    )
}