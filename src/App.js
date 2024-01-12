import { useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Projects } from "./components/projects";
import { ThemeProvider } from "styled-components";
import {
  AnimatedPages,
  GlobalStyles,
  darkTheme,
  lightTheme,
} from "./styles/global";
import { Home } from "./pages/home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AngularPage } from "./pages/myProjects/angularProjects";
import { ReactPage } from "./pages/myProjects/reactProjects";
import { BackEndPage } from "./pages/myProjects/backProjects";
import { AcademicPage } from "./pages/myProjects/academicProjects";

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
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/meus-projetos" element={<AngularPage />} />
            <Route path="/meus-projetos-angular" element={<AngularPage />} />
            <Route path="/meus-projetos-react" element={<ReactPage />} />
            <Route path="/meus-projetos-back" element={<BackEndPage />} />
            <Route path="/meus-projetos-academico" element={<AcademicPage />} />
          </Routes>
          <Footer />
      </ThemeProvider>
    </Router>
  );
}
export default App;
