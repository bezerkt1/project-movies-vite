import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";

export const App = () => {
  const apiKey = "02ea61ca3ab92ec36a59540116fd263c";

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/movies"
            element={<MovieList apiKey={apiKey}></MovieList>}
          />
          <Route path="/movies/:movieId" element={<Movie apiKey={apiKey} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
