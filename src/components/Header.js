"use client";

import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false); // Arama kutusu durumu

  return (
    <header>
      {/* Reklam Bandı */}
      <div className="bg-customPurple py-2 hidden md:block">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:space-y-0 md:space-x-4 px-28">
          {/* Sol Bölüm */}
          <span
            className="relative text-white md:text-xl font-extrabold ml-20"
            style={{
              textShadow: `
                  -1px -1px 2px #ff5f5f,
                  1px 1px 2px #5fafff,
                  -1px 1px 2px #ab47bc,
                  1px -1px 2px #ff5f5f`,
            }}
          >
            27 KASIM - 2 ARALIK
          </span>

          {/* Merkezi EFSANE GÜNLER Bölümü */}
          <div className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-white font-bold md:text-2xl py-2 px-6 rounded-full shadow-lg">
            EFSANE GÜNLER
          </div>

          {/* Sağ Bölüm */}
          <span className="text-white md:text-4xl font-bold pr-24 tracking-tight">
            KAÇIRIRSAN ÜZÜLÜRSÜN!
          </span>
        </div>
      </div>

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
          <div className="flex flex-col items-center">
            <Bars3Icon className="w-8 h-7 text-black" />
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
          <div className="flex items-center space-x-6 text-sm font-semibold text-gray-700">
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
      <div className="bg-white py-2 border-b border-gray-300 hidden md:flex">
        <div className="container mx-auto flex items-center justify-between px-28 pr-44">
          {/* Tüm Kategoriler */}
          <div className="flex items-center space-x-2 ml-12">
            <Bars3Icon className="w-5 h-5 text-black" />
            <span className="text-sm font-medium text-black">
              TÜM KATEGORİLER
            </span>
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
