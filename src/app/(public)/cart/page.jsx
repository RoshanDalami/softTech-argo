import {FaShoppingCart} from 'react-icons/fa'

export default function CartPage(){
    return(
        <main className="mx-10 mt-[20px]">
           <div className=" border-2 border-dashed border-gray-500/50 w-full rounded-md p-10 flex flex-col items-center justify-center gap-6 ">
                <FaShoppingCart className='text-4xl opacity-40 ' />
                <h1 className='text-xl'> Your cart is empty</h1>
           </div>
        </main>
    )
}