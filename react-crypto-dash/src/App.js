import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import Login from "./components/Login";
// import Error from './components/Error';
import NavBar from "./components/NavBar";
import MenuBar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <MenuBar />
        </div>

        {/* <div className='Menu-bar'>
          <NavBar />
        </div>  */}
        <div className="Router">
          <Routes className="links">
            <Route path="/" element={<Home />} exact />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login />} />
            {/* <Route component={Error} /> */}
          </Routes>
        </div>
      </header>
      <body></body>
    </div>
  );
}

export default App;
