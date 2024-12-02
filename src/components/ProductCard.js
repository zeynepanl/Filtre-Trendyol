"use client";

export default function ProductCard() {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {/* Üst Kısım */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
          Hızlı Teslimat
        </span>
        <button className="text-gray-400 hover:text-red-500">❤️</button>
      </div>

      {/* Görsel Alanı */}
      <div className="bg-gray-200 w-full h-36 flex items-center justify-center">
        Görsel Alanı
      </div>

      {/* Avantajlı Ürün Etiketi */}
      <div className="mt-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-center">
        Avantajlı Ürün
      </div>

      {/* Ürün Bilgileri */}
      <div className="mt-4">
        <h2 className="text-sm font-bold">risingmaber Metal Siyah</h2>
        <p className="text-xs text-gray-500 truncate">
          Amerikan Kapı Arkası Askılık Organiz...
        </p>
        <p className="text-xs text-orange-500 font-medium">
          Son 3 günde 500+ ürün satıldı!
        </p>
      </div>

      {/* Ürün Puanı ve Fiyat */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-yellow-500 text-xs">⭐ 4.3</span>
          <span className="text-gray-500 text-xs ml-1">(6545)</span>
        </div>
        <span className="text-sm font-bold text-orange-600">88,71 TL</span>
      </div>

      {/* Etiketler */}
      <div className="mt-2 flex space-x-2">
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          Videolu Ürün
        </span>
      </div>
    </div>
  );
}
