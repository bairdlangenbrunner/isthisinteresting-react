import { useState } from "react";
import "./index.css";
import {Link, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import FavoriteResources from "./pages/FavoriteResources";
import FirstPost from "./pages/posts/FirstPost";
import About from "./pages/About";
import Archive from "./pages/Archive";
import PowerOfSiberia2 from "./pages/posts/PowerOfSiberia2";

function App() {

  return (
  <>
    <nav className="hidden">
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/favorites">favorite resources</Link></li>
        <li><Link to="/posts/first-post">inaugural post</Link></li>
        <li><Link to="/posts/pos2">power of siberia 2</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/favorites" element={<FavoriteResources />} />
      <Route path="/posts/first-post" element={<FirstPost />} />
      <Route path="/posts/pos2" element={<PowerOfSiberia2 />} />
    </Routes>
  </>
  )
}
export default App;
