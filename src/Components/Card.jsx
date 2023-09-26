import Image from "next/image";
export default function Card() {
  return (
    <div className="border-2 border-grey-500 rounded-lg shadow-lg ">
      <div className="px-5 py-5">
        <Image
          className="rounded-md"
          src="https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2022/03/15/3122001-5146588.jpg?itok=GXHLC5HL"
          alt="wheat-img"
          height={300}
          width={300}
        />
      </div>
      <div className="px-5 py-5">
        <h1 className="">Product Title</h1>
        <div className="flex justify-between items-center">
          <p className="text-xs">Product Price</p>
          <button className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-blue-700 hover:scale-110 transition ease-in-out duration-300 dark:focus:ring-blue-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
