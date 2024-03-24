import { useEffect, useState } from "react";
import Job from "./Job";



const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    return (
        <div>
            <div className="text-center">
            <h3 className="text-4xl font-bold">Featured Jobs : {jobs.length}</h3>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

           
        </div>
        <div className="grid grid-cols-2 gap-5">
                {
                    jobs.slice(0,dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={ dataLength ===  jobs.length ? 'hidden' : '' }>
                <button onClick={()=> setDataLength(jobs.length)}
                 className="btn btn-primary text-white text-center my-5 ">See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;