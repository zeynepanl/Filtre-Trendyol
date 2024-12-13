"use client";

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";
import categories from "../data/categories";

export default function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false); // Arama kutusu durumu
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobil menü durumu

  // Menü kontrol fonksiyonları
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="py-1 hidden md:block">
        <div className="container mx-auto flex justify-end space-x-6 text-xs text-gray-400 pr-44">
          <a href="#" className="hover:text-black transition duration-200">
            İndirim Kuponlarım
          </a>
          <a href="#" className="hover:text-black transition duration-200">
            Trendyol'da Satış Yap
          </a>
          <a href="#" className="hover:text-black transition duration-200">
            Hakkımızda
          </a>
          <a href="#" className="hover:text-black transition duration-200">
            Yardım & Destek
          </a>
        </div>
      </div>

      {/* Mobil Header */}
      <div className="bg-white md:hidden py-2 px-4 flex justify-between items-center border-b">
        {/* Menü ve Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-center" onClick={openMenu}>
            <Bars3Icon className="w-8 h-7 text-black cursor-pointer" />
            <span className="text-xs text-gray-600 mt-[-6px]">menü</span>
          </div>

          <span className="text-2xl font-medium">trendyol</span>
        </div>

        {/* İkonlar */}
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon className="w-7 h-7 text-black" />
          <HeartIcon className="w-7 h-7 fill-white stroke-black" />
          <ShoppingCartIcon className="w-7 h-7 fill-white stroke-black" />
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={closeMenu}
          >
            <div
              className="bg-white w-3/4 max-w-xs h-full shadow-lg z-50 relative"
              onClick={(e) => e.stopPropagation()} // Menü dışında tıklamaları engeller
            >
              {/* Menü Üst Bölüm */}
              <div className="p-4 flex justify-between items-center border-b">
                {/* Geri Butonu ve Başlık */}
                <div className="flex items-center space-x-2">
                  <button
                    className="flex items-center space-x-1 text-gray-500"
                    onClick={() => setActiveCategory(null)} // Geri butonu
                  >
                    <ArrowLeftIcon className="w-5 h-5 text-black" />{" "}
                    {/* Ok ikonu */}
                  </button>
                  <span className="text-2xl font-medium text-gray-800">
                    trendyol
                  </span>
                </div>

                {/* Kapatma Butonu */}
                <button onClick={closeMenu}>
                  <XMarkIcon className="w-6 h-6 text-black" />
                </button>
              </div>

              {/* Kategoriler */}
              <div className="p-4">
                {activeCategory === null &&
                  categories.map((category, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-100"
                      onClick={() => setActiveCategory(category)} // Alt kategoriler için tıklama
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-orange-500 text-lg">
                          {category.icon}
                        </span>
                        <span className="text-gray-700 text-sm font-medium">
                          {category.title}
                        </span>
                      </div>
                      <span className="text-gray-400">{">"}</span>
                    </div>
                  ))}

                {/* Alt Kategoriler */}
                {activeCategory !== null && (
                  <div>
                    {/* Alt Kategori Başlıkları */}
                    {activeCategory.subcategories.map((subcategory, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between py-3 border-b cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          console.log(`Clicked: ${subcategory.title}`)
                        } // İleride bir alt kategoriye tıklama durumunda aksiyon eklenebilir
                      >
                        <span className="text-gray-700 text-sm font-medium">
                          {subcategory.title}
                        </span>
                        <span className="text-gray-400">{">"}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Logo, Arama Çubuğu ve Kullanıcı İkonları (Masaüstü) */}
      <div className="bg-white py-2 hidden md:block">
        <div className="container mx-auto flex items-center justify-between px-28 pr-44">
          {/* Logo */}
          <div className="flex items-center ml-12">
            <span className="text-black md:text-4xl font-medium">trendyol</span>
          </div>

          {/* Arama Çubuğu */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Aradığınız ürün, kategori veya markayı yazınız"
              className="w-full py-2 pl-4 pr-12 bg-[#f3f3f3] shadow-sm text-sm font-sans focus:outline-none focus:ring-2 focus:ring-orange-500"
              onFocus={() => setShowSearchBox(true)} // Odaklanınca kutu açılır
              onBlur={() => setTimeout(() => setShowSearchBox(false), 150)} // Odaktan çıkınca kapanır
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-orange-500" />
            </button>

            {/* Açılır Kutucuk */}
            {showSearchBox && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg border border-orange-500 z-50 mt-2 p-4">
                {/* Popüler Aramalar */}
                <div className="mb-4">
                  <h3 className="font-bold text-gray-700">Popüler Aramalar</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {[
                      "Ayakkabılık",
                      "Pantolon",
                      "Robot Süpürge",
                      "Ev Terliği",
                      "U.S. Polo Assn.",
                      "İpekyol",
                      "Dermod",
                      "Trençkot",
                      "Ütü",
                      "Çelik Kolye",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm cursor-pointer hover:bg-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Popüler Ürünler */}
                <div>
                  <h3 className="font-bold text-gray-700 flex justify-between">
                    Popüler Ürünler
                    <a
                      href="#"
                      className="text-orange-500 text-sm font-medium hover:underline"
                    >
                      Tümünü Gör &gt;
                    </a>
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {[
                      {
                        name: "Miomi Metalik Tripot Profesyonel 5500K",
                        price: "325.00 TL",
                        image: "https://via.placeholder.com/100", // Görsel URL
                      },
                      {
                        name: "Gillette Venus Comfort Glide Breeze",
                        price: "270.76 TL",
                        image: "https://via.placeholder.com/100", // Görsel URL
                      },
                    ].map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center bg-gray-100 p-2 rounded"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-20 object-cover rounded"
                        />
                        <p className="text-sm font-medium text-gray-800 mt-2 truncate">
                          {product.name}
                        </p>
                        <p className="text-orange-500 text-sm font-bold mt-1">
                          {product.price}
                        </p>
                        <button className="bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded mt-2 hover:bg-orange-600">
                          Çok Al Az Öde
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Kullanıcı İkonları */}
          <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            {/* Giriş Yap */}
            <div className="relative group">
              <a
                href="#"
                className="flex items-center space-x-1 group-hover:text-orange-500 transition duration-200"
              >
                <UserIcon className="w-4 h-4 fill-white stroke-black group-hover:stroke-orange-500 group-hover:fill-orange-500 transition duration-200" />
                <span>Giriş Yap</span>
              </a>

              {/* Hover ile açılır kutu */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-44 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition duration-200 z-50">
                {/* Üstteki Baloncuk */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45"></div>

                {/* Beyaz Alan */}
                <div className="p-2 bg-white rounded-lg">
                  <button className="block w-full px-4 py-2 text-center font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
                    Giriş Yap
                  </button>
                  <button className="block w-full px-4 py-2 text-center font-medium text-gray-700 bg-white hover:bg-gray-100 rounded-md mt-2">
                    Üye Ol
                  </button>
                </div>
              </div>
            </div>

            {/* Favorilerim */}
            <a
              href="#"
              className="flex items-center space-x-1 group hover:text-orange-500 transition duration-200"
            >
              <HeartIcon className="w-4 h-4 stroke-black fill-white group-hover:stroke-orange-500 group-hover:fill-orange-500 transition duration-200" />
              <span>Favorilerim</span>
            </a>

            {/* Sepetim */}
            <a
              href="#"
              className="flex items-center space-x-1 group hover:text-orange-500 transition duration-200"
            >
              <ShoppingCartIcon className="w-4 h-4 stroke-black fill-white group-hover:stroke-orange-500 group-hover:fill-orange-500 transition duration-200" />
              <span>Sepetim</span>
            </a>
          </div>
        </div>
      </div>
      {/* Tüm Kategoriler ve Menü */}
      <div className="bg-white py-2 border-b border-gray-300 hidden md:flex relative">
        <div className="container mx-auto flex items-center justify-between px-28 pr-44">
          {/* Parent Div for Hover State */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredCategory("all")}
            onMouseLeave={() => {
              // Menü alanının dışına çıkınca kapatılacak
              setTimeout(() => {
                if (!document.querySelector(".category-dropdown:hover")) {
                  setHoveredCategory(null);
                }
              }, 200);
            }}
          >
            {/* TÜM KATEGORİLER Button */}
            <div className="flex items-center space-x-2 ml-12 cursor-pointer">
              <Bars3Icon className="w-5 h-5 text-black" />
              <span className="text-sm font-medium text-black">
                TÜM KATEGORİLER
              </span>
            </div>

            {/* Dropdown Menu */}
            {(hoveredCategory === "Kadın" || hoveredCategory !== null) && (
              <div
                className="absolute top-full left-0 w-[900px] bg-white shadow-lg border border-gray-200 z-50 mt-2 grid grid-cols-7 gap-4 category-dropdown"
                onMouseEnter={() => setHoveredCategory("Kadın")}
                onMouseLeave={() => {
                  // Menü alanının dışına çıkınca kapatılacak
                  setTimeout(() => {
                    if (!document.querySelector(".category-dropdown:hover")) {
                      setHoveredCategory(null);
                    }
                  }, 200);
                }}
              >
                {/* Left Menu - Ana Kategoriler */}
                <div className="bg-gray-100 border-r pr-4 w-48">
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={`w-48 p-4 cursor-pointer transition-colors duration-200 ${
                        hoveredCategory === index ||
                        (hoveredCategory === "Kadın" && index === 0)
                          ? "bg-white text-orange-500 font-bold"
                          : "hover:bg-gray-100 hover:text-orange-500"
                      }`}
                      onMouseEnter={() => setHoveredCategory(index)}
                    >
                      <span className="text-orange-500 text-lg">
                        {category.icon}
                      </span>

                      <span className="font-medium">{category.title}</span>
                    </div>
                  ))}
                </div>
                {/* Right Menu - Alt Kategoriler */}
                {categories.map(
                  (category, index) =>
                    (hoveredCategory === index ||
                      hoveredCategory === "Kadın") && (
                      <div
                        key={index}
                        className="col-span-6 grid grid-cols-4 gap-4 ml-20" // Sağ hizalama için margin-left eklendi
                      >
                        {category.subcategories.map((subcategory, subIndex) => (
                          <div key={subIndex} className="p-2">
                            <h3 className="font-bold mb-2 text-orange-500 cursor-pointer whitespace-nowrap">
                              {subcategory.title}{" "}
                              {/* Başlık üzerine gelince turuncu renk için hover */}
                            </h3>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {subcategory.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="hover:text-orange-500 cursor-pointer"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )
                )}
              </div>
            )}
          </div>

          {/* Menü Linkleri */}
          <div className="flex items-center justify-end space-x-6 text-sm font-medium text-gray-700 flex-grow">
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Kadın
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Erkek
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Anne & Çocuk
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Ev & Yaşam
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Süpermarket
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Kozmetik
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Ayakkabı & Çanta
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Elektronik
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Çok Satanlar
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition duration-200"
            >
              Flaş Ürünler
            </a>
          </div>
        </div>
      </div>

      <div className="py-2 bg-white text-sm text-gray-600 px-4 md:px-28 ml-0 md:ml-12 ">
        <nav className="flex space-x-2">
          <a href="#" className="hover:text-black hover:underline">
            Trendyol
          </a>
          <span className="text-orange-500">›</span>
          <a href="#" className="hover:text-black hover:underline">
            Ev ve Mobilya
          </a>
          <span className="text-orange-500">›</span>
          <span>Mobilya</span>
        </nav>
      </div>
    </header>
  );
}
