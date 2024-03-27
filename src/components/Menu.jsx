import { useProductStore } from "@/store/productStore"

export function Menu() {
    const total = useProductStore(state => state.total)

    return (

        <nav className="flex w-full text-dark-pink pt-4 z-20">
            <div className="flex-1 flex">
                <div className="mx-auto">
                    <a href="/tiquetPage">
                        <div className="bg-white p-2 border border-dark-pink rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex-1 flex text-2xl -mt-2">
                <div className="mx-auto">
                    <a href="/checkout">
                        <div className="bg-white p-1">
                            {total?.toFixed(2)}€
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex-1 flex">
                <div className="mx-auto">
                    <a href="/checkout">
                        <div className="bg-white p-2 border border-dark-pink rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    )
}