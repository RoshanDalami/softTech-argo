import heroSectionImage from "@/images/herosection.svg";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Herosection() {
  return (
    <div className="flex flex-col md:flex-row justify-center w-[500px] md:w-full gap-10">
      <div className="md:w-[50%] flex flex-col ">
        <h1 className="text-[2.8rem] font-semibold mb-5  ">
          <span className="border-b-2 border-black border-dashed pb-2">
            Welcome
          </span>{" "}
          to Agrokart
        </h1>
        <p className=" md:w-[90%] text-justify mb-8 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className="my-2 font-semibold text-1xl">Lorem Ipsum</p>
        <div className="flex flex-col gap-3">
          <li className=" list">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li className=" list">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
          <li className=" list ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </li>
        </div>
      </div>
      <div className=" drop-shadow-md">
        <Image
          src={heroSectionImage}
          alt="hero-image"
          height={700}
          width={700}
          className="rounded-lg hover:scale-110 transition ease-in-out duration-300"
        />
      </div>
    </div>
  );
}
