import logo from './logo.svg';
import './App.css';
import SideBar from "./template/SideBar";
import Nav from "./template/Nav";
import PageTemplate from "./template/PageTemplate";
import HelloPage from "./pages/HelloPage";
import MainPage from "./pages/MainPage";
import PortfolioPage from "./pages/PortfolioPage";

import Pages from './pages'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SideBar></SideBar>
      <Pages></Pages>
    </BrowserRouter>
  );
}

export default App;
