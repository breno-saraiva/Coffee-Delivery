import CoffeeCard from "../../components/coffeeCard";
import Header from "../../components/header";
import Hero from "../../components/hero";

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Hero />
      <main>
        <h1 className="font-baloo text-3xl mb-14">Nossos cafés</h1>
        <CoffeeCard
          img="\src\assets\coffee-expresso-tradicional.png"
          title="Expresso Tradicional"
          tag="tradicional"
          description="O tradicional café feito com água quente e grãos moídos"
        />
      </main>
    </div>
  );
}
export default Home;
