import Link from "next/link";

//icons imports
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <main className="">
      <nav className=" h-16 shadow-lg flex items-center justify-between px-16">
        <section>
          <Link href={"/"} className=" no-underline">
            <h1 className="text-2xl font-bold text-black">Logo</h1>
          </Link>
        </section>
        <section >
          <ul className="flex justify-center items-center gap-10">
            <li>Link1</li>
            <li>Link2</li>
            <li>Link3</li>
            <li>Link4</li>
          </ul>
        </section>
        <section className="flex gap-8">
          <Link href={"/cart"}>
            <FaShoppingCart className="text-2xl text-black" />
          </Link>
          <Link href={"/login"}>
            <CgProfile className="text-2xl text-black" />
          </Link>
        </section>
      </nav>
    </main>
  );
}
