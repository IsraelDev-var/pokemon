import PreviousMap from "postcss/lib/previous-map"

const Pgination = ({lastPage, setCurrentPage, pagesIncurrentBlock, currentPage}) => {
    let fistPage = 1
    const handleNextPage = ()=>{
        setCurrentPage((prevState) => {
            const nextPage = prevState + 1
            if (nextPage <= lastPage) return nextPage
            return prevState; 
        })
        
        
    }

    const handlepreviusPage = () =>{
        setCurrentPage((prevPaga) => {
            const newPage = prevPaga - fistPage
            if (newPage >= fistPage ) return newPage
                return prevPaga;
            
        })
    }

    const handleFirtPage = ()=> setCurrentPage(fistPage)


    const handleLastPage = () => setCurrentPage(lastPage)
  return (
    <ul className="flex justify-center items-center p-2 gap-2 mb-4  ">
        <li onClick={handleFirtPage}><i className='bx bx-chevrons-left transition-shadow  hover:bg-red-500 p-2'></i></li>
        <li onClick={handlepreviusPage} ><i className='bx bx-chevron-left hover:bg-red-500 p-2' ></i></li>
        {
            pagesIncurrentBlock.map((page) => (
                <li className={`p-2 ${currentPage === page ? "text-white bg-red-500" : "hover:bg-red-500 p-2"}`} key={page}  onClick={( ) => setCurrentPage(page) } >
                    {page}
                    </li>))
        }
        <li onClick={handleNextPage}><i className='hover:bg-red-500 p-2 bx bx-chevron-right'></i></li>
        <li onClick={handleLastPage}><i className='hover:bg-red-500 p-2 bx bx-chevrons-right'></i></li>
    </ul>
  )
}
export default Pgination