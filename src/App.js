import { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom"
import './App.css';
import ItemsPrice from './itemsPrice/ItemsPrice';
import Nav from './Nav';
import { DataContext, ImportFetchData } from './utils/ImportFetchData'


function App() {

  return (
    <Router>
      <ImportFetchData>
        <Routes>
            <Route path='/' Component={Layout}>
              <Route index element={<ItemsPrice />} />
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
