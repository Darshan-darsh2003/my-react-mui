import "./App.css";
import Header from "./components/Header";
import "./assets/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Apps } from "./components/Apps";
import { Games } from "./components/Games";
import { Movies } from "./components/Movies";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <React.Fragment>
                <Apps />
              </React.Fragment>
            }
          ></Route>
          <Route
            exact
            path="/games"
            element={
              <React.Fragment>
                <Games />
              </React.Fragment>
            }
          ></Route>
          <Route
            exact
            path="/movies"
            element={
              <React.Fragment>
                <Movies />
              </React.Fragment>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
