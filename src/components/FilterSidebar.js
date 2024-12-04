"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon ,CameraIcon } from "@heroicons/react/20/solid";

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
        {/* Başlık */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
          <h2 className="text-lg font-bold text-gray-800">FİLTRELE</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Seçili Filtreler */}
        <div className="px-4 py-3 border-b border-gray-300">
          <h3 className="text-gray-500 text-sm mb-2 font-semibold">
            Seçili Filtreler
          </h3>
          <button className="px-3 py-1 text-sm bg-gray-200 rounded-full text-gray-700 font-medium">
            Mobilya
          </button>
        </div>

        {/* Filtre seçenekleri */}
        <div className="divide-y divide-gray-300">
          <button className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Avantajlı Ürünler</span>
            <ChevronRightIcon className="w-5 h-5 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Kategori</span>
            <span className="text-orange-500 font-bold ml-1 ">(1)</span>
            <ChevronRightIcon className="w-5 h-5 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Marka</span>
            <ChevronRightIcon className="w-5 h-5 text-orange-500" />
          </button>
          <button className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 border-b border-gray-300">
            <span>Genişlik</span>
            <ChevronRightIcon className="w-5 h-5 text-orange-500" />
          </button>
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
    <div className="hidden md:block bg-white w-64 border-r border-gray-300 h-screen px-1 py-2 ml-32 overflow-y-auto">
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
      {/* Diğer accordionlar */}
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

      {/* Diğer Alanlar */}
      <AccordionItem title="Avantajlı Ürünler">
        <ul className="space-y-1 max-h-48 text xs">
          {["Süper Avantajlı Urün", "Çok Avantajlı Urün", "Avantajlı Urün"].map(
            (brand, index) => (
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
            )
          )}
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
          {/* Arama Çubuğu */}
          <input
            type="text"
            placeholder="Genişlik ara"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-orange-500 mb-4"
          />

          {/* Marka Listesi */}
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
            {/* Color Options */}
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
          <div className="flex items-center space-x-2 group">
            <span className="text-sm whitespace-nowrap">Satıcı Tipi</span>
            <span className="ml-2 text-xs text-gray-500 whitespace-nowrap hover:text-orange-500 underline group-hover:text-orange-500">
              Satıcı Tipi Nedir?
            </span>
            {/* Tooltip */}
            <div className="absolute left-80 top-full mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-sm text-gray-600 z-50 hidden group-hover:block">
              <p className="text-blue-600 font-semibold">Onaylanmış Satıcı</p>
              <p>
                Türkiye’de veya uluslararası olarak yüksek bilinirliğe sahip
                markaların resmi satıcılarına “Onaylanmış Satıcı” rozeti
                verilir.
              </p>
              <p className="text-orange-500 font-semibold mt-2">
                Başarılı Satıcı
              </p>
              <p>
                Trendyol’daki son 6 ay performansıyla yüksek müşteri
                memnuniyetini sağlayan, kaliteli ve güvenilir hizmet veren
                satıcılara “Başarılı Satıcı” rozeti verilir.
              </p>
              <p className="text-red-500 font-semibold mt-2">Yetkili Satıcı</p>
              <p>
                Onaylanmış markaların resmi satıcılarının satışı sunduğu, ilgili
                markanın ürünlerine “Yetkili Satıcı” rozeti verilir.
              </p>
            </div>

            
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


            <AccordionItem
  title={
    <div className="flex items-center space-x-0">
      <input
        type="checkbox"
        className="w-5 h-5 text-orange-500 border-gray-300 rounded"
      />
      <span className="w-full py-2 px-3 text-sm text-gray-600 whitespace-nowrap">Fotoğraflı Yorumlar</span>
      <CameraIcon className="ml-2 w-5 h-5 text-gray-600" />
    </div>
  }
>
</AccordionItem>

<AccordionItem
  title={
    <div className="flex items-center space-x-0">
      <input
        type="checkbox"
        className="w-5 h-5 text-orange-500 border-gray-300 rounded"
      />
      <span className="w-full py-2 px-3 text-sm text-gray-600 whitespace-nowrap">Fenomenlein Seçtikleri</span>
    </div>
  }
>
</AccordionItem>






    </div>
  );
}
