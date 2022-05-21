function LocationInput(props){
    return (
        <div className="w-full h-full ">
            <h3 className="font-bold">Location</h3>
            <input 
            type="text" 
            onChange={props.onLocChange} value={props.loc}
            className="border-solid border-2 border-slate-400 w-full p-2 drop-shadow-lg rounded-sm"
            placeholder="Filter by city, zip code or country"></input>
        </div>
    )
}

export default LocationInput;