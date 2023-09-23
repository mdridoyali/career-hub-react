import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const [dataLength, setDataLength] = useState(4)

      const [jobs, SetJobs]= useState([]);

      useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => SetJobs(data));

      } , []);


    return (
        <div className='mt-16'>
            <div className="text-center mb-8">
            <h2 className="text-4xl mb-3 font-semibold">Featured jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className=" grid grid-cols-2 gap-10 ">
                {
                    jobs.slice(0, dataLength).map((job, idx) => 
                     <div key={idx} className="border-2 text-center p-5 mx-10 rounded-2xl space-y-2"> 
                          <img className="mx-auto" src={job.logo} />
                          <h2 className="text-xl font-bold ">{job.job_title}</h2>
                          <p>{job.company_name}</p>
                          <div className="mt-2">
                            <button className="btn btn-outline btn-primary mr-2">{job.remote_or_onsite}</button>
                            <button className="btn btn-outline btn-primary ">{job.job_type}</button>
                          </div>
                          <div className="flex justify-center items-center mt-2 ">
                          <h2 className="text-xl"> <MdLocationOn></MdLocationOn> </h2>
                            <p className="mr-6">{job.location}</p>
                            <h2 className="text-xl"><AiOutlineDollar></AiOutlineDollar></h2>
                            <p>{job.salary}</p>
                          </div>
                          <div>
                          </div>
                          <Link to={`/job/${job.id}`}> <button className="btn btn-primary">View Details</button></Link>
                     </div>
                    )
                }
            </div>
            <div className="text-center"><div className={dataLength === jobs.length && 'hidden'}> <button onClick={()=> setDataLength(dataLength+2)} className="btn btn-primary mt-10 w-4/12">See More</button></div></div>
        </div>
    );
};



export default FeaturedJobs;