import React from "react";
import SearchResultHeader from "../components/SearchResultHeader";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div>
      {/* Arama Sonuçları Başlığı */}
      <SearchResultHeader />

      {/* Ürün Kartları */}
      <div className="bg-gray-50">
        {/* Kapsayıcı Div */}
        <div className="max-w-[1200px] mx-auto px-2 mt-4 lg:ml-2 lg:mr-36">
          {/* Grid Düzeni */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Burada ProductCard'ı statik olarak boş veri ile çağırıyoruz */}
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
}
