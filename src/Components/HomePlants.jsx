import React, { useEffect, useState } from "react";

import PlantCard from "./PlantCard";
import { Link } from "react-router";

const HomePlants = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plant.json")
      .then((result) => result.json())
      .then((data) => setPlants(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="mx-auto w-11/12  p-4">
      <h2 className="text-2xl font-semibold mb-4 text-emerald-800">
        Our Plant Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {plants.slice(0, 6).map((p) => (
          <PlantCard key={p.plantId} p={p}></PlantCard>
        ))}
      </div>
      <div className="text-right mt-3 mr-3">
        <Link
          to="/plants"
          className="inline-block text-green-700 font-semibold hover:text-green-900"
        >
          See All
        </Link>
      </div>
    </section>
  );
};

export default HomePlants;
