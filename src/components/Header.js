export default function Header() {
    return (
      <header>
        {/* Reklam Bandı */}
        <div className="bg-customPurple py-2 hidden md:block">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center  md:space-y-0 md:space-x-4 px-28">
            {/* Sol Bölüm */}
            <span
              className="relative text-white md:text-xl font-extrabold  ml-20"
              style={{
                textShadow: `
                  -1px -1px 2px #ff5f5f,   /* Sol üst - Pembe */
                  1px 1px 2px #5fafff,     /* Sağ alt - Mavi */
                  -1px 1px 2px #ab47bc,    /* Sol alt - Mor */
                  1px -1px 2px #ff5f5f     /* Sağ üst - Pembe */
                `,
              }}
            >
              27 KASIM - 2 ARALIK
            </span>
  
            {/* Merkezi EFSANE GÜNLER Bölümü */}
            <div className="bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 text-white font-bold md:text-2xl py-2 px-6 rounded-full shadow-lg">
              EFSANE GÜNLER
            </div>
  
            {/* Sağ Bölüm */}
            <span className="text-white  md:text-4xl font-bold pr-24 tracking-tight">
              KAÇIRIRSAN ÜZÜLÜRSÜN!
            </span>
          </div>
        </div>
      </header>
    );
  }
  