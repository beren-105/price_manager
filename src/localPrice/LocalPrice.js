import { useContext } from "react"
import { DataContext } from "../utils/ImportFetchData"
import LocalTotalChart from "./LocalTotalChart";

export default function LocalPrice() {
    const { traditionalData, marketData } = useContext(DataContext);

    return (
        <>
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <LocalTotalChart />
            </div>
        </section>
        </>
    )
}