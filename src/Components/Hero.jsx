import React, { useEffect, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [data];
        setPlants(arr.filter((p) => p?.image));
      })
      .catch(() => setPlants([]));
  }, []);

  const hasSlides = plants.length > 0;
  const hasMultiple = plants.length > 1;

  return (
    <section className="relative w-full md:h-[80vh]">
      {!hasSlides ? (
      
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-green-400" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white/90 text-2xl md:text-4xl font-extrabold drop-shadow">
              Welcome to Green Nest
            </h1>
          </div>
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect={hasMultiple ? "fade" : undefined}
          loop={hasMultiple}
          autoplay={hasMultiple ? { delay: 2500, disableOnInteraction: false } : false}
          className="w-full h-full"
        >
          {plants.map((plant) => (
            <SwiperSlide key={plant.plantId}>
              <div className="relative w-full h-full">
                <img
                  src={plant.image}
                  alt={plant.plantName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = "/images/placeholder-hero.jpg")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute top-6 left-6 md:top-10 md:left-10">
                  <h1 className="text-xl md:text-3xl font-extrabold text-white/80 bg-black/40 backdrop-blur-md px-6 py-3 rounded-xl inline-block">
                    {plant.plantName}
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default Hero;

