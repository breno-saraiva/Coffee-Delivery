import { useEffect, useState } from "react";
import CoffeeCard from "../../components/coffeeCard";
import Header from "../../components/header";
import Hero from "../../components/hero";
import { dataProps } from "./service/getItems.dto";
import { getItems } from "./service/getItems.service";

function Home() {
  const [data, setData] = useState<dataProps>();

  useEffect(() => {
    const getdata = async () => {
      const items = await getItems();
      setData(items);
    };
    getdata();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2">
      <Header />
      <Hero />
      <main>
        <h1 className="font-baloo text-3xl mb-14">Nossos cafés</h1>
        <div className=" flex gap-8 flex-wrap items-center">
          {data?.map((obj) => (
            <CoffeeCard
              img={obj.img as string}
              title={obj.title as string}
              tag={obj.tag as string}
              description={obj.description as string}
              price={obj.price as string}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
export default Home;
