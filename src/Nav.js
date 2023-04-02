import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWonSign, faChartLine, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export default function Nav() {
    const [show, setShow] = useState(false);

    return (
        <>
        {/* 햄버거메뉴 */}
        <button
            className="fixed p-3 bg-purple-500"
            onClick={() => setShow(!show)}
        >
            <FontAwesomeIcon icon={faBars}
                size='xl'
                color='#fff'
            />
        </button>
        
        {/* 네비게이션 메뉴 */}
        <nav className={`fixed w-80 h-full bg-gray-100 pt-16 border-r flex flex-col items-center ${!show && '-translate-x-80'}`}>
            <h1 className="text-3xl font-bold text-purple-500 mb-12">사이트 이름</h1>

            <div className="relative w-full flex justify-center">
                
                <div className="absolute top-0 left-[w-3/4] w-3/4 h-1/3 bg-purple-500 rounded-lg"></div>

                <ul className="text-xl z-10">
                    <li className={`flex items-center text-white`}>
                        <Link className="block py-2 my-1">
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faWonSign}
                            />
                            품목별 물가
                        </Link>
                    </li>
                    <li className={`flex items-center text-gray-500`}>
                        <Link className="block py-2 my-1">
                            <FontAwesomeIcon
                                className="mr-2"
                                icon={faMapLocation}
                            />
                            자치구 비교하기
                        </Link>
                    </li>
                    <li className={`flex items-center text-gray-500`}>
                        <Link className="block py-2 my-1">
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