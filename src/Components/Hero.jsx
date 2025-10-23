import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const Hero = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("/plant.json")
      .then((result) => result.json())
      .then((data) => {
        const arr = Array.isArray(data) ? data : [data];
        setPlants(arr.filter((p) => p?.image));
      })
      .catch(() => setPlants([]));
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {
        plants.map((plant) => (
          <SwiperSlide key={plant.plantId}>
            <div className="relative w-full h-full">
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute top-6 left-6 md:top-10 md:left-10">
                <h1 className="text-xl md:text-3xl font-extrabold text-white/70 bg-black/40 backdrop-blur-md px-6 py-3 rounded-xl inline-block">
                  {plant.plantName }
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
