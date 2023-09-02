import Heroimg from "../../assets/Coffee-img.jpg";
import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";

function Hero() {
  return (
    <section className="mt-20 grid grid-cols-1 justify-items-center sm:justify-items-end items-start sm:grid-cols-2 sm:mt-20">
      <div className="py-4 flex flex-col items-center sm:items-start">
        {/* title */}
        <h2 className="font-bold uppercase text-4xl text-center sm:text-start">
          Encontre o café <br /> para qualquer hora do dia
        </h2>
        <p className="text-center sm:text-start">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        {/* opções */}
        <div className="grid grid-cols-1 gap-8 mt-5 sm:grid-cols-2 sm:justify-items-start sm:mt-12">
          <div className="flex gap-3 items-center">
            <div className="bg-[#C47F17] rounded-full w-8 h-8 flex items-center justify-center">
              <ShoppingCart size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Compra simples e segura</div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-[#574F4D] rounded-full w-8 h-8 flex items-center justify-center">
              <Package size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Embalagem mantém o café intacto</div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-[#DBAC2C] rounded-full w-8 h-8 flex items-center justify-center">
              <Timer size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Entrega rápida e rastreada</div>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-[#8047F8] rounded-full w-8 h-8 flex items-center justify-center">
              <Coffee size={16} color="#ffffff" weight="fill" />
            </div>
            <div>O café chega fresquinho até você</div>
          </div>
        </div>
      </div>

      {/* imageCoffee */}
      <div>
        <img src={Heroimg} />
      </div>
    </section>
  );
}
export default Hero;
