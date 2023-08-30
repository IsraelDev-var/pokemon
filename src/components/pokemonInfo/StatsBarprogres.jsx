const StatsBarprogres = ({stat}) => {
    const getPorcent =(statValue) =>{
        const maxValue = 255
        const porcent = (100 * statValue) / maxValue
        return `${porcent}%`
    }
    
  return (
    <article >
        <section className="container__bar flex justify-between px-1 ">
            <h5>{stat.name}</h5>
            <span>{stat.value}/255 </span>
        </section>
        <div className="h-6 bg-slate-300 rounded-md">
            <div style={{width: getPorcent(stat.value)}} className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"></div>
        </div>
    </article>
  )
}
export default StatsBarprogres