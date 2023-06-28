import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useTheme, useThemeUpdate } from "./components/ThemeContext";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import Login from "./components/Login";
// import Error from './components/Error';
import NavBar from "./components/NavBar";
import MenuBar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header>
          <div>
            <div className="menu-bar">
              <MenuBar />
            </div>
            <div className="router">
              <Routes className="links">
                <Route path="/" element={<Home />} exact />
                <Route path="/Portfolio" element={<Portfolio />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                {/* <Route component={Error} /> */}
              </Routes>
            </div>
          </div>
        </header>
        <body></body>
      </div>
    </ThemeProvider>
  );
}

export default App;
