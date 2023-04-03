import { createContext, useEffect, useState } from 'react'

// 데이터 불러오기
export const DataContext = createContext();

export function ImportFetchData({ children }) {
    
    // 기본 데이터가져오기
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    
    // 데이터 필터링
    const [filterDatas, setFilterDatas] = useState([]);
    const [traditionalData, setTraditionalData] = useState([]);
    const [marketData, setMarketData] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
    
        fetchData()
          .then(([traditionalData, marketData]) => {
            setData([traditionalData, marketData]);
          })
          .catch(error => {
            setError(error);
          })
          .finally(() => {
            setIsLoaded(true);
          });
    }, []);

    useEffect(() => {
        if (data) {
          let filterData = [];
    
          data.forEach(data => {
            const datas = data.ListNecessariesPricesService.row;
            const updateDay = datas[0].P_DATE;
            const filter = datas.filter(data => data.P_DATE === updateDay);
            filterData.push(filter);
            
          });
          setFilterDatas(filterData);
          setTraditionalData(filterData[0]);
          setMarketData(filterData[1]);
        }
    }, [data]);

    return (
        <DataContext.Provider value={{ error, isLoaded, filterDatas, traditionalData, marketData }}>
            {children}
        </DataContext.Provider>
    )
}

function fetchAPI(url) {
    return fetch(url)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(res.statusText);
      })
      .catch(error => {
        console.error(error);
    });
}

function fetchData() {
  
    const uri = `http://openAPI.seoul.go.kr:8088/${process.env.REACT_APP_KEY}/json/ListNecessariesPricesService/1/1000`;
  
    // 날짜 계산
    const date = new Date();
    const prevWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
    const datatDay = prevWeek.getFullYear() + '-' + (('0' + (prevWeek.getMonth() + 1)).slice(-2));
  
    const traditionalPromise = fetchAPI(`${uri}/ / /${datatDay}/전통시장`);
    const marketPromise = fetchAPI(`${uri}/ / /${datatDay}/대형마트`);
  
    return Promise.all([traditionalPromise, marketPromise]);
}


// 분류용 카테고리 만들기
export function organizeCategorie(items, tag) {
    let catagories

    if (tag === 'A_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_TYPE_NAME)));
    }
    if (tag === 'M_GU_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_GU_NAME)));
    }
    if (tag === 'M_TYPE_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_TYPE_NAME)));
    }

    return catagories
}

