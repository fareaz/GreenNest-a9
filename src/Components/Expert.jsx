import React from "react";


const experts = [
{
id: 1,
name: "Sophia Green",
specialization: "Indoor Plant Specialist",
image:
"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
},
{
id: 2,
name: "Liam Wood",
specialization: "Soil & Nutrition Expert",
image:
"https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=800&auto=format&fit=crop",
},
{
id: 3,
name: "Ava Leaf",
specialization: "Propagation Specialist",
image:
"https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop",
},
{
id: 4,
name: "Noah Bloom",
specialization: "Pest Control Advisor",
image:
"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=800&auto=format&fit=crop",
},
];


const Expert = () => {
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