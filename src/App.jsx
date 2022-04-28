import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";
import styles from "./styles.module.scss";

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <nav className={styles.App__navbar}>
          <ul className={styles.App__ul}>
            <li className={styles.App__li}>
              <Link className={styles.App__link}to="/">Home</Link>
            </li>
            <li>
              <Link className={styles.App__link}to="/add-movie">Add movie</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/edit-movie/:id" element={<EditMovie />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;