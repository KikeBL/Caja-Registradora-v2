import { useProductStore } from "@/store/productStore"
import { useState } from 'react';

export function Calc() {
    const total = useProductStore(state => state.total)

    const [cliente, setCliente] = useState(0);
    const onValueChange = (event) => { setCliente(event) }

    const [showResults, setShowResults] = useState(false)

    const returnValue = () => {
        let coins = [10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
        let devolver = cliente * 100 - total * 100;
        let devolverCoins = [];

        coins.forEach(coin => {
            let coinCount = Math.floor(devolver / coin);
            devolverCoins.push({ coin: coin, count: coinCount });
            devolver -= coin * coinCount;
        });

        return devolverCoins
    }

    const showResultHandle = () => {
        setShowResults(true)
    }

    return (
        <article className="flex flex-col">
            <div className="flex w-full pt-4">
                <span className="bg-white p-1 mx-auto flex">IMPORTE</span>
            </div>
            <div className="flex w-full text-dark-pink">
                <span className="bg-white p-1 mx-auto flex text-xl">{total.toFixed(2)}€</span>
            </div>
            <div className="flex w-full pt-6">
                <span className="bg-white p-1 mx-auto flex">ENTREGADO</span>
            </div>
            <div className="flex w-full text-dark-pink">
                <span className="bg-white p-1 mx-auto flex text-xl">{cliente}€</span>
            </div>
            <div className="flex w-full pt-6">
                {
                    (cliente - total) >= 0 ? (
                        <span className="mx-auto flex bg-white p-1 ">A DEVOLVER</span>
                    ) : (
                        <span className="mx-auto flex bg-white p-1 ">LE FALTA</span>
                    )

                }
            </div>
            <div className={"flex w-full " + ((cliente - total) >= 0 ? 'text-dark-green' : 'text-dark-pink')}>
                <span className="bg-white p-1 mx-auto flex text-2xl font-bold">{Math.abs((cliente - total).toFixed(2))}€</span>
            </div>
            <div className="flex flex-wrap w-full pt-6 items-center justify-center">
                {
                    showResults && (
                        returnValue().map((coin, index) => {
                            if (coin.count > 0) {
                                return (
                                    <span key={index} className="bg-white  border border-dark-pink p-2 text-xs mx-1 my-1">{coin.count} x {coin.coin / 100}€</span>
                                )
                            }
                        })
                    )
                }
            </div>
            <input
                className="w-4/5 text-center text-2xl font-bold text-dark-pink bg-white border rounded-sm mx-auto mt-6"
                type='number'
                step="0.1"
                autoFocus="autofocus"
                pattern="(?<=^| )\d+(\.\d+)?(?=$| )"
                inputMode="decimal"
                onChange={(event) =>
                    onValueChange(event.target.value)
                }
            />

            <div className="flex justify-between py-4 px-8">
                <a href="/tiquetPage">
                    <div className="bg-white p-2 border border-dark-pink rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-receipt"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" /></svg>
                    </div>
                </a>
                <div className="" onClick={showResultHandle}>
                    <div className="bg-white text-darker-pink p-2 rounded-full border border-darker-pink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-coins"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z" /><path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4" /><path d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z" /><path d="M3 6v10c0 .888 .772 1.45 2 2" /><path d="M3 11c0 .888 .772 1.45 2 2" /></svg>
                    </div>
                </div>
                <div className="">
                    <a href="/">
                        <div className="bg-white text-darker-pink p-2 rounded-full border border-darker-pink">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-restore"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3.06 13a9 9 0 1 0 .49 -4.087" /><path d="M3 4.001v5h5" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                        </div>
                    </a>
                </div>
            </div>

        </article>
    )
}