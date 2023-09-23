import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleClick =()=>{
    saveJobApplication(idInt)
    alert ('Job Applied Successfully')
  }

//   console.log(job);
  return (
    <div>
      {
        <div className=" border flex px-28 py-10 gap-10">
          <div className="space-y-2 flex-1">
            <p className="text-xl font-bold">Job Description:</p>
            <p> {job.job_description}</p>
            <p className="text-xl font-bold">job Responsibilities:</p>
            <p> {job.job_responsibility}</p>
            <h3 className="text-xl font-bold">Educational Requirements: </h3>
            <p>{job.educational_requirements}</p>
            <h3 className="text-xl font-bold">Experience: </h3>
            <p>{job.experiences}</p>
          </div>
          <div className="flex-1 bg-violet-200 px-10 rounded-2xl space-y-5 pt-5">
            <h2 className="font-bold">Job Details</h2>
            <hr></hr>
            <p>Salary: {job.salary}</p>
            <p>Job Title: {job.job_title}</p>
            <h2 className="font-bold">Contact info</h2>
            <hr></hr>
            <p>Phone: {job.contact_information.phone}</p>
            <p>Email: {job.contact_information.email}</p>
            <p>Address: {job.contact_information.address}</p>
            <div className=" text-center"><button onClick={handleClick} className="btn btn-primary w-full">Apply Now</button></div>
          </div>
        </div>
      }
    </div>
  );
};

export default JobDetails;
