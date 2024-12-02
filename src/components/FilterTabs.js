"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FilterModal from "./FilterModal"; // Modal bileşeni

const FilterTabs = () => {
  const [openTab, setOpenTab] = useState(null); // Açık olan sekme
  const [showModal, setShowModal] = useState(false); // Modal kontrolü

  const handleTabClick = (tab) => {
    if (openTab === tab) {
      setOpenTab(null);
      setShowModal(false); // Modalı kapat
    } else {
      setOpenTab(tab);
      setShowModal(true); // Modalı aç
    }
  };

  return (
    <div className="md:hidden flex space-x-2 overflow-x-auto bg-white p-3">
      {["Kategori", "Marka", "Genişlik", "Derinlik"].map((tab) => (
        <div key={tab} className="relative">
          <button
            onClick={() => handleTabClick(tab)}
            className={`flex items-center px-4 py-2 border rounded-full text-sm font-medium ${
              openTab === tab
                ? "bg-orange-100 border-orange-500"
                : "bg-white border-gray-300"
            }`}
          >
            {tab}
            <ChevronDownIcon className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      ))}

      {/* Modal */}
      {showModal && openTab && (
        <FilterModal
          title={openTab}
          onClose={() => {
            setOpenTab(null);
            setShowModal(false);
          }}
        >
          {openTab === "Kategori" && (
            <div>
              <input
                type="text"
                placeholder="Kategori Ara"
                className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Mobilya</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Mutfak & Banyo Mobilyası</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Antre & Hol</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Salon & Oturma Odası</span>
                </label>
              </div>
            </div>
          )}
          {openTab === "Marka" && <p>Marka içerikleri buraya gelecek.</p>}
          {openTab === "Genişlik" && <p>Genişlik içerikleri buraya gelecek.</p>}
          {openTab === "Derinlik" && <p>Derinlik içerikleri buraya gelecek.</p>}
        </FilterModal>
      )}
    </div>
  );
};

export default FilterTabs;









