import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/global";
import Hotjar from "@hotjar/browser";

const siteId = 3641943;
const hotjarVersion = 6;
Hotjar.init(siteId, hotjarVersion);

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
