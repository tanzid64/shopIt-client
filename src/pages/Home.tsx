import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

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
      <main>
        <ProductCard
          productId="1"
          handler={() => {}}
          name="Puma"
          photo={{
            url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804",
            public_id: "asdsaasdas",
          }}
          price={2000}
          stock={10}
        />
      </main>
    </div>
  );
};
export default Home;
