import Image from "next/image";

import ProductModal from "@/Components/ProductModal";
import Herosection from "@/Components/Herosection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Card /> */}
      {/* <ProductModal /> */}
      <div className="mx-12">
        <Herosection />
      </div>
    </main>
  );
}
