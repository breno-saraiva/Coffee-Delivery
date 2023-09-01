import { MapPin, ShoppingCart } from "@phosphor-icons/react";

function Header() {
  return (
    <header className="h-28 px-40 py-8 flex items-center justify-between">
      <img src="\src\assets\Logo@2x.svg" />
      <div className="flex gap-3">
        <button className="px-2 py-2 flex gap-1 items-center rounded-md bg-[#EBE5F9] w-37 h-9 text-[#8047F8]">
          <MapPin size={22} color="#8047F8" weight="fill" /> Porto Alegre,RS
        </button>
        <button className="bg-[#F1E9C9] rounded-md w-9 flex items-center justify-center p-px">
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
        </button>
      </div>
    </header>
  );
}
export default Header;
