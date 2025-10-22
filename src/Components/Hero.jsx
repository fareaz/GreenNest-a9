import React, { useEffect, useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard, A11y, EffectFade } from "swiper/modules";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((e) => console.error("Failed to load plants.json", e))
      .finally(() => setLoading(false));
  }, []);
  const slides = useMemo(
    () =>
      plants.map((p) => ({
        image: p.image,
        title: p.plantName,
        slogan: `${p.category} • ${p.careLevel}`,
        note: `${p.description} Price: $${p.price} • ⭐ ${p.rating}`,
        icon: <Leaf className="w-5 h-5" aria-hidden />,
      })),
    [plants]
  );

  return (
    <section className="relative isolate w-full select-none" aria-label="Plant care slider  ">
     
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-20 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full bg-lime-200/40 blur-3xl" />
      </div>

     <div className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 mt-5">

        {loading ? (
       
          <div className="flex h-full w-full items-center justify-center text-emerald-800">
            Loading plants…
          </div>
        ) : slides.length === 0 ? (
          <div className="flex h-full w-full items-center justify-center text-emerald-800">
            No plants found in plants.json
          </div>
        ) : (
          <>
            <Swiper
              modules={[Navigation, Pagination, Autoplay, Keyboard, A11y, EffectFade]}
              autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              pagination={{ clickable: true }}
              navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
              keyboard={{ enabled: true }}
              a11y={{ enabled: true }}
              loop
              effect="fade"          // চাইলে "slide" দিতে পারেন
              speed={650}
              fadeEffect={{ crossFade: true }}
              className="h-full w-full"
            >
              {slides.map((s, i) => (
                <SwiperSlide key={i}>
                  <Slide {...s} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
              <button
                className="btn-prev pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="btn-next pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button> */}
            {/* </div> */}
          </>
        )}
      </div>
    </section>
  );
};

function Slide({ image, title, icon }) {
  return (
    <div className="relative h-full w-full">
      <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

      {/* Content card */}
      <div className="absolute left-4 right-4 top-4 md:left-8 md:top-8 md:right-auto">
        <div className="max-w-md rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex items-center gap-2 text-emerald-700">
            {icon}
            <span className="text-xs font-semibold uppercase tracking-wide">Care note</span>
          </div>
          <h3 className="mt-1 text-xl font-semibold text-emerald-950 md:text-2xl">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;

