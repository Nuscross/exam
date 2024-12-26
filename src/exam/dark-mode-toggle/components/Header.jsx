import { useGlobalContext } from "../context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {

  const { theme, toggleTheme } = useGlobalContext();

  return (
    <section className="flex justify-between p-5 border-b border-solid border-gray-500">
      <h1 className="text-2xl font-bold uppercase">Toggle App</h1>
      <div className="flex items-center justify-center gap-3">
        <div>Click icon to change theme :</div>
        <button className="" onClick={()=>toggleTheme(theme === "Light" ? "Dark" : "Light" )}>
          { theme === "Dark" ? <BsFillMoonFill className="toggle-icon" /> : <BsFillSunFill className="toggle-icon" /> }
        </button>
      </div>
      
    </section>
  )
}

export default Header;