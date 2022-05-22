import {useParams } from 'react-router-dom'
import {useState, useEffect } from 'react';
import Header from '../parts/Header/Header';
import CardJob from "../components/CardJob";

function Detail(){

    const { id } = useParams()
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const getData = (idJob = id) =>{
        const baseUrl =`http://dev3.dansmultipro.co.id/api/recruitment/positions/${idJob}`

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

    useEffect(() => {
        getData();
    }, []);



    return (
        <div className="w-full flex justify-center min-h-screen bg-slate-50 relative">
            {error && (
            <div>{`There is a problem fetching the get data - ${error}`}</div>
            )}
            {data && (
                <div>
                    <section className="fixed  w-full top-0 left-0 right-0 z-10 bg-slate-50">
                        <div className="h-16 items-center p-2 bg-blue-400  ">
                            <div className=" w-full flex justify-center mr-auto ml-auto lg:w-4/5 lg:flex lg:justify-center">
                                <Header/>
                            </div>
                        </div>
                    </section>
                    <section className="mt-20 mr-auto ml-auto lg:w-4/5">
                        
                        <CardJob key={id} data={ data}/>
                        
                    </section>
                </div>
            )}
        </div>
    )
}

export default Detail;