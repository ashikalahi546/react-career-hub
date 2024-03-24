import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job= jobs.find(job => job.id === idInt);
    console.log(job)
    return (
        <div className="my-10 grid grid-cols-4 gap-5">
          <div className="space-y-3 col-span-3">
          <h2><span className="font-medium">Job Description</span> :{job.job_description} </h2>
          <h2><span className="font-medium">Job Description </span> :{job.job_responsibility} </h2>
          </div>
          <div className="col-span-1 bg-gray-100">
          <h2>Job Details</h2>
          </div>
          
        </div>
    );
};

export default JobDetails;