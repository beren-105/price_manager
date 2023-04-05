import React, { useEffect, useState } from 'react';
import MarkerChart from './MarkerChart';

export default function MarkerArticle({ tradition, marker }) {
    const [data, setData] = useState(null);
    useEffect(() => {
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
    }, [tradition, marker])
    
    console.log(data)
    return (
        <article>
            <h3>{tradition.name}</h3>
            <div className='h-80'>
                <MarkerChart
                    data={data}
                />
            </div>
        </article>
    )
}