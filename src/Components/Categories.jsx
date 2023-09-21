import Link from "next/link";



export default function Categories(){
    return(
        <main className="my-10">
            <div className="flex flex-col gap-10 items-center justify-center">
                <section>
                    <h1 className="text-4xl font-bold">Categories</h1>
                </section>
                <section className="flex gap-10">
                    <div className="border-2 border-gray-600 px-16 py-10  rounded-lg shadow-lg cursor-pointer hover:scale-110 transition ease-in-out duration-200">
                        <Link href={'/plants'} className=" no-underline text-black" >
                        <h1 className="" >Plants</h1>
                        </Link>
                    </div>
                    <div className="border-2 border-gray-600 px-16 py-10 rounded-lg shadow-lg cursor-pointer hover:scale-110 transition ease-in-out duration-200">
                    <Link href={'/animals'} className=" no-underline text-black" >
                        <h1>Animals</h1>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}