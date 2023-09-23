import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { key } from "localforage";
// import AppliedJobs from "./AppliedJobs";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [applyJobs, setApplyJobs] = useState([]);
  const [displayJobs, setDisplayJob] = useState([]);

  const handleJobsFilter = (filter)=>{
      if(filter === 'all'){
        setDisplayJob(applyJobs);
      }
      else if(filter === 'remote'){
           const remoteJobs = applyJobs.filter(job => job.remote_or_onsite === "Remote");
           setDisplayJob(remoteJobs);
      }
      else if(filter === 'onsite'){
        const onsiteJobs = applyJobs.filter(job => job.remote_or_onsite === "Onsite");
         setDisplayJob(onsiteJobs)
      }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs) {
      //   const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setApplyJobs(jobsApplied);
      setDisplayJob(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <h2 className="font-bold">Jobs i Applied: {applyJobs.length}</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">Filter Job</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=> handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={()=> handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=> handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      
      <div className="grid grid-cols-2 gap-2  ">
        {displayJobs.map((job, idx) => (
          <div key={idx} className="bg-amber-100 p-10 mx-20 rounded-lg">
            <img src={job.logo} />
            <h2>{job.job_title}</h2>
            <p className="bg-slate-200 w-min p-2 font-bold m-2">
              {job.remote_or_onsite}
            </p>
            <button className="btn btn-primary">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
