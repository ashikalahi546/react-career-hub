import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="shadow bg-white p-5 space-y-3 rounded-lg">
      {/* <img src={logo} alt="" /> */}

      <h3>{job_title}</h3>
      <h3>{company_name}</h3>
      <div>
        <Link className="border border-blue-500 rounded px-3.5 py-1.5">
    
          <button>{remote_or_onsite}</button>
        </Link>
        <Link className="border border-blue-500 rounded px-3.5 py-1.5 ml-4">
    
          <button>{job_type}</button>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <h3 className="flex items-center gap-1">
          <IoLocationOutline></IoLocationOutline> {location}
        </h3>
        <div className="flex items-center gap-1">
          <CiDollar></CiDollar>
          <h3>{salary}</h3>
        </div>
      </div>
      <Link to={`/job/${id}`} className="btn btn-primary text-white">
    
    <button>View Details</button>
  </Link>
    </div>
  );
};

export default Job;
