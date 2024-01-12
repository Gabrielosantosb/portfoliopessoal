import { useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme, lightTheme } from "./styles/global";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  // const Stack = createStackNavigator();
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/meus-projetos" element={<Projects />} />
          <Route path="/meus-projetos-angular" element={''} />
          <Route path="/meus-projetos-react" element={''} />
          <Route path="/meus-projetos-back" element={''} />
          <Route path="/meus-projetos-academico" element={''} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}
export default App;
