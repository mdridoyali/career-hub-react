

const Banner = () => {
    return (
        <div>
                <div className="flex  w-12/12  mx-auto bg-slate-200 border-2 ">
               {/* <div className="flex justify-around items-center w-6/12"> */}
               <div className="space-y-3 ml-32 mt-20 w-6/12">
                    <h2 className="text-6xl font-bold ">One Step Closer To Your Dream Job</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.Get Started</p>
                    <button className="btn btn-accent">Ger Started</button>
                </div>
               {/* </div> */}
                <div className=" w-6/12">
                 <img className="w-9/12" src="https://i.ibb.co/hFWTs24/user.png" />
                </div>
            </div>
        </div>
    );
};

export default Banner;