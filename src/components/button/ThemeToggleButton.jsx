import { useState } from "react"
import iconDark from '../../assets/icon/theme/Dark.svg'
import iconLight from '../../assets/icon/theme/Light.svg'

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("dark")

  const handleThemeChange = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <button onClick={handleThemeChange} className={`${theme == "dark" ? 'bg-black-1' : 'bg-soft-white'} flex flex-row lg:w-14 lg:h-7 lg:px-1 items-center rounded-full bg-black border border-grey relative transition-all delay-150 duration-300 group`}>
      <div className={`${theme == "dark" ? 'bg-soft-white translate-x-0' : 'bg-grey translate-x-7'} lg:h-5 lg:w-5 rounded-full transition-all duration-300 delay-100 flex-shrink-0 z-20 group-hover:brightness-75`}/>
      <div className="w-full justify-center items-center flex z-10">
        <img src={iconDark} className={`${theme == "light" && 'opacity-0'} transition-all duration-300`}/>
        <img src={iconLight} className={`${theme == "dark" && 'opacity-0'} transition-all duration-300 absolute left-2`}/>
      </div>
    </button>
  )
}

export default ThemeToggleButton