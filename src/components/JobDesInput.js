function JobDesInput(props){
    return (
        <div className="w-full h-full content-center">
            <h3 className="font-bold">Job Description</h3>
            <input 
            type="text" 
            onChange={props.onJobChange} value={props.job}
            className="border-solid border-2 border-slate-400 w-full p-2 drop-shadow-lg rounded-sm"
            placeholder="Filter by title, benefits, companies "></input>
        </div>
    )
}

export default JobDesInput;