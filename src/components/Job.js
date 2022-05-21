import {useNavigate } from "react-router-dom";

function Job(props){
    let navigation = useNavigate();


    return(
        <div 
        className="border-t-2  m p-2 hover:cursor-pointer hover:bg-blue-100 " 
        onClick={()=>
            navigation(`/detail/${props.jobsId}`)
            }>

            <h2 className="font-bold text-lg">{props.name}</h2>
            <div className="flex">
                <p className="text-zinc-400">
                    {props.company}

                </p>
                <p className="text-zinc-400 px-2">-</p>
                <p className="text-green-500">
                    {props.type}

                </p>
            </div>
        </div>
    )
}

export default Job;