import { useContext } from "react"
import { DataContext } from "../utils/ImportFetchData"

export default function MarkerPrice() {
    const { traditionalData, marketData } = useContext(DataContext);



    return (
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <h2 className="text-purple-500 text-2xl">마트 VS 전통시장</h2>
                <p>어느 쪽이 더 쌀까? {" "} 평균가를 기준으로 대결합니다!</p>
            </div>
        </section>
    )
}