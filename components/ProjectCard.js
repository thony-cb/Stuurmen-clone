import React from "react";

export default function ProjectCard({ image, brand, title, category }) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-full h-full bg-cover bg-no-repeat bg-center"
    >
      <div className="backdrop-brightness-50 overflow-hidden h-full flex justify-end flex-col py-6 px-4 gap-12 w-full text-white ">
        <p className="text-sm opacity-50 font-light">{brand}</p>
        <h4 className="text-5xl font-light max-w-sm">{title}</h4>
        <p className="text-lg font-normal">{category}</p>
      </div>
    </div>
  );
}
