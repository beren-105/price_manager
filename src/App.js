import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons'

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
            <Route path='*' Component={NotFound} />
        </Routes>
      </ImportFetchData>
    </Router>
  );
}

function Layout() {
  const { error, isLoaded } = useContext(DataContext);

  if (!isLoaded) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='w-32 h-32 border-8 border-t-purple-500 rounded-full animate-spin mb-4'></div>
        <p>로딩 중...</p>
      </div>
    )
  }

  if (error) {
    return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p>에러가 발생했습니다.</p>
    </div>
  )
  }

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

function NotFound() {

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <p className='text-xl mb-4 title-font'>
        <Link
          to="/"
      >
          <FontAwesomeIcon
              className="mr-1"
              size='lg'
              color='#a855f7'
              icon={faMagnifyingGlassChart}
          />
          물가매니저
        </Link>
      </p>
      <h1 className='text-4xl font-light mb-16'> 페이지를 찾을 수 없습니다.</h1>
      <button className='text-white bg-purple-500 px-4 py-2 rounded-full'>
        <Link to='/'>
          메인으로 돌아가기
        </Link>
      </button>
    </div>
  )
}
export default App;
