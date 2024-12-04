"use client";

import React, { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronUpDownIcon,
  FunnelIcon,
} from "@heroicons/react/20/solid";
import FilterSidebar from "./FilterSidebar"; // Filtre Modalı için
import FilterContent from "./FilterTabs"; // Filtre İçeriği için

const SearchResultHeader = () => {
  const [showFilterModal, setShowFilterModal] = useState(false); // Modal kontrolü

  const [showOptions, setShowOptions] = useState(false); // Önerilen açılır kutusu kontrolü
  const options = [
    "En düşük fiyat",
    "En yüksek fiyat",
    "En çok satan",
    "En favoriler",
    "En yeniler",
    "En çok değerlendirilen",
  ];

  return (
    <div className="p-3 bg-white border-b border-gray-300">
      {/* Mobil Görünüm */}
      <div className="flex items-center justify-between md:hidden">
        <button className="text-black text-lg mr-2 ">
          {/* Geri Butonu */}
          <ChevronLeftIcon className="w-5 h-5" />
        </button>
        <div className="flex-grow text-center">
          <h1 className="text-black text-lg font-medium ">Mobilya</h1>
          <p className="text-gray-400 text-sm">100.000+ Ürün Listeleniyor</p>
        </div>
      </div>

      {/* Mobil Butonlar */}
      <div className="flex items-center justify-between md:hidden mt-2">
        <button className="w-1/2 px-4 py-2 border border-gray-300 rounded-l-lg">
          <span className="text-gray-800 text-sm font-medium">Önerilen</span>
        </button>
        <button
          onClick={() => setShowFilterModal(true)} // Modal açma işlevi
          className="w-1/2 px-4 py-2 border border-gray-300 rounded-r-lg"
        >
          <span className="text-gray-800 text-sm font-medium">Filtrele</span>
        </button>
      </div>

      {/* Mobil Filtre İçeriği */}
      <FilterContent />

      {/* Filtre Modalı */}
      {showFilterModal && (
        <FilterSidebar
          isMobile={true}
          onClose={() => setShowFilterModal(false)} // Modal kapatma işlevi
        />
      )}

      {/* Masaüstü Görünüm */}
      <div className="hidden md:block">
        {/* Üst Bilgi */}
        <div className="flex justify-between items-center">
          <div className="text-gray-600 text-lg font-medium ml-4">
            <span className="text-black font-medium">"Mobilya"</span> araması
            için <span className="text-black font-medium">100.000+</span> sonuç
            listeleniyor
          </div>
          {/* Önerilen Butonu ve Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowOptions((prev) => !prev)} // Dropdown açılıp kapanma kontrolü
              className="flex items-center justify-between space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:border-orange-500 transition mr-36"
            >
              <span className="text-gray-800 text-sm font-medium pr-32">
                Önerilen
              </span>
              <ChevronUpDownIcon className="w-5 h-5 text-orange-500" />
            </button>

            {/* Dropdown Menü */}
            {showOptions && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <ul className="py-2 text-sm text-gray-700">
                  {options.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        console.log(option); // Seçilen seçenek için işlem yapılır
                        setShowOptions(false); // Dropdown kapatılır
                      }}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-orange-500 hover:text-base cursor-pointer transition duration-200"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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
    </div>
  );
};

export default SearchResultHeader;
