import { Button } from "./ui/button";
import { LayoutGridIcon, PackageIcon, ShoppingBasketIcon } from "lucide-react";
import Link from "next/link";
import SidebarButton from "./sidebar-button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white">
      {/* bg image */}
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">STOCkLY</h1>
      </div>
      {/* botoes */}
      <div className="flex flex-col gap-2 p-2">
        <SidebarButton href="/">
          <LayoutGridIcon size={20} />
          Dashboard
        </SidebarButton>

        <SidebarButton href="/products">
          <PackageIcon size={20} />
          Produtos
        </SidebarButton>

        <SidebarButton href="/sales">
          <ShoppingBasketIcon size={20} />
          Vendas
        </SidebarButton>
      </div>
    </div>
  );
};

export default Sidebar;
