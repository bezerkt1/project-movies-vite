import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./pages/Root";
import MovieList from "./pages/MovieList";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";

const apiKey = "02ea61ca3ab92ec36a59540116fd263c";

const router = createBrowserRouter(
  createRoutesFromElements(
    // error page surrounds all the routes to cover errors in the whole application
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<Root />} />
      <Route
        path="popular"
        element={<MovieList apiKey={apiKey} type="popular" />}
      />
      <Route
        path="popular/:page"
        element={<MovieList apiKey={apiKey} type="popular" />}
      />
      <Route
        path="top_rated"
        element={<MovieList apiKey={apiKey} type="top_rated" />}
      />
      <Route
        path="top_rated/:page"
        element={<MovieList apiKey={apiKey} type="top_rated" />}
      />
      <Route
        path="now_playing"
        element={<MovieList apiKey={apiKey} type="now_playing" />}
      />
      <Route
        path="now_playing/:page"
        element={<MovieList apiKey={apiKey} type="now_playing" />}
      />
      <Route
        path="upcoming"
        element={<MovieList apiKey={apiKey} type="upcoming" />}
      />
      <Route
        path="upcoming/:page"
        element={<MovieList apiKey={apiKey} type="upcoming" />}
      />
      <Route path="movie/:movieId" element={<Movie apiKey={apiKey} />} />
    </Route>
  )
);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
