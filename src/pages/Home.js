import { useState, useEffect } from "react";

import JobDesInput from "../components/JobDesInput";
import FulltimeInput from "../components/FulltimeInput";
import LocationInput from "../components/LocationInput";
import ButtonSearch from "../components/ButtonSearch";
import Header from "../parts/Header/Header"
import Job from "../components/Job";



function Home(){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [jobdes, setJobdes] = useState("");
    const [loc, setLoc] = useState("");
    const [fullTime, setFullTime] = useState(false);
    
    
 

    const getAllData = async(job ="",loc="",fullTime=false)=>{
        let paramenter = "";
        let baseUrl ="http://dev3.dansmultipro.co.id/api/recruitment/positions.json"

        if(job !==""){
        
            paramenter +="?description="
            paramenter += job;
        }

        if(loc !==""){
            if(paramenter !==""){
                paramenter +="&location="
                paramenter += loc;

            }else{
                paramenter +="?location="
                paramenter += loc;
            }
        }

        if(fullTime !==false){
            if(paramenter !==""){
                paramenter +="&full_time="
                paramenter += fullTime;

            }else{
                paramenter +="?full_time="
                paramenter += fullTime;
            }
        }
        if(paramenter !==""){
            baseUrl += paramenter;
            
        }
        fetch(`${baseUrl}`)
        .then((response) => {
            if (!response.ok) {
              throw new Error(
                `This is an HTTP error: The status is ${response.status}`
              );
            }
            return response.json();
          })
          .then((actualData) => {
            setData(actualData);
            setError(null);
            })
          .catch((err) => {
            setError(err.message);
            setData(null);
          });

    }

    function handleJobChange(evt) {
        setJobdes(evt.target.value)
      }

      function handleLocChange(evt) {
        setLoc(evt.target.value)
      }

      function handleTimeChange(evt) {
        setFullTime(!fullTime)
      }

      function handleButtonSearcOnClick(evt){
        getAllData(jobdes,loc,fullTime)

        
      }

      

    useEffect(() => {
        
        getAllData()

    }, []);

    return (
    
        <div className="w-full flex justify-center  min-h-screen  bg-slate-50 relative">
            <section className="fixed  w-full top-0 left-0 right-0 z-10 bg-slate-50">
                <div className="h-16 items-center p-2 bg-blue-400  ">
                    <div className=" w-full flex justify-center mr-auto ml-auto lg:w-4/5 lg:flex lg:justify-center">
                        <Header/>
                    </div>
                    

                </div>
                <div className="flex justify-between w-full p-2 mt-5 h-max content-center mr-auto ml-auto lg:w-4/5">
                    <div className="w-2/6 p-2">
                        <JobDesInput onJobChange={handleJobChange} job={jobdes}/>

                    </div>
                    <div className="w-2/6 p-2">
                        <LocationInput onLocChange={handleLocChange} loc={loc}/>

                    </div>
                    <div className="w-2/6 flex justify-between content-center items-center text-center mt-5  p-2 ">
                        <div className="w-2/5 h-full">
                            <FulltimeInput onTimeChange={handleTimeChange} checked ={fullTime}/>
                        
                        </div>
                        <div className="w-2/5 h-full flex items-center content-center">
                            <ButtonSearch ButtonSearcOnClick= {handleButtonSearcOnClick}/>
                        </div>
                    </div>
                </div>
               

            </section>
            <section className=" mt-48 w-full h-max  bg-white mr-auto ml-auto lg:w-4/5 mb-20">
                
                <div className="drop-shadow-lg rounded-sm p-10 w-full h-max bg-white">
                    <h2 className="font-bold text-3xl mt-2 mb-6 ">Job List</h2>
                    <div className="">
                        {error && (
                            <div>{`There is a problem fetching the post data - ${error}`}</div>
                        )}
                        {data &&
                            data.map(({ id, type,company, title, location,created_at }) => (
                                <Job key={id} type={type}name={title} company={company} jobsId={id} location={location} date={new Date(created_at)} />
                        ))}
                    </div>
                </div>
                

            </section>
        </div>
    )
}

export default Home;