
// 분류용 카테고리 만들기
export default function organizeCategorie(items, tag) {
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

