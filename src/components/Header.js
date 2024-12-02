import {
  MagnifyingGlassIcon,
  UserIcon,
  HeartIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Header() {
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
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-orange-500" />
            </button>
          </div>

          {/* Kullanıcı İkonları */}
          <div className="flex items-center space-x-6 text-sm font-semibold text-gray-700">
            {/* Giriş Yap */}
            <a
              href="#"
              className="flex items-center space-x-1 group hover:text-orange-500 transition duration-200"
            >
              <UserIcon className="w-4 h-4 fill-white stroke-black group-hover:stroke-orange-500 group-hover:fill-orange-500 transition duration-200" />
              <span>Giriş Yap</span>
            </a>

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

      <div className="py-2 bg-white text-sm text-gray-600 px-28 ml-12">
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
