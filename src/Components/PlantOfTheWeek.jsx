import { useEffect, useState } from "react";
import { FaLeaf, FaStar, FaUserAlt } from "react-icons/fa";
import Loading from "./Loading";

function PlantOfTheWeek() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plant.json")
      .then((result) => result.json())
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  function getPlantOfTheWeek() {
    const today = new Date();
    const weekNumber = Math.ceil(today.getDate() / 7);
    const index = weekNumber % plants.length;
    return plants[index];
  }

  const plant = getPlantOfTheWeek();

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-11/12 mx-auto border rounded-2xl shadow-md p-6  mt-8  gap-6  border-emerald-200 bg-emerald-50/50">
      <h2 className="text-2xl font-bold mb-5 text-center text-green-800">
        Plant of the Week
      </h2>
      <div className="mx-auto border-t border-green-400  my-6"></div>
      <div className="flex justify-between flex-col md:flex-row items-center md:items-start">
        <div className=" ">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-64 object-cover rounded-lg"
            onError={(e) => (e.target.src = "/images/placeholder.jpg")}
          />
          <h3 className="text-2xl font-semibold mt-4 flex items-center justify-center gap-2  text-green-800  ">
            <FaLeaf />
            {plant.plantName}
          </h3>
        </div>

        <div className="py-5 ">
          <p className="text-green-600 ">{plant.description}</p>
          <div className="mt-5 space-y-5  ">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaStar className="text-yellow-600" />
              <span className="text-lg font-semibold text-green-800">
                Rating:
              </span>
              <span className="text-green-600">{plant.rating}</span>
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2 ">
              <FaUserAlt className="text-green-900" />
              <span className="text-lg font-semibold text-green-800">
                Provider:
              </span>{" "}
              <span className="text-green-600">{plant.providerName}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantOfTheWeek;
