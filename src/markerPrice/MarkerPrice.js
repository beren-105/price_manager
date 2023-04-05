import { useContext, useEffect, useState } from "react"
import { DataContext } from "../utils/ImportFetchData"
import { organizeCategorie } from "../utils/Util";

export default function MarkerPrice() {
    const { traditionalData, marketData } = useContext(DataContext);
    const [tradition, setTradition] = useState(traditionalData);
    const [marker, setMarker] = useState(marketData);
    const [tag, setTag] = useState([]);

    useEffect(() => {
        if (traditionalData && marketData) {
            const filter = traditionalData.filter(traditionalData => {
                const someData = marketData.some(marketData => {
                    return traditionalData.A_SEQ === marketData.A_SEQ
                })
                return someData
            })
            setMarker(filter)
            
        }
    }, [traditionalData, marketData])

    console.log(marker)
    return (
        <>
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <h2 className="text-purple-500 text-2xl">마트 VS 전통시장</h2>
                <p>어느 쪽이 더 쌀까? {" "} 평균가를 기준으로 대결합니다!</p>
            </div>
        </section>
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">

            </div>
        </section>
        </>
    )
}