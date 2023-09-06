import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";

type CoffeeCardType = {
  tag: string;
  title: string;
  img: string;
  description: string;
};

function CoffeeCard({ description, img, tag, title }: CoffeeCardType) {
  return (
    <div className="w-64 h-80 bg-[#F3F2F2] rounded-tl-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] rounded-br-md mb-10">
      <header className="flex flex-col items-center gap-3">
        <img className="-mt-5" src={img} alt="" />
        <span className="bg-[#F1E9C9] px-2 py-1 rounded-full text-[#C47F17] text-[0.625rem] text-center font-bold uppercase">
          {tag}
        </span>
      </header>
      <main className="text-center mb-8">
        <h1 className="pt-3 pb-2 font-baloo font-bold text-[#403937]">
          {title}
        </h1>
        <p className="text-[#8D8686] font-roboto">{description}</p>
      </main>
      <footer className="px-5 flex justify-between items-center">
        <div className="flex justify-end items-center gap-1">
          <div className="font-roboto text-sm text-[#574F4D]">R$</div>
          <div className="font-baloo text-xl text-[#574F4D]">9,90</div>
        </div>

        <div className="flex justify-center items-center gap-2">
          <div className="bg-[#E6E5E5] flex justify-center items-center rounded-md gap-1 px-[0.531rem] py-3">
            <button className="text-[#8047F8]">
              <Minus size={16} color="#8047F8" />
            </button>
            <span className="font-roboto text-base">1</span>
            <button className="text-[#8047F8]">
              <Plus size={16} color="#8047F8" />
            </button>
          </div>
          <div>
            <button className="bg-[#4B2995] p-2 rounded-md">
              <ShoppingCart size={32} color="#ffffff" weight="fill" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default CoffeeCard;
