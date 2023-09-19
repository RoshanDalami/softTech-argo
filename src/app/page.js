import Image from "next/image";
import Card from "@/Components/Card";
import ProductModal from "@/Components/ProductModal";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Card /> */}
      <ProductModal />
    </main>
  );
}
