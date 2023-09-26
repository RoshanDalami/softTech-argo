import Link from "next/link";

export default function Categories() {
  return (
    <main className="my-10">
      <div className="flex flex-col gap-10 items-center justify-center">
        <section>
          <h1 className="text-4xl font-bold">Categories</h1>
        </section>
        <section className="flex gap-10">
          <Link href={"/plants"} className=" no-underline text-black">
            <div className="categories">
              <h1 className="">Plants</h1>
            </div>
          </Link>
          <Link href={"/animals"} className=" no-underline text-black">
            <div className="categories">
              <h1>Animals</h1>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
