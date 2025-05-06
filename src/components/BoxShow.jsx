import React from "react";
import { Link } from "react-router";

const BoxShow = ({ box }) => {
  return (
    <div className="rounded-xl shadow-md border p-4 bg-white max-w-md mx-auto">
      <img
        src={box.thumbnail}
        alt={box.name}
        className="rounded-md w-full mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{box.name}</h2>
      <p className="text-sm text-gray-500 mb-1">
        Tech Category: {box.tech_category}
      </p>
      <p className="text-lg font-semibold">${box.price}</p>
      <p className="text-sm text-gray-600 mb-2">Frequency: {box.frequency}</p>
      <p className="text-sm mb-3">{box.description.slice(0, 100)}...</p>
      <Link
        to={`/box/${box.id}`}
        className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
        View More
      </Link>
    </div>
  );
};

export default BoxShow;
