import { useProductStore } from "@/store/productStore"

export function Tiquet() {
    const cart = useProductStore(state => state.cart)
    const total = useProductStore(state => state.total)


    return (
        <div>
            {cart.map(product => (
                <div className="flex flex-col px-2 text-sm">
                    <div className="flex mt-1">
                        <span className="w-4/6 uppercase">{product.producto}</span>
                        <span className="w-1/6">{product.cantidad} x {product.price}</span>
                        <span className="w-1/6 text-right">{(product.cantidad * product.price).toFixed(2)}€</span>
                    </div>
                </div>
            ))}
            <span className="flex justify-center px-2 text-lg mt-2 text-gray-500">****************************</span>
            <span className="flex justify-end px-2 text-lg mb-2 uppercase">Total: {total.toFixed(2)}€</span>
            <hr className="my-2" />
            <hr />

            <div className="flex justify-between py-4 px-8">
                <div className="">
                    <div className="text-darker-pink p-2 rounded-full border border-darker-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-printer"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg>
                    </div>
                </div>
                <div className="">
                    <div className="text-darker-pink p-2 rounded-full border border-darker-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                    </div>
                </div>
                <div className="">
                    <a href="/">
                        <div className="text-darker-pink p-2 rounded-full border border-darker-pink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-building-store"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21l18 0" /><path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" /><path d="M5 21l0 -10.15" /><path d="M19 21l0 -10.15" /><path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" /></svg>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

