export default function Main() {

    return (
        <div className="relateve">
            <div className="w-screen h-screen ">
                <img
                    className="w-full h-full object-cover"
                    src="./image/top-ge05fba5c6_1920.jpg"
                    alt="경복궁 이미지"
                />
            </div>
            <div className="absolute w-full top-36 left-1/2 -translate-x-1/2 text-center px-4">
                <h1 className="text-5xl sm:text-6xl text-white mb-4">서울의</h1>
                <h1 className="text-5xl sm:text-6xl text-white mb-8">
                    현재{" "}
                    <span className="font-bold">물가</span>
                    는?
                </h1>
                <p className="text-white">물가매니저에서 서울시의 물가를 확인해보세요.</p>
                <p className="text-white">자치구, 전통시장, 대형마트 등 원하는 카테고리를 선택해 여러 품목의 가격을 쉽게 알 수 있습니다.</p>
            </div>
        </div>
    )
}