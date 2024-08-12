import style from "./search.module.css"

export default function Search({search,setSearch}){

    return <div>
        <form onSubmit={(e)=> e.preventDefault()}  className={style.searchForm}>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search..." className={style.searchInput}/>
        </form>
    </div>
    
}