import "./globals.css";
import "../components/Header"
import Header from "../components/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <Header/>

      <main>{children}</main>  

      </body>
    </html>
  );
}
