"use client";

import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

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
          <button onClick={onClose} className="text-gray-500 text-2xl focus:outline-none">
            ✕
          </button>
        </div>

        {/* Seçili Filtreler */}
        <div className="px-4 py-3 border-b border-gray-300">
          <h3 className="text-gray-500 text-sm mb-2 font-semibold">Seçili Filtreler</h3>
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
    <div className="hidden md:block bg-white w-64 border-r border-gray-300 h-screen px-4 py-4 ml-32 custom-scrollbar overflow-y-auto">
      {/* Masaüstü içeriği */}
      <AccordionItem title="İlgili Kategoriler">
        <ul className="space-y-1 text-xs">
          {visibleCategories.map((category, index) => (
            <li
              key={index}
              className={`${
                !showMore && index >= 5 ? "text-gray-400" : "text-gray-600"
              }`}
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
          <input
            type="text"
            placeholder="Marka ara"
            className="w-full py-2 px-4 border border-gray-300 rounded"
          />
          <ul className="space-y-1 mt-2">
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>IKEA</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Kilim Mobilya</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Bofigo</span>
              </label>
            </li>
            <li>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Rani Mobilya</span>
              </label>
            </li>
          </ul>
        </div>
      </AccordionItem>

      {/* Diğer Alanlar */}
      <AccordionItem title="Avantajlı Ürünler">
        <ul className="space-y-1">
          <li>Fenomenlerin Seçtikleri</li>
          <li>Kampanyalı Ürünler</li>
          <li>Hediye Paketi</li>
          <li>Birlikte Al Kazan</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Genişlik">
        <p>Genişlik seçenekleri buraya gelecek.</p>
      </AccordionItem>

      <AccordionItem title="Fiyat">
        <p>Fiyat seçenekleri buraya gelecek.</p>
      </AccordionItem>

      <AccordionItem title="Renk">
        <p>Renk seçenekleri buraya gelecek.</p>
      </AccordionItem>

      <AccordionItem title="Derinlik">
        <p>Derinlik seçenekleri buraya gelecek.</p>
      </AccordionItem>

      <AccordionItem title="Materyal">
        <p>Materyal seçenekleri buraya gelecek.</p>
      </AccordionItem>

      <AccordionItem title="Fiyat Geçmişi">
        <p>Fiyat Geçmişi bilgisi buraya gelecek.</p>
      </AccordionItem>
    </div>
  );
}
