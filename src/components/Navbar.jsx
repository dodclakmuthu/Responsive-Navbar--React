import {useState} from 'react';
import NavLinks from './NavLinks';
import '../css/navbar.css'
function Navbar() {
  
  const [isShowNavLinks, setIsShowNavLinks] = useState(false);
  const [burgerClass, setBurgerClass] = useState('burger');

  const handleBurgerClick = () => {
    setIsShowNavLinks(!isShowNavLinks)
    setBurgerClass(isShowNavLinks? 'burger' : 'burger burger-active')
  }

  const navFields = [
    {name:"Home", path: "#"},
    {name:"About", path: "#"},
    {name:"Contact", path: "#"},
    {name:"Blog", path: "#"},
  ]

  return (
    <nav className="nav">
      <h2 className='logo'>LOGO</h2>
      <div className={burgerClass} onClick={handleBurgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={isShowNavLinks? 'nav-active' : ''}>
        <NavLinks fields={navFields} />
      </ul>
    </nav>
  )
}

export default Navbar;