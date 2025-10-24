import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const PlantCard = ({p}) => {
      const navigate = useNavigate();

  const handleViewDetails = () => {
     navigate(`/plant_details/${p.plantId}`);
  };
    return (
          <div
            
            className="bg-white/80 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            
            <img
              src={p.image}
              alt={p.plantName}
              className="w-full h-48 object-cover rounded-lg"
            />

            <h3 className="text-lg font-bold mt-3 text-emerald-900">
              {p.plantName}
            </h3>

       
            <p className="mt-1 text-emerald-700 font-medium">
              $ {p.price}
            </p>

        
            <div className="flex items-center gap-1 text-orange-400 mt-1">
              {Array.from({ length: Math.round(p.rating) }).map((_, i) => (
                <FaStar key={i} />
              ))}
              <span className="ml-2 text-gray-600 text-sm">{p.rating}</span>
            </div>
            <button
             onClick={handleViewDetails}
              className=" mt-2 w-full btn hover:text-green-900 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold"
            >
              View Details
            </button>
          </div>
    );
};

export default PlantCard;