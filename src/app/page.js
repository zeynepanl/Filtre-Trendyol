import React from "react";
import SearchResultHeader from "../components/SearchResultHeader";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      {/* Arama Sonuçları Başlığı */}
      <SearchResultHeader />

      {/* Ürün Kartları */}
      <div className="p-6 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Burada ProductCard'ı statik olarak boş veri ile çağırıyoruz */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
