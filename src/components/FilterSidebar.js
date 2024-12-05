"use client";

import React, { useState } from "react";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  CameraIcon,
} from "@heroicons/react/20/solid";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        className="w-full flex justify-between items-center py-2 px-4 text-gray-800 font-medium hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDownIcon
          className={`w-5 h-5 text-black transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-sm text-gray-600 max-h-48 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      )}
    </div>
  );
};

export default function FilterSidebar({ isMobile = false, onClose }) {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    "Mutfak & Banyo Mobilyası",
    "Antre & Hol",
    "Salon & Oturma Odası",
    "Çalışma Odası",
    "Bahçe Balkon Mobilyası",
    "Yatak Odası",
    "Masa",
    "Dolaplar",
    "Ofis Mobilyaları",
  ];

  const visibleCategories = showMore ? categories : categories.slice(0, 5);

  if (isMobile) {
    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="flex items-center justify-center relative px-4 py-3 border-b border-gray-300">

          <button
            onClick={onClose}
            className="absolute left-4 text-gray-500 text-2xl focus:outline-none"
          >
            ✕
          </button>

          {/* Başlık */}
          <h2 className="text-lg font-bold text-gray-800">FİLTRELE</h2>
        </div>

        <div className="bg-gray-50 h-4"></div>

        {/* Seçili Filtreler */}
        <div className="px-4 py-3 border-b border-gray-300">
          <h3 className="text-gray-500 text-sm mb-2 font-semibold">
            Seçili Filtreler
          </h3>
          <button className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-700 font-medium">
            Mobilya
          </button>
        </div>

        <div className="bg-gray-50 h-4"></div>

        {/* Filtre seçenekleri */}
        <div className="divide-y divide-gray-300">
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border border-gray-300">
            <span>Avantajlı Ürünler</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Kategori</span>
            <span className="text-orange-500 font-bold mr-72">(1)</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Marka</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Genişlik</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Derinlik</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Fiyat</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-4 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Renk</span>
            <ChevronRightIcon className="w-8 h-8 text-orange-500" />
          </button>
        </div>

        {/* Anahtar/Switch Butonları */}
        <div className="divide-y divide-gray-300">
          <div className="flex justify-between items-center px-4 py-4 border-t border-gray-300">
            <span className="text-gray-700 text-sm font-medium">
              Hızlı Teslimat
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 peer-checked:bg-orange-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
          <div className="flex justify-between items-center px-4 py-4  ">
            <span className="text-gray-700 text-sm font-medium">
              Fenomenlerin Seçtikleri
            </span>
            <label className="relative inline-flex items-center cursor-pointer ">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500 peer-checked:bg-orange-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
            </label>
          </div>
        </div>

        {/* Alt kısımdaki buton */}
        <div className="fixed bottom-0 left-0 w-full bg-white px-4 py-3 border-t border-gray-300">
          <button className="w-full bg-orange-500 text-white text-sm font-bold py-3 rounded-md hover:bg-orange-600">
            Tüm Sonuçları Listele (100.000+)
          </button>
        </div>
      </div>
    );
  }

  // Masaüstü görünüm korunur
  return (
    <div className="filter-sidebar ">
      <div className="hidden md:block bg-white w-64 border-r border-gray-300 h-screen px-1 py-2 ml-32 overflow-y-auto overflow-x-hidden ">
        {/* Masaüstü içeriği */}
        <AccordionItem title="İlgili Kategoriler">
          <ul className="space-y-1 text-xs  ">
            {visibleCategories.map((category, index) => (
              <li
                key={index}
                className={`${
                  !showMore && index >= 5 ? "text-gray-400" : "text-gray-600"
                }hover:text-gray-50 cursor-pointer `}
              >
                {category}
              </li>
            ))}
          </ul>
          {!showMore ? (
            <button
              className="mt-2 text-orange-500 text-xs font-bold hover:underline"
              onClick={() => setShowMore(true)}
            >
              DAHA FAZLA GÖSTER
            </button>
          ) : (
            <button
              className="mt-2 text-orange-500 text-xs font-bold hover:underline"
              onClick={() => setShowMore(false)}
            >
              DAHA AZ GÖSTER
            </button>
          )}
        </AccordionItem>

        <AccordionItem title="Marka">
          <div>
            {/* Arama Çubuğu */}
            <input
              type="text"
              placeholder="Marka ara"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-orange-500 mb-4"
            />

            {/* Marka Listesi */}
            <ul className="space-y-1 max-h-48 text xs">
              {[
                "Rabi",
                "Lavinia Puf",
                "Moonlife",
                "Realhomes",
                "Canisa",
                "Mobilya Dükkanım",
                "Dockers",
                "Kenzlife",
                "Canisa Concept",
              ].map((brand, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2 ">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded "
                    />
                    <span className="text-xs text-gray-500 font-sans">
                      {brand}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Avantajlı Ürünler">
          <ul className="space-y-1 max-h-48 text xs">
            {[
              "Süper Avantajlı Urün",
              "Çok Avantajlı Urün",
              "Avantajlı Urün",
            ].map((brand, index) => (
              <li key={index}>
                <label className="flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded "
                  />
                  <span className="text-xs text-gray-500 font-sans">
                    {brand}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </AccordionItem>

        <AccordionItem title="Fiyat">
          <div className="space-y-4">
            {/* En Az ve En Çok Seçenekleri */}
            <div className="flex items-center justify-between space-x-2">
              <div className="relative flex items-center space-x-1 flex-1">
                <input
                  type="text"
                  className="w-full py-2 px-2 rounded-lg text-xs focus:outline-none border"
                />
                <label className="absolute left-2 text-gray-500 text-xs pointer-events-none">
                  En Az
                </label>
              </div>

              <div className="relative flex items-center space-x-1 flex-1">
                <input
                  type="text"
                  className="w-full py-2 px-3 rounded-lg text-xs focus:outline-none border"
                />
                <label className="absolute left-3 text-gray-500 text-xs pointer-events-none">
                  En Çok
                </label>
              </div>
            </div>

            {/* Fiyat Aralığı Seçenekleri */}
            <div className="mt-4">
              <ul className="space-y-2 text-xs">
                {[
                  "0 TL - 250 TL",
                  "250 TL - 300 TL",
                  "300 TL - 350 TL",
                  "350 TL - 700 TL",
                  "700 TL - 10000 TL",
                  "10000 TL - 80000 TL",
                ].map((range, index) => (
                  <li key={index} className="flex items-center space-x-1">
                    <input
                      type="radio"
                      name="priceRange"
                      value={range}
                      className="w-3 h-3 text-orange-500 border-gray-300 rounded"
                    />
                    <span className="text-gray-500">{range}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionItem>

        <AccordionItem title="Genişlik">
          <div>
           
            <input
              type="text"
              placeholder="Genişlik ara"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-orange-500 mb-4"
            />

           
            <ul className="space-y-1 max-h-48 text xs">
              {[
                "100 cm",
                "101 cm",
                "23 cm",
                "35 cm",
                "40 cm",
                "27 cm",
                "9 cm",
                "6 cm",
              ].map((brand, index) => (
                <li key={index}>
                  <label className="flex items-center space-x-2 ">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded "
                    />
                    <span className="text-xs text-gray-500 font-sans">
                      {brand}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>

        <AccordionItem title="Renk">
          <div className="space-y-4">
            <ul className="grid grid-cols-3 gap-2 text-xs">
              
              {[
                { color: "bg-pink-500", label: "Pembe" },
                { color: "bg-gray-500", label: "Gri" },
                { color: "bg-yellow-500", label: "Sarı" },
                { color: "bg-black", label: "Siyah" },
                {
                  color:
                    "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
                  label: "Çok Renkli",
                },
              ].map((colorItem, index) => (
                <li key={index} className="flex flex-col items-center">
                  <div
                    className={`${colorItem.color} w-6 h-6 rounded-full cursor-pointer`}
                  ></div>
                  <span className="mt-1 text-gray-500">{colorItem.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </AccordionItem>
        <AccordionItem
          title={
            <div className="flex items-center space-x-2 relative">
              <span className="py-2 text-sm font-semi whitespace-nowrap">
                Satıcı Tipi
              </span>
              {/* "Satıcı Tipi Nedir?" metninin etrafında ayrı bir grup oluşturuyoruz */}
              <span className="ml-2 text-xs text-gray-500 whitespace-nowrap hover:text-orange-500 underline relative group">
                Satıcı Tipi Nedir?
                {/* Tooltip */}
                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-white text-black text-xs rounded py-2 px-3 shadow-lg w-64 z-50">
                  <p className="text-blue-600 font-sans">
                    Onaylanmış Satıcı
                  </p>
                  <p>
                    Markaların resmi satıcılarına “Onaylanmış Satıcı” rozeti
                    verilir.
                  </p>
                  <p className="text-orange-500 font-semibold mt-2">
                    Başarılı Satıcı
                  </p>
                  <p>
                    Kaliteli ve güvenilir hizmet veren satıcılara “Başarılı
                    Satıcı” rozeti verilir.
                  </p>
                  <p className="text-red-500 font-semibold mt-2">
                    Yetkili Satıcı
                  </p>
                  <p>
                    Onaylanmış markaların ürünlerine “Yetkili Satıcı” rozeti
                    verilir.
                  </p>
                </div>
              </span>
            </div>
          }
        >
          <div className="mt-1">
            {/* Checkbox ve metin */}
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded"
              />
              <span className="text-xs text-gray-600">Başarılı Satıcı</span>
            </label>
          </div>
        </AccordionItem>


        <div className="border-b border-gray-300 rounded-md font-semi">
          {/* Fotoğraflı Yorumlar */}
          <div className="py-3 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-800">Fotoğraflı Yorumlar</span>
            </label>
          </div>

          {/* Yeni Ürünler */}
          <div className="py-3 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-800">Yeni Ürünler</span>
            </label>
          </div>

          {/* Videolu Ürünler */}
          <div className="py-3 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-800">Videolu Ürünler</span>
            </label>
          </div>

          {/* Kurumsal Faturaya Uygun */}
          <div className="py-3 px-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-800">
                Kurumsal Faturaya Uygun
              </span>
            </label>
          </div>

          {/* Ek Hizmetler */}
          <div className="py-3 px-4 hover:bg-gray-100 cursor-pointer">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 text-orange-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-800">Ek Hizmetler</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
