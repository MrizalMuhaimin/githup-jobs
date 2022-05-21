function ButtonSearch(props){
    return (
        <button onClick={props.ButtonSearcOnClick}  className="w-full text-white bg-slate-500 rounded text-center py-2 px-3 hover:bg-blue-400 ">
            <p>Search</p>
        </button>
    )
}

export default ButtonSearch;