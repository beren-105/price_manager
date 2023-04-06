import { useContext, useEffect, useState } from "react"
import { DataContext } from "../utils/ImportFetchData"
import { dataListUp, organizeCategorie } from "../utils/Util";
import MarkerArticle from "./MarkerArticle";
import MarkerTotalChart from "./MarkerTotalChart";

export default function MarkerPrice() {
    const { traditionalData, marketData } = useContext(DataContext);
    const [tradition, setTradition] = useState([]);
    const [_tradition, _setTradition] = useState([]);
    const [marker, setMarker] = useState([]);
    const [_marker, _setMarker] = useState([]);
    const [tag, setTag] = useState([]);

    const [highest, setHightest] = useState({
        markerCount: 0,
        markerScore: 0,
        traditionCount: 0,
        traditionScore: 0
    })

    useEffect(() => {
        if (traditionalData && marketData) {

            // 전통시장과 마트의 품목이 일치하는 데이터 필터링
            const filterTraditionalData = traditionalData.filter(traditionalData => {
                const someData = marketData.some(marketData => {
                    return traditionalData.A_SEQ === marketData.A_SEQ;
                })
                return someData
            });
            _setTradition(filterTraditionalData);

            const filtermarkerData = marketData.filter(marketData => {
                const someData = traditionalData.some(traditionalData => {
                    return traditionalData.A_SEQ === marketData.A_SEQ;
                })
                return someData
            });
            _setMarker(filtermarkerData);


            // 품목 카테고리 만들기
            setTag(organizeCategorie([...filterTraditionalData, ...filtermarkerData], 'A_NAME'));
        }

    }, [traditionalData, marketData]);
    
    
    useEffect(() => {

        // 데이터의 최저가, 최고가, 평균가 계산
        setMarker(dataListUp(_marker, tag));
        setTradition(dataListUp(_tradition, tag));

    },[_marker, _tradition]);


    useEffect(() => {

        // 전통시장 마켓 토탈 데이터
        const markerCount = _marker.length;
        const traditionCount = _tradition.length;
        let markerScore = 0;
        let traditionScore = 0;

        function traditionHighest() {
            tradition.map((tradition, i) => {
                if (tradition.medium < marker[i].medium) {
                    traditionScore = traditionScore + 1;
                } else {
                    traditionScore = traditionScore + 0;
                }
                
            });

            return traditionScore
        }

        function markerHighest() {
            marker.map((marker, i) => {
                if (tradition[i].medium > marker.medium) {
                    markerScore = markerScore + 1;
                } else {
                    markerScore = markerScore + 0;
                }
            });

            return markerScore
        }
        
        setHightest({
            markerCount: markerCount,
            markerScore: markerHighest(),
            traditionCount: traditionCount,
            traditionScore: traditionHighest(),
            itemIsEpure : tradition.length
        })
    }, [marker, tradition])


    return (
        <>
        <section className="pt-20 xl:ml-72">
            <div className="max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                <h2 className="text-purple-500 text-2xl">마트 VS 전통시장</h2>
                <p>어느 쪽이 더 쌀까? {" "} 평균가를 기준으로 대결합니다!</p>
            </div>
        </section>
        <section className="xl:ml-72">
            <MarkerTotalChart
                highest={highest}
            />
        </section>
        <section className="xl:ml-72">
            <div className="flex flex-col flex-wrap justify-center gap-8 lg:flex-row max-w-6xl mx-auto mb-8 px-4 xl:px-0">
                {tradition.length > 0 && tradition.map((tradition, index) => (
                        <MarkerArticle
                            key={index}
                            tradition={tradition}
                            marker={marker[index]}
                        />
                ))}
            </div>
        </section>
        </>
    )
}