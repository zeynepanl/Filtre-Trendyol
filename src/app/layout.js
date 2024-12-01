import "./globals.css";
import Header from "../components/Header";
import FilterSidebar from "../components/FilterSidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex">
          {/* Filtre Sidebar */}
          <FilterSidebar />
          {/* Ana İçerik */}
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
