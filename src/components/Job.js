function Job(props){
    const name = props.name;
    const company = props.company;
    const type = props.type;
    return(
        <div className="border-t-2  m p-2 hover:cursor-pointer hover:bg-blue-100 " onClick={props.toUrl}>
            <h2 className="font-bold text-lg">{name}</h2>
            <div className="flex">
                <p className="text-zinc-400">
                    {company}

                </p>
                <p className="text-zinc-400 px-2">-</p>
                <p className="text-green-500">
                    {type}

                </p>
            </div>
        </div>
    )
}

export default Job;