import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import Movies from "./Movies/Movies";
import MovieDetails from "./MovieDetails/MovieDetails";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home/> } />
        <Route path="movies/" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} >
          <Route path=":movieId/cast" element={<Cast />} />
          <Route path=":movieId/reviews" element={<Reviews />} />
          </Route>
      </Route>
    </Routes>
  );
};
