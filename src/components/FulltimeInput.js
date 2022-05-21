function FulltimeInput(props){
    return (
        <div className="w-full h-full flex text-center  items-center content-center">
            <input 
            type="checkbox" 
            className="mr-2"
            onChange={props.onTimeChange} defaultChecked={props.time}
            ></input>
            <h3 className="font-bold">Full Time Only</h3>

        </div>
    )
}

export default FulltimeInput;