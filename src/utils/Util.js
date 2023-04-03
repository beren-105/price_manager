// 분류용 카테고리 만들기
export function organizeCategorie(items, tag) {
    let catagories;

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

// 품목 이름과 일치하는 데이터
export function ItemNameDataFilter(items, tag) {
    let filterData;

    if (tag === '전체') {
        filterData = items;
    } else {
        const filtering = items.filter((item) => item.A_NAME === tag);
        filterData = filtering;
    }

    return filterData
}

// 구이름과 일치하는 데이터
export function guNameDataFilter(items, tag) {
    let filterData;

    if (tag === '전체') {
        filterData = items;
    } else {
        const filtering = items.filter((item) => item.M_GU_NAME === tag);
        filterData = filtering;
    }

    return filterData
}

// 마켓타입과 일치하는 데이터
export function marketTypeDataFilter(items, tag) {
    let filterData;

    if (tag === '전체') {
        filterData = items;
    } else {
        const filtering = items.filter((item) => item.M_TYPE_NAME === tag);
        filterData = filtering;
    }

    return filterData
}

// 구이름과 마켓타입이 일치하는 데이터
export function guNameMarketTypeIsEqual(guNameData, marketTypeData, guTag, markerTag) {
    let filterData = [];
    const allData = [...guNameData, ...marketTypeData];
    const uniqueData = allData.filter((data, index, arr) => {
        return (
            index === arr.findIndex(
                (item) => item.P_SEQ === data.P_SEQ 
            )
        )
    })

    if (guTag === '전체' && markerTag === '전체') {
        filterData = uniqueData;
    }

    if (guTag === '전체' && markerTag !== '전체') {
        filterData = uniqueData.filter((data) => {
            return data.M_TYPE_NAME === markerTag
        })
    }

    if (guTag !== '전체' && markerTag === '전체') {
        filterData = uniqueData.filter((data) => {
            return data.M_GU_NAME === guTag
        })
    }

    if (guTag !== '전체' && markerTag !== '전체') {

        if (guNameData.length > 0 && marketTypeData.length > 0) {
    
            filterData = uniqueData.filter((data) => {
                return data.M_GU_NAME === guTag && data.M_TYPE_NAME === markerTag
            })
    
        } else if (guNameData.length > 0 && marketTypeData.length === 0) {
            filterData = guNameData;
        } else if (guNameData.length === 0 && marketTypeData.length > 0) {
            filterData = marketTypeData;
        }
    }


    return filterData
}