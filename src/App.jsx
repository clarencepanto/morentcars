import Header from "./components/layout/Header";
import InfoCardPickUp from "./components/features/InfoCardPickUp";
import InfoCardDropOff from "./components/features/InfoCardDropOff";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import "./styles/main.scss";
import swapImage from "./assets/icons/Swap.png";
import { useState } from "react";

export default function App() {
  // sidebar menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);
  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <section className="maininfo">
        <div className="infocards">
          <InfoCardPickUp />
          <div className="btn--swap">
            <img src={swapImage} alt="swapbutton" className="swapbtnsize" />
          </div>
          <InfoCardDropOff />
        </div>
        <Sidebar isOpen={isOpen} />
        <Footer />
      </section>
    </div>
  );
}
