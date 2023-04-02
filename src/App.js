import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"
import './App.css';
import ItemsPrice from './ItemsPrice';
import Nav from './Nav';



// 데이터 불러오기

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

function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [filterDatas, setFilterDatas] = useState([]);
  const [traditionalData, setTraditionalData] = useState(null);
  const [marketData, setMarketData] = useState(null);


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


  // 최신 데이터 필터링
  useEffect(() => {
    if (data) {
      let filterData = [];

      data.forEach(data => {
        const datas = data.ListNecessariesPricesService.row;
        const updateDay = datas[0].P_DATE;
        const filter = datas.filter(data => data.P_DATE === updateDay);
        filterData.push([filter]);

      });
      
      setTraditionalData(filterData[0]);
      setMarketData(filterData[1]);
      setFilterDatas(filterData);
    }
  }, [data]);

  
  // 데이터 카테고리 추출
  function OrganizeCategorie(items, tag) {
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

  if (data) {
    console.log(traditionalData);
    console.log(marketData)
  }
  
  
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index element={<ItemsPrice />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Layout() {

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default App;
