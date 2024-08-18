import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20">
        <div className="flex max-xl:flex-col gap-12">
          <div className="flex flex-col justify-center"> 

            <h1 className="head-text">
              Unleash the Power of
              <span className="text-primary"> Precision AI.</span>
            </h1>

            <p className="mt-6">
            Stay ahead of the market with real-time price tracking and advanced analytics. Our AI-powered insights help you make informed decisions and optimize your purchasing strategies.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Explore the Latest Trends</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
