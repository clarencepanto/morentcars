import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import "./styles/main.scss";
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
      <Sidebar isOpen={isOpen} />
      <Footer />
    </div>
  );
}
