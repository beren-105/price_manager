import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"
import './App.css';
import ItemsPrice from './ItemsPrice';
import Nav from './Nav';


function App() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [filterDatas, setFilterDatas] = useState([]);


  function fetchData() {
    const date = new Date();
    const prevWeek = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7);
    const datatDay = prevWeek.getFullYear() + '-' + (('0' + (prevWeek.getMonth() + 1)).slice(-2));

    const promise = fetch(`http://openAPI.seoul.go.kr:8088/544355775a6b33333130354a476b6441/json/ListNecessariesPricesService/1/1000//${datatDay}`)
      .then(res => {
        if (!res.ok) {
          throw res;
        }
        return res.json();
      })
    return promise;
  }

  useEffect(() => {
    setIsLoaded(false);

    fetchData()
      .then(data => {
        setData(data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  

  }, [])
  
  useEffect(() => {
    if (data) {
      const updateDay = data.ListNecessariesPricesService.row[0].P_DATE;
      const filterData = data.ListNecessariesPricesService.row.filter(data => data.P_DATE === updateDay);

      setFilterDatas(filterData);
    }
  }, [data])
  
  console.log(filterDatas)
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
