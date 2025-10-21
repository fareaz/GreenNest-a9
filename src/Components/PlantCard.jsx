import React from 'react';
import { FaStar } from 'react-icons/fa';

const PlantCard = ({p}) => {
    return (
          <div
            
            className="bg-white/80 p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            
            <img
              src={p.image}
              alt={p.plantName}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
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
              className="mt-4 w-full rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700 transition"
            >
              View Details
            </button>
          </div>
    );
};

export default PlantCard;