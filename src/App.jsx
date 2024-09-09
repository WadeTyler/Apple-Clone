import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { Footer } from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}