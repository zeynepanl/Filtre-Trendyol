"use client";

import React from "react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";

const SearchResultHeader = () => {
  return (
    <div className="p-3 bg-white border-b border-gray-300">
      {/* Üst Bilgi */}
      <div className="flex justify-between items-center">
        <div className="text-gray-600 text-lg font-medium">
          <span className="text-black font-medium">"Mobilya"</span> araması için{" "}
          <span className="text-black font-medium">100.000+</span> sonuç listeleniyor
        </div>
        <button className="flex items-center justify-between space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-orange-500 transition mr-36">
          <span className="text-gray-800 text-sm font-medium pr-32">Önerilen</span>
          <ChevronUpDownIcon className="w-5 h-5 text-orange-500" />
        </button>
      </div>

      {/* Filtre Etiketleri */}
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="flex items-center px-4 py-2 bg-yellow-50 text-black text-sm font-medium rounded-full border border-transparent hover:border-yellow-400 transition">
          ⭐ Yüksek Puanlı Ürünler
        </span>
        <span className="flex items-center px-4 py-2 bg-blue-50 text-black text-sm font-medium rounded-full border border-transparent hover:border-blue-400 transition">
          🏬 Yüksek Puanlı Satıcılar
        </span>
        <span className="flex items-center px-4 py-2 bg-green-50 text-black text-sm font-medium rounded-full border border-transparent hover:border-green-400 transition">
          🚚 Hızlı Teslimat
        </span>
        <span className="flex items-center px-4 py-2 bg-pink-50 text-black text-sm font-medium rounded-full border border-transparent hover:border-pink-400 transition">
          🎫 Kuponlu Ürünler
        </span>
        <span className="flex items-center px-4 py-2 bg-orange-50 text-black text-sm font-medium rounded-full border border-transparent hover:border-orange-400 transition">
          🛒 Çok Al Az Öde
        </span>
      </div>
    </div>
  );
};

export default SearchResultHeader;
