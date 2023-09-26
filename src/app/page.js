import CarouselComp from "@/Components/Carousel";
import Categories from "@/Components/Categories";
import ServiceCard from "@/Components/ServiceCard";

export default function Home() {
  return (
    <main className=" min-w">
      <div>
        <CarouselComp />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <h2 className="text-5xl text-center py-4 font-bold">Our Services</h2>
      <div className="flex flex-wrap items-center justify-center gap-10 py-10 ">
        <ServiceCard/>
      </div>
      </div>
    </main>
  );
}
