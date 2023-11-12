import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const apiKey = "02ea61ca3ab92ec36a59540116fd263c";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  { path: "/popular", element: <MovieList apiKey={apiKey} type="popular" /> },
  {
    path: "/top_rated",
    element: <MovieList apiKey={apiKey} type="top_rated" />,
  },
  {
    path: "/now_playing",
    element: <MovieList apiKey={apiKey} type="now_playing" />,
  },
  { path: "/upcoming", element: <MovieList apiKey={apiKey} type="upcoming" /> },
  { path: "/movies/:movieId", element: <Movie apiKey={apiKey} /> },
]);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
