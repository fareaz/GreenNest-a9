import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";


const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", email: "" });

  useEffect(() => {
    setLoading(true);
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find(
          (item) => String(item.plantId) === String(id)
        );
        setPlant(selected || null);
      })
      .catch(() => setPlant(null))
      .finally(() => setLoading(false));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill out all fields.");
      return;
    }
    toast.success("Consultation booked successfully!");
    setForm({ name: "", email: "" });
  };

  if (loading) return <Loading />;

  if (!plant)
    return (
      <section className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow mt-6">
        <p className="text-red-600 font-medium">Plant not found.</p>
      </section>
    );

  const {
    image,
    plantName,
    description,
    price,
    rating,
    availableStock,
    category,
    careLevel,
    providerName,
  } = plant;

  return (
    <>
     
      <section className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow mt-6">
        
        <div className=" w-full overflow-hidden rounded-xl">
          <img
            src={image}
            alt={plantName}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-emerald-900">{plantName}</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">{description}</p>

            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-emerald-50">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Price
                </p>
                <p className="text-lg font-semibold text-emerald-900">
                  ${price}
                </p>
              </div>
              <div className="p-4 rounded-lg bg-emerald-50">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Rating 
                </p>
                <p className="text-lg font-semibold text-emerald-900">
                  {rating} <FaStar></FaStar>
                </p>
              </div>
              <div className="p-4 rounded-lg bg-emerald-50">
                <p className="text-xs uppercase tracking-wide text-emerald-700">
                  Stock
                </p>
                <p
                  className={`text-lg font-semibold ${
                    availableStock > 0 ? "text-emerald-900" : "text-red-600"
                  }`}
                >
                  {availableStock > 0
                    ? `${availableStock} available`
                    : "Out of stock"}
                </p>
              </div>
              {category && (
                <div className="p-4 rounded-lg bg-emerald-50">
                  <p className="text-xs uppercase tracking-wide text-emerald-700">
                    Category
                  </p>
                  <p className="text-lg font-semibold text-emerald-900">
                    {category}
                  </p>
                </div>
              )}
              {careLevel && (
                <div className="p-4 rounded-lg bg-emerald-50">
                  <p className="text-xs uppercase tracking-wide text-emerald-700">
                    Care Level
                  </p>
                  <p className="text-lg font-semibold text-emerald-900">
                    {careLevel}
                  </p>
                </div>
              )}
              {providerName && (
                <div className="p-4 rounded-lg bg-emerald-50">
                  <p className="text-xs uppercase tracking-wide text-emerald-700">
                    Provider
                  </p>
                  <p className="text-lg font-semibold text-emerald-900">
                    {providerName}
                  </p>
                </div>
              )}
            </div>
          </div>

        
          <aside className="md:col-span-1">
            <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50">
              <h3 className="text-xl font-semibold text-emerald-900">
                Book Consultation
              </h3>
              <p className="text-sm text-emerald-800 mt-1">
                Get plant care tips tailored to {plantName}.
              </p>

              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-emerald-900"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-emerald-200 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg shadow-sm transition"
                >
                  Book Now
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default PlantDetails;
