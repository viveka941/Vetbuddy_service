import React from "react";
import { ChevronLeft, ChevronRight, RefreshCcw } from "lucide-react";

const pets = [
  {
    name: "Rocky",
    breed: "German Shepherd",
    image: "/images/rocky.webp",
  },
  {
    name: "Sadie",
    breed: "Shih Tzu",
    image: "/images/sadie.webp",
  },
  {
    name: "Duke",
    breed: "Boxer",
    image: "/images/duke.webp",
  },
];

const FeaturedPets = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-white">
      <p className="text-sm tracking-widest text-gray-600 uppercase">
        Our Charming Residents
      </p>
      <h2 className="text-4xl font-bold mt-2 mb-3">
        <span className="text-lime-500">Featured Pets</span> Looking for a{" "}
        <span className="text-gray-800">Home</span>
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>

      {/* Buttons */}
      <div className="mt-6 mb-10 flex justify-center gap-4">
        <button className="px-6 py-2 bg-lime-400 hover:bg-lime-500 text-white rounded-full font-semibold transition">
          Show Dogs
        </button>
        <button className="px-6 py-2 border border-lime-400 hover:bg-lime-100 rounded-full text-lime-600 font-semibold transition">
          Show Cats
        </button>
      </div>

      {/* Pet Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-[2rem] overflow-hidden w-64"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-80 object-cover"
            />
            {/* Corner icon */}
            <div className="absolute top-2 right-2 bg-lime-400 rounded-full p-1">
              <RefreshCcw className="w-4 h-4 text-white" />
            </div>
            <div className="py-3 bg-white">
              <h3 className="font-bold text-lg">{pet.name}</h3>
              <p className="text-gray-500 text-xs tracking-wide uppercase">
                {pet.breed}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-10 flex justify-center items-center gap-4">
        <button className="p-2 border border-lime-400 rounded-full hover:bg-lime-100">
          <ChevronLeft className="w-4 h-4 text-lime-600" />
        </button>
        <button className="p-2 border border-lime-400 rounded-full hover:bg-lime-100">
          <ChevronRight className="w-4 h-4 text-lime-600" />
        </button>
      </div>
    </section>
  );
};

export default FeaturedPets;
