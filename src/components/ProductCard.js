"use client";

import React, { useState } from "react";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false); // Kalbin beğenilip beğenilmediğini kontrol eder

  const toggleLike = () => {
    setLiked((prev) => !prev); // Kalbin durumunu değiştir
  };
//module.css styless
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {/* Üst Kısım */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          Hızlı Teslimat
        </span>
        <button onClick={toggleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={liked ? "red" : "white"} // Kalbin rengi
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 hover:text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      {/* Görsel Alanı */}
      <div className="bg-gray-200 w-full h-36 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Avantajlı Ürün Etiketi */}
      <div className="mt-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-center">
        Avantajlı Ürün
      </div>

      {/* Ürün Bilgileri */}
      <div className="mt-4">
        <h2 className="text-sm font-bold truncate">{product.title}</h2>
        <p className="text-xs text-gray-500 truncate">{product.description}</p>
        <p className="text-xs text-orange-500 font-medium">
          Son 3 günde çok satan ürün!
        </p>
      </div>

      {/* Ürün Puanı ve Fiyat */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-yellow-500 text-xs">⭐ {product.rating.rate}</span>
          <span className="text-gray-500 text-xs ml-1">({product.rating.count})</span>
        </div>
        <span className="text-sm font-bold text-orange-600">${product.price}</span>
      </div>

      {/* Etiketler */}
      <div className="mt-2 flex space-x-2">
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          Videolu Ürün
        </span>
      </div>
    </div>
  );
}
