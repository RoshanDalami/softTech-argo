import Image from "next/image";
import image1 from "@/Images/veggies.avif";
import image2 from "@/Images/fruits.jpg";
import image3 from "@/Images/salad.jpg";
import image4 from "@/Images/meat.jpg";
import image5 from "@/Images/milk.jpg";

const Data = [
  {
    id: 1,
    title: "Vegetables ",
    imageurl: image1,
    description: "Get fresh vegetables with us",
  },
  {
    id: 2,
    title: "Fruits ",
    imageurl: image2,
    description: "Fresh fruits you will get around",
  },
  {
    id: 3,
    title: "Salad",
    imageurl: image3,
    description: "Get salad bowl and stay healthy and lean",
  },
  {
    id: 4,
    title: "Meat",
    imageurl: image4,
    description: "We provide fresh meat both (cut and uncut)",
  },
  {
    id: 5,
    title: "Milk Products",
    imageurl: image5,
    description: "lorem epsume lat stbe fd0 fdjjut",
  },
  {
    id: 6,
    title: "Service Title",
    imageurl: image1,
    description: "lorem epsume lat stbe fd0 fdjjut",
  },
];

export default function ServiceCard() {
  return (
    <>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {Data.map((item) => {
          return (
            <main
              key={item.id}
              className="  w-[400px] pb-4 rounded-md overflow-hidden shadow-xl cursor-pointer "
            >
              <div className="overflow-hidden">
                <Image
                  src={item.imageurl}
                  alt=""
                  height={10}
                  width={400}
                  className="h-[350px] w-full hover:scale-105 transition ease-in-out duration-300 "
                />
              </div>
              <div className="bg-white z-10 overflow-hidden">
                <h1 className="text-3xl px-4 pt-2">{item.title}</h1>
                <p className="text-sm opacity-60 px-4 py-2">
                  {item.description}
                </p>
              </div>
            </main>
          );
        })}
      </div>
    </>
  );
}
