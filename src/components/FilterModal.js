
"use client";

import React from "react";

const FilterModal = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white w-[90%] max-w-md rounded-lg shadow-lg">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-300">
          <h2 className="text-lg font-medium">{title}</h2>
          <button onClick={onClose} className="text-gray-500 text-sm">
            Kapat
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4">
          {children}

          {/* Checkboxes */}
          <div className="grid grid-cols-2 gap-2 mt-4">
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

        {/* Modal Footer */}
        <div className="flex justify-between items-center p-4 border-t border-gray-300">
          <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-md">
            Temizle
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Uygula
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;



