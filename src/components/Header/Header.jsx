import { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }
  
  return (
    <div className='header'>
      <Navbar open={open} setOpen={ setOpen} />
      <MenuButton
        open={open}
        handleClick={handleClick}
      />
    </div>
  )};

export default Header;
