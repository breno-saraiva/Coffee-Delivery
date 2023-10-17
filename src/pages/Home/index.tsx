import CoffeeCard from "../../components/coffeeCard";
import Header from "../../components/header";
import Hero from "../../components/hero";
import { data } from "../../db";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Hero />
      <main>
        <h1 className="font-baloo text-3xl mb-14">Nossos cafés</h1>
        <div className=" flex gap-8 flex-wrap items-center">
          {data.map((obj) => (
            <CoffeeCard
              img={obj.img}
              title={obj.title}
              tag={obj.tag}
              description={obj.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default Home;
