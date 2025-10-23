import React, { useEffect, useState } from "react";
import PlantCard from "../Components/PlantCard";
import Loading from "../Components/Loading";


const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />; 
  }

  return (
    <section className="mx-auto w-11/12 p-4">
      <h2 className="text-2xl font-semibold mb-4 text-emerald-800 text-center">
        Our Plant Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.map((p) => (
          <PlantCard key={p.plantId} p={p} />
        ))}
      </div>
    </section>
  );
};

export default Plants;
