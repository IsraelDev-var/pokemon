const paginationData = (items, currentPage)=>{
    const  itemsForPage = 20 
    const sliceEnd = currentPage * itemsForPage
    const sliceStart = sliceEnd - itemsForPage

    const itemscurrentPage = items.slice(sliceStart, sliceEnd)

    const lastPage = Math.ceil(items.length / itemsForPage)

    const pageForBlock = 5 
    const actualBlock = Math.ceil(currentPage / pageForBlock)

    const pagesIncurrentBlock = []
    const maxPage = actualBlock * pageForBlock
    const minPage = (maxPage - pageForBlock) + 1
    for (let i = minPage; i <= maxPage; i++) {
        if (i <= lastPage) {
            pagesIncurrentBlock.push(i)
        }
        
        
        
    }
    return{
        itemscurrentPage,
        lastPage,
        pagesIncurrentBlock
    }


}



export {
    paginationData
}

