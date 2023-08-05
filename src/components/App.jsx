import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Cast from "./pages/Cast";
import Reviews from "./pages/Reviews";
import Layout from "./Layout/Layout";
import MovieDetails from "./pages/MovieDetails";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home/> } />
        <Route path="movies" element={<Movies />}>
            <Route path="movies/:movieIdt" element={ <MovieDetails/> } />
            <Route path="movies/:movieId/cast" element={ <Cast/> } />
            <Route path="movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
