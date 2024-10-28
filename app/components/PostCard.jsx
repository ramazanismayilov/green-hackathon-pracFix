import React from "react";

function PostCard({ title, description, image, date, id }) {
  return (
    <div className="bg-white w-max rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-transparent border-2 hover:border-green-500 overflow-hidden">
      <img
        className="shadow-lg rounded-t-2xl w-full h-48 object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <p className="text-gray-500 text-sm">
          {new Date(date).toLocaleDateString()}
        </p>
        <h2 className="font-bold text-xl mt-1">
          {title.slice(0, 20)}
          {title > 20 ? "..." : ""}
        </h2>
        <p className="text-gray-600 text-[15px] mt-2 mb-4">
          {description.slice(0, 80)}...
        </p>
        <a
          href={`/posts/${id}`}
          className="text-green-500 font-semibold transition-colors duration-300 hover:text-green-700"
        >
          Ətraflı bax
        </a>
      </div>
    </div>
  );
}

export default PostCard;
