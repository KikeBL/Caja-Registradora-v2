import { useProductStore } from "../store/productStore"

interface Product {
    id: string;
    producto: string;
    cover: string | undefined;
    rename: string;
    price: number;
    allergens: string[];
    cantidad: number;
}

export function Product({ product }: { product: Product }) {
    const addToCart = useProductStore((state:any) => state.addToCart)
    const removeFromCart = useProductStore((state:any) => state.removeFromCart)
    const currentCount = useProductStore((state: any) => state.cart.find((p:Product) => p.id === product.id)?.cantidad)

    const removeFromCartClick = (event:any) => {
        event.stopPropagation()
        removeFromCart(product)
    }

    return (
        <div className={"m-2 h-28 bg-white border rounded-xl shadow-sm flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] " + (currentCount > 0 ? 'border-dark-pink' : '')}
            onClick={() => addToCart(product)}>
            <div className="flex-shrink-0 relative w-28 overflow-hidden rounded-s-xl rounded-se-none max-w-xs">
                <img
                    className="size-full absolute top-0 start-0 object-cover"
                    src={product.cover}
                    alt="Image Description"
                />
            </div>
            <div className="flex flex-wrap flex-1 ">
                <div className="flex flex-col h-full p-4">
                    <h3 className="text-lg font-bold text-darker-pink dark:text-white">
                        {product.producto}
                    </h3>
                    <div>
                        {!currentCount ? (
                            <p className="text-sm text-gray-500 italic">
                                {product.price.toFixed(2)}€
                            </p>
                        ) : (
                            <p className="text-sm text-gray-500 italic">
                                {currentCount} x {product.price.toFixed(2)} = {(currentCount * product.price).toFixed(2)}€
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {currentCount > 0 ? (
                <button type="button" onClick={removeFromCartClick}
                    className="text-white bg-dark-pink border-l border-main-pink rounded-r-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width="34" height="34" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" />
                        <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" />
                    </svg>
                </button>
            ) : null}
        </div>
    )
}