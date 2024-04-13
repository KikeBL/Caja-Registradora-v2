import { useProductStore } from "../store/productStore"
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface Product {
    id: string;
    producto: string;
    cover: string | undefined;
    rename: string;
    price: number;
    allergens: string[];
    cantidad: number;
}

export function Tiquet() {
    const cart: Product[] = useProductStore((state: any) => state.cart)
    const total = useProductStore((state: any) => state.total)

    const [nombreCliente, setNombreCliente] = useState("Enrique");
    const onNameChange = (event:any) => { setNombreCliente(event) }
    const [emailCliente, setEmailCliente] = useState("enriquebarrerol@gmail.com");
    const onEmailChange = (event:any) => { setEmailCliente(event) }

    const [showMail, setShowMail] = useState(false)
    const showMailHandle = () => {
        setShowMail(!showMail)
    }

    var message = "<div style='text-align:center'><h1>Dulces Remedios</h1>"
    message += "<span>Av Marques de Aracena, 94</span><br />"
    message += "<span>21360 El Repilado (Jabugo)</span><br />"
    message += "<span>Teléfono: 663 18 39 31</span><br />"
    message += "<span>Número: " + Date.now() + " - 0001</span><br />"

    message += "<p style='width:100%'>****************************</p></div>"
    const getMessage = () => {
        cart.map((product) => (
            message += "<div style='display:flex;width:100%;text-transform:uppercase'><span style='width:66%'>" + product.producto + " </span><span style='width:34%;text-align:right'> " + product.cantidad + " x " + product.price + " = " + (product.cantidad * product.price) + "€</span></div><br />"))

        message += "<div style='text-align:center'>"
        message += "<p style='width:100%'>****************************</p></div>"
        message += "<div style='width:100%;text-align:right;font-weight:bold;font-size:22pt;color:#7b3f59'><span>Total: " + total.toFixed(2) + "€</span></div>"

        return message
    }

    const sendMailHandle = () => {
        emailjs
            .send('service_nejmr0b', 'template_xx9fzg3',
                {
                    to: "enriquebarrerol@gmail.com",
                    to_name: "Dulces Remedios",
                    message: `${getMessage()}`,
                    reply_to: emailCliente,
                }, {
                publicKey: 'MGzWBYZ9ArYrI6mgE',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    showMailHandle()
                },
                (error) => {
                    console.log('FAILED...', error.text)
                },
            );
    }

    return (
        <div>
            <span className="flex justify-center px-2 text-lg mt-2 text-gray-500">****************************</span>
            {cart.map((product, index) => (
                <div key={index} className="flex flex-col px-2 text-sm">
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
                <div className="flex flex-col">
                    <div className="text-darker-pink p-2 rounded-full border border-darker-pink">
                        <svg onClick={sendMailHandle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
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
            {showMail && (
                <div className="flex flex-col">
                    <span className="text-lg">Email enviado correctamente</span>
                </div>
            )}
        </div>
    )
}

