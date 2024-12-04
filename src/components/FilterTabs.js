"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const FilterTabs = () => {
  const [openTab, setOpenTab] = useState(null); // Açık olan sekme
  const [modalStyle, setModalStyle] = useState({}); // Modalın dinamik stili
  const tabsContainerRef = useRef(null); // Tabların kapsayıcısı için referans
  const modalRef = useRef(null); // Modal alanını takip eden referans

  // Dış tıklamaları algıla
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenTab(null); // Menü dışına tıklanırsa kapat
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabClick = (tab, index) => {
    if (openTab === tab) {
      setOpenTab(null); // Sekmeyi kapat
    } else {
      setOpenTab(tab); // Sekmeyi aç

      // Tıklanan sekmenin pozisyonunu al
      if (tabsContainerRef.current) {
        const tabs = tabsContainerRef.current.children;
        const selectedTab = tabs[index];
        const rect = selectedTab.getBoundingClientRect();

        // Modalın stilini dinamik olarak ayarla
        setModalStyle({
          position: "absolute", // Kapsayıcıya göre pozisyonlandırma
          top: rect.bottom - rect.top + 40, // Tabın hemen altından başla
          left: 0, // Sol kenara hizala
          width: "100%", // Kapsayıcı genişliğini kapla
          zIndex: 50, // Üstte görünmesini sağla
        });
      }
    }
  };

  return (
    <div className="relative">
      {/* Tablar */}
      <div
        ref={tabsContainerRef} // Tabların kapsayıcısı için referans
        className="md:hidden flex space-x-2 overflow-x-auto bg-white p-3"
      >
        {["Kategori", "Marka", "Genişlik", "Derinlik"].map((tab, index) => (
          <div key={tab} className="relative">
            <button
              onClick={() => handleTabClick(tab, index)}
              className={`flex items-center px-4 py-2 border rounded-full text-sm font-medium ${
                openTab === tab
                  ? "bg-orange-100 border-orange-500"
                  : "bg-white border-gray-300"
              }`}
            >
              {tab}
              <ChevronDownIcon className="w-4 h-4 text-orange-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openTab && (
        <div
          ref={modalRef} // Modal alanını takip eden referans
          style={modalStyle} // Dinamik pozisyon ve genişlik
          className="bg-white  shadow-lg"
        >
          {openTab === "Kategori" && (
            <div className="p-4">
              <input
                type="text"
                placeholder="Kategori Ara"
                className="w-full mb-4 px-4 py-2 border rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <label>
                  <input type="checkbox" className="mr-2" />
                  Mobilya
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Mutfak & Banyo Mobilyası
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Antre & Hol
                </label>
                <label>
                  <input type="checkbox" className="mr-2" />
                  Salon & Oturma Odası
                </label>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-gray-500">Temizle</button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md">
                  Uygula
                </button>
              </div>
            </div>
          )}
          {openTab === "Marka" && (
            <div className="p-4">
              <p>Marka içerikleri buraya gelecek.</p>
            </div>
          )}
          {openTab === "Genişlik" && (
            <div className="p-4">
              <p>Genişlik içerikleri buraya gelecek.</p>
            </div>
          )}
          {openTab === "Derinlik" && (
            <div className="p-4">
              <p>Derinlik içerikleri buraya gelecek.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterTabs;
