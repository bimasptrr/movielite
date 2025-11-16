import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import ProfilePage from "./pages/ProfilePage";

import "./index.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigate = (p, data) => {
    setPage(p);
    if (data) setSelectedMovie(data);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onNavigate={navigate} />
      <div className="max-w-6xl mx-auto py-8 px-5">
        {page === "home" && <HomePage onNavigate={navigate} />}
        {page === "movies" && <MoviesPage onNavigate={navigate} />}
        {page === "detail" && <MovieDetailPage movie={selectedMovie} onNavigate={navigate} />}
        {page === "profile" && <ProfilePage />}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
