import {useNavigate } from "react-router-dom";
import ReactTimeAgo from 'react-time-ago'

function Job(props){
    let navigation = useNavigate();


    return(
        <div 
        className="border-t-2 py-2 px-5 hover:cursor-pointer rounded hover:bg-blue-100 group " 
        onClick={()=>
            navigation(`/jobs/${props.jobsId}`)
            }>
            <div className="flex justify-between">
                <div>
                    <h2 className="font-bold text-lg group-hover:underline group-hover:underline-offset-1">{props.name}</h2>
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
                <div className="text-right">
                    <p className="text-zinc-400">{props.location}</p>
                    <p className="text-zinc-400">
                        <ReactTimeAgo date={props.date} locale="en-US"/>
                    </p>
                    
                </div>
               

            </div>
           
        </div>
    )
}

export default Job;