import React, { useEffect, useState } from "react";
import { FaTint, FaSun, FaLeaf } from "react-icons/fa"; 
const PlantCare = () => {
  const [careData, setCareData] = useState([]);

  useEffect(() => {
    fetch("/care.json")
      .then((res) => res.json())
      .then((data) => setCareData(data))
      .catch((error) => console.error("Error loading care data:", error));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10 ">
      <h2 className="text-3xl font-bold text-emerald-800 text-center mb-10">
         Plant Care Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {
        careData.map((plant) => (
          <div
            key={plant.plantId}
            className="p-6 border-emerald-200 bg-emerald-50/50 rounded-2xl shadow-md border hover:shadow-lg transition-all duration-200"
          >
            
            <h3 className="text-xl font-semibold text-emerald-700 text-center mb-4">
              {plant.plantName}
            </h3>

            <div className="text-gray-700 text-sm space-y-3">
              <p className="flex items-start gap-2">
                <FaTint className="text-blue-500 mt-1" />
                <span>
                  <span className="font-semibold text-emerald-700">Watering:</span>{" "}
                  {plant.watering}
                </span>
              </p>

              <p className="flex items-start gap-2">
                <FaSun className="text-yellow-500 mt-1" />
                <span>
                  <span className="font-semibold text-amber-600">Sunlight:</span>{" "}
                  {plant.sunlight}
                </span>
              </p>

              <p className="flex items-start gap-2">
                <FaLeaf className="text-lime-600 mt-1" />
                <span>
                  <span className="font-semibold text-lime-700">Fertilizing:</span>{" "}
                  {plant.fertilizing}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantCare;

