// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo/logo-2.svg"
import MenuButton from '../components/button/MenuButton'
import ThemeToggleButton from '../components/button/ThemeToggleButton'
import SearchBar from '../components/search/SearchBar'

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleButtonClick = () => {

    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > navbar.offsetHeight && lastScrollY < window.scrollY) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <navbar className="w-full flex justify-center items-center">
      <div className={`${isHidden ? `-translate-y-7/5` : ''} navbar z-50 flex flex-row lg:w-10/12 lg:h-fit lg:px-9 lg:py-5 bg-black-0.85 lg:top-5 fixed lg:rounded-15 border-b-3 border-red justify-between transition-all shadow-y-axis`}>
        <Link to={"/"} className='hover:scale-105 transition-transform duration-200'>
          <img src={logo} alt="home" className='lg:h-10'/>
        </Link>

        <div className="m">
          <SearchBar />
        </div>

        <div className="flex flex-row-reverse gap-5 justify-center items-center">
          <MenuButton handle={handleButtonClick} isOpen={menuOpen}/>
          <ThemeToggleButton />
          <Link to={'/masuk'} className='text-base text-soft-white font-medium hover:scale-105 hover:text-red transition-transform'>Log In</Link>
        </div>
      </div>
    </navbar>
  )
}

export default Navbar