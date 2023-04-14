import { Link, useLocation } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWonSign, faChartLine, faMapLocation, faXmark, faMagnifyingGlassChart, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"

export default function Nav() {
    const [show, setShow] = useState(false);
    const location = useLocation();

    return (
        <>
        {/* 햄버거메뉴 */}
        <div className="fixed flex items-center z-30 bg-white w-full xl:hidden">
            <button
                className="p-3 bg-purple-500"
                onClick={() => setShow(!show)}
            >
                <FontAwesomeIcon icon={faBars}
                    size='xl'
                    color='#fff'
                />
            </button>
            <h1 className="text-lg font-bold text-gray-400 ml-2 title-font">
                    <Link
                        to={'/'}
                        onClick={() => setShow(!show)}
                    >
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faMagnifyingGlassChart}
                    />
                    물가매니저
                </Link>
            </h1>
        </div>
        
        {/* 네비게이션 메뉴 */}
        <div
            className={`fixed z-50 inset-0 bg-black/[0.5] xl:hidden ${!show && 'hidden'}`}
            onClick={() => setShow(!show)}
        ></div>

        <nav className={`fixed z-50 w-72 h-full pt-16 flex flex-col items-center duration-200 xl:translate-x-0 bg-gray-100  border-r ${!show && '-translate-x-80'}`}>
            <button
                className="absolute top-0 right-0 p-3 xl:hidden"
                onClick={() => setShow(!show)}
            >
                <FontAwesomeIcon
                    size='xl'
                    icon={faXmark}
                    color='#aaa'
                />
            </button>
            <h1 className="text-3xl font-bold text-purple-500 mb-12 title-font">
                <Link
                    to="/"
                    onClick={() => setShow(!show)}
                >
                    <FontAwesomeIcon
                        className="mr-2"
                        icon={faMagnifyingGlassChart}
                    />
                    물가매니저
                </Link>
            </h1>

            <div className="relative w-full flex justify-center">
                
                <div className={`absolute left-[w-4/5] w-4/5 h-1/4 bg-purple-500 rounded-lg duration-200 ${location.pathname === '/' && 'top-0'} ${location.pathname === '/items' && 'top-1/4'} ${location.pathname === '/local' && 'top-2/4'} ${location.pathname === '/marker' && 'top-3/4'}`}></div>

                <ul className="text-xl z-10">
                    <li className={`flex items-center ${location.pathname === '/' ? ' text-white' : 'text-gray-500'}`}>
                        <Link
                            to="/"
                            className="block py-2 my-1"
                            onClick={() => setShow(!show)}
                        >
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faHouse}
                            />
                            메인
                        </Link>
                    </li>
                    <li className={`flex items-center ${location.pathname === '/items' ? ' text-white' : 'text-gray-500'}`}>
                        <Link
                            to="/items"
                            className="block py-2 my-1"
                            onClick={() => setShow(!show)}
                        >
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faWonSign}
                            />
                            품목별 물가
                        </Link>
                    </li>
                    <li className={`flex items-center ${location.pathname === '/local' ? ' text-white' : 'text-gray-500'}`}>
                        <Link
                            to='/local'
                            className="block py-2 my-1"
                            onClick={() => setShow(!show)}
                        >
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faMapLocation}
                            />
                            우리구 물가보기
                        </Link>
                    </li>
                    <li className={`flex items-center ${location.pathname === '/marker' ? ' text-white' : 'text-gray-500'}`}>
                        <Link
                            to='/marker'
                            className="block py-2 my-1"
                            onClick={() => setShow(!show)}
                        >
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faChartLine}
                            />
                            마트VS전통시장
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}