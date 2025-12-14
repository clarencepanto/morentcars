import { useState } from "react";

function Sidebar({
  selectedType,
  selectedCapacity,
  setSelectedType,
  setSelectedCapacity,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return <div className="meow">Sidebar</div>;
}

export default Sidebar;
