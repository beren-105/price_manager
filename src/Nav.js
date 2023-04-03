import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWonSign, faChartLine, faMapLocation, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react"

export default function Nav() {
    const [show, setShow] = useState(false);

    return (
        <>
        {/* 햄버거메뉴 */}
        <div className="fixed flex items-center">
            <button
                className="p-3 bg-purple-500"
                onClick={() => setShow(!show)}
            >
                <FontAwesomeIcon icon={faBars}
                    size='xl'
                    color='#fff'
                />
            </button>
            <h1 className="text-lg font-bold text-gray-400 ml-2">사이트 이름</h1>
        </div>
        
        {/* 네비게이션 메뉴 */}
        <div
            className={`fixed z-50 inset-0 bg-black/[0.5] xl:hidden ${!show && 'hidden'}`}
            onClick={() => setShow(!show)}
        ></div>
        <nav className={`fixed z-50 w-72 h-full bg-gray-100 pt-16 border-r flex flex-col items-center duration-200 xl:translate-x-0 ${!show && '-translate-x-80'}`}>
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
            <h1 className="text-3xl font-bold text-purple-500 mb-12">사이트 이름</h1>

            <div className="relative w-full flex justify-center">
                
                <div className="absolute top-0 left-[w-4/5] w-4/5 h-1/3 bg-purple-500 rounded-lg"></div>

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