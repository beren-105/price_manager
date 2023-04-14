import { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"
import './App.css';
import Main from './Main';
import ItemsPrice from './itemsPrice/ItemsPrice';
import LocalPrice from './localPrice/LocalPrice';
import MarkerPrice from './markerPrice/MarkerPrice';
import Nav from './Nav';
import { DataContext, ImportFetchData } from './utils/ImportFetchData'


function App() {

  return (
    <Router>
      <ImportFetchData>
        <Routes>
            <Route path='/' Component={Layout}>
              <Route index Component={Main} />
              <Route path='items' element={<ItemsPrice />} />
              <Route path='local' element={<LocalPrice />}/>
              <Route path='marker' element={<MarkerPrice />}/>
            </Route>
        </Routes>
      </ImportFetchData>
    </Router>
  );
}

function Layout() {
  const { error, isLoaded } = useContext(DataContext);

  if (!isLoaded) {
    return <p>로딩중</p>
  }

  if (error) {
    return <p>에러발생</p>
  }

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default App;
