import { useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/global";
import HotjarTracking from "./HotjarTracking";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <HotjarTracking/>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
