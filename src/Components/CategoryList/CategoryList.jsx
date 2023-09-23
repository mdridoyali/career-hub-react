import { useEffect, useState } from "react";

const CategoryList = () => {

    const [categories, setCategories] = useState([])

   useEffect( () => {
    fetch('categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
   } , [])


  return (
    <div className="w-full">
      <div className=" mx-auto mt-16">
        <div className="text-center">
          <h2 className="text-4xl mb-3 font-semibold">Job Category List</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex justify-center px-28  mt-8">
            {
                categories.map((category, idx) => 
                <div key={idx} className="mx-auto bg-slate-200 p-5 rounded-md text-center">
                    <img className="mx-auto" src={category.logo} />
                    <h3>{category.category_name}</h3>
                    <p>{category.availability}</p>
                </div>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
