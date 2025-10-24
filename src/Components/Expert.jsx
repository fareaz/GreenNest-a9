import React, { useEffect, useState } from "react";
const Expert = () => {
     const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("/Experts.json") 
      .then((result) => result.json())
      .then((data) => setExperts(data))
      .catch((error) => console.log(error));
  }, []);
return (
<section className="w-11/12 mx-auto py-10">
<h2 className="text-3xl font-bold text-center text-green-700 mb-8">
Our Plant Care Experts
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{experts.map((expert) => (
<div
key={expert.id}
className="bg-white border border-green-200 rounded-2xl shadow-md hover:shadow-xl transition p-4 text-center"
>
<img
src={expert.image}
alt={expert.name}
className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-green-300"
/>
<h3 className="text-lg font-semibold text-green-800 mt-3">
{expert.name}
</h3>
<p className="text-sm text-green-600">{expert.specialization}</p>
</div>
))}
</div>
</section>
);
};


export default Expert;