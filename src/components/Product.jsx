import { useProductStore } from "@/store/productStore"

export function Product({ product }) {
    const addCurrentProduct = useProductStore((state) => state.addCurrentProduct)
    const removeCurrentProduct = useProductStore((state) => state.removeCurrentProduct)
    return (
        <div className="m-2 h-28 bg-white border rounded-xl shadow-sm flex dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]"
            onClick={() => addCurrentProduct(product)}>
            <div className="flex-shrink-0 relative w-28 overflow-hidden rounded-s-xl rounded-se-none max-w-xs">
                <img
                    className="size-full absolute top-0 start-0 object-cover"
                    src={product.cover}
                    alt="Image Description"
                />
            </div>
            <div className="flex flex-wrap">
                <div className="flex flex-col h-full p-4">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {product.producto}
                    </h3>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            {product.price.toFixed(2)}€
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={() => removeCurrentProduct(product)}>Remove to cart</button>
        </div>
    )
}