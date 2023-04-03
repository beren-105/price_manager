// 분류용 카테고리 만들기
export function organizeCategorie(items, tag) {
    let catagories

    if (tag === 'A_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.A_NAME)));
    }
    if (tag === 'M_GU_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_GU_NAME)));
        catagories.unshift('전체');
    }
    if (tag === 'M_TYPE_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_TYPE_NAME)));
        catagories.unshift('전체');
    }

    return catagories
}

// 데이터 필터링
export function dataFiltering(items, tag) {

}