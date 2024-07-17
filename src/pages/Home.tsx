import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Banner */}
      <section></section>
      {/* Latest Products */}
      <h1>
        Latest Products
        <Link to="/search" className="find-more">
          More
        </Link>
      </h1>
      <main></main>
    </div>
  );
};
export default Home;
