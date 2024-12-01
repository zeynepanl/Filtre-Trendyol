export default function Header() {
    return (
      <header>
        {/* Reklam Bandı */}
        <div className="bg-customPurple py-2 hidden md:block">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 md:space-x-4 px-28">
            {/* Sol Bölüm */}
            <span
              className="relative text-white text-lg md:text-xl font-extrabold ml-20"
              style={{
                textShadow: `
                  1px 1px 1px #ff5f5f,   /* Pembe */
                  -1px -1px 1px #5fafff, /* Mavi */
                  1px -1px 1px #ab47bc,  /* Mor */
                  -1px 1px 1px #ff5f5f   /* Pembe */
                `,
              }}
            >
              27 KASIM - 2 ARALIK
            </span>
  
            {/* Merkezi EFSANE GÜNLER Bölümü */}
            <div className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-white font-bold text-lg md:text-2xl py-2 px-6 rounded-full shadow-lg">
              EFSANE GÜNLER
            </div>
  
            {/* Sağ Bölüm */}
            <span className="text-white text-base md:text-4xl font-bold tracking-wide pr-24">
              KAÇIRIRSAN ÜZÜLÜRSÜN!
            </span>
          </div>
        </div>
      </header>
    );
  }
  