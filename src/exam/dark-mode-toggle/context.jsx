import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getThemeFromLocalStorage = () => {
  return localStorage.getItem("theme") || "Light";
}

export const AppProvider = ({ children }) => {

  const [theme,setTheme] = useState(getThemeFromLocalStorage);

  useEffect(()=>{
    const body = document.querySelector("body");
    if (theme === "Dark") {
      body.classList.add("dark-theme");
    }
    else {
      body.classList.remove("dark-theme");
    }
  },[theme])

  const toggleTheme = (themeValue) => {
    setTheme(themeValue);
    localStorage.setItem("theme",themeValue);
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </AppContext.Provider>
  )

}

export const useGlobalContext = () => useContext(AppContext);