import FotoDefault from "../assets/images/foto-default.svg"
import ArrowBack from "../assets/images/arrow-back.svg"
import parse from 'html-react-parser'
import ReactTimeAgo from 'react-time-ago'
import {Link} from "react-router-dom";

function CardJob(props){

    return (
        <div className="w-full ">
            <Link to={"/jobs"}>
                <div className="flex mt-2 mb-20 p-2 content-center items-center group" >
                    <img src={ArrowBack} alt="Tombol Kembali " className="w-5 h-5"></img>
                    <p className="font-bold grup-hover:underline grup-hover:cursor-pointer">Back</p>
                </div>
            </Link>
            
            <div className="rounded-md w-full h-content bg-white mt-28 mb-20">
                <div className=" flex w-4/5 h-max mr-auto ml-auto justify-around -mt-10 mb-10 ">
                    <div className="rounded w-44 h-44 drop-shadow-lg -mt-10 ">
                        <img src={FotoDefault} className="w-full h-full rounded" alt="foto-campany"></img>
                    </div>
                    <div className="w-4/5 px-5 self-end flex justify-end">
                        <div className="w-4/5">
                            <div className="flex items-center">
                                <p className="text-xl font-bold">
                                    {props.data.title}
                                </p>
                                <p className="text-zinc-400 px-2">-</p>
                                <p className="text-green-500">
                                    {props.data.type}

                                </p>
                            </div>
                            <div className="">
                                {parse(props.data.how_to_apply)}
                            </div>
                            
                            <div className="mt-5 flex ">
                                <p className="text-zinc-600">Diselenggarakan oleh: </p>
                                <a href={props.data.company_url} className="text-blue-400 px-2 hover:underline">{props.data.company}</a>
                            </div>
                        </div>
                        <div className="text-right w-1/5 px-5">
                            <p className="text-zinc-400">{props.data.location}</p>
                            <p className="text-zinc-400">
                                <ReactTimeAgo date={new Date(props.data.created_at)} locale="en-US"/>
                            </p>
                            
                        </div>
                    
                    </div>
                    
                </div>
                <div className="border-b-2 mt-5">

                </div>
                <div className="mt-5 w-full wl-auto wr-auto p-10">
                    {parse(props.data.description)}
                </div>
                
            
            </div>

        </div>
       
    )


}

export default CardJob;