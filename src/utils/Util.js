// 분류용 카테고리 만들기
export function organizeCategorie(items, tag) {
    let catagories;

    if (tag === 'A_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.A_SEQ)));
    }
    if (tag === 'M_GU_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_GU_NAME)));
    }
    if (tag === 'M_TYPE_NAME' && items) {
        catagories = Array.from(new Set(items.map(item => item.M_TYPE_NAME)));
    }

    return catagories
}

// 데이터 필터링

// 품목 이름과 일치하는 데이터
export function ItemNameDataFilter(items, tag) {
    let filterData;

    const filtering = items.filter((item) => item.A_SEQ === tag);
    filterData = filtering;
    
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


// 최저가, 최고가, 평균가 리스트업
export function dataListUp(items, tags) {
    const lists = tags.map((tag, index) => {
        const item = ItemNameDataFilter(items, tag);
        
        if (item.length > 0) {

            const sort = item.sort((a,b) => parseInt(a.A_PRICE) - parseInt(b.A_PRICE));
            let medium;

            
            if (sort.length === 1) {
                medium = sort[0].A_PRICE;
            } else {
                let mediumPrice = sort.reduce((acc, item) => {
                    return acc + parseInt(item.A_PRICE)
                }, 0);
                mediumPrice = Math.floor(mediumPrice / sort.length);
    
                medium = mediumPrice;
            }
            const itemList = {
                id: index + 1,
                name: sort[0].A_NAME,
                nameNumber: tag,
                marker: sort[0].M_TYPE_NAME,
                lowest: Number(sort[0].A_PRICE),
                highest: Number(sort[sort.length - 1].A_PRICE),
                medium: Number(medium)
            }
            
            return itemList
        }
    })

    return [...lists]
}