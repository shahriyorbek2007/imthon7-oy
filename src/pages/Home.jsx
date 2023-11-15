import Slider from "../Componets/Slider";
import ProductionHouse from "../Componets/ProductionHouse";
import GenreMovieList from "../Componets/GenreMovieList";
import Header from "../Componets/Header";
function Home() {
  return (
    <>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </>
  );
}

export default Home;
