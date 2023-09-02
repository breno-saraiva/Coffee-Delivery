import Heroimg from "../../assets/Coffee-img.jpg";
import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";

function Hero() {
  return (
    <section className="grid  grid-cols-1 gap-14 mt-23 pt-4 sm:justify-items-end items-start sm:grid-cols-2 sm:mt-20">
      <div className="py-4">
        {/* title */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold uppercase text-4xl">
            Encontre o café <br /> para qualquer hora do dia
          </h2>
          <h6>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h6>
        </div>

        {/* opções */}
        <div className="grid grid-cols-2 gap-5 py-8 mt-4">
          <div className="flex gap-3">
            <div className="bg-[#C47F17] rounded-full w-8 h-8 flex items-center justify-center">
              <ShoppingCart size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Compra simples e segura</div>
          </div>

          <div className="flex gap-3 items-center ">
            <div className="bg-[#574F4D] rounded-full w-8 h-8 flex items-center justify-center">
              <Package size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Entrega rápida e rastreada</div>
          </div>

          <div className="flex gap-3 items-center py-5">
            <div className="bg-[#DBAC2C] rounded-full w-8 h-8 flex items-center justify-center">
              <Timer size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Entrega rápida e rastreada</div>
          </div>

          <div className="flex gap-3 items-center py-5">
            <div className="bg-[#8047F8] rounded-full w-8 h-8 flex items-center justify-center">
              <Coffee size={16} color="#ffffff" weight="fill" />
            </div>
            <div>Entrega rápida e rastreada</div>
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
