import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Collection from "./components/collection/Collection";
import BookDetails from "./components/bookDetails/BookDetails";

import "./App.sass";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<Collection />} />
          <Route path="/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
