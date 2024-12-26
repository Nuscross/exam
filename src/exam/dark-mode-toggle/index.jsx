import { AppProvider } from "./context";
import Content from "./components/content";
import Header from "./components/header";

const DarkModeToggle = () => {

  return (
    <>
      <AppProvider>
        <Header />
        <Content />
      </AppProvider>
    </>
  )
}

export default DarkModeToggle;