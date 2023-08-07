import { useState } from "react";

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [rotate, setrotate] = useState(false)

    const handleBurgerButton = () => {
        setOpen(!open)
        setrotate(!rotate)
    }

    return (
        <>
            <nav className="px-3 pt-3">
                <img src="/public/images/wma-w-logo.svg" alt="Logo de WM Argentina"
                    className="w-16" />
            </nav>

            <div className={`fixed z-2 top-0 left-0 bottom-0 right-0 bg-[#004e91]/50 
            ${open ? "visible opacity-100" : "invisible opacity-0"} 
            backdrop-blur transition-opacity duration-300`}>
            </div>

            <button className={`fixed z-10 m-0 top-2 right-2 grid place-items-center p-0 
            bg-transparent border-0 cursor-pointer transition-transform duration-700 transform 
            ${rotate ? "rotate-360" : ""}`} onClick={handleBurgerButton}>
                <img src="icons/burgerButton.svg" alt="Botón que abre el menu"
                    className={`w-16 ${open ? "hidden" : ""}`} />
                <img src="icons/closeButton.svg" alt="Botón que cierra el menu"
                    className={`w-16 ${open ? "block" : "hidden"}`} />
            </button>

            <aside className={`fixed z-3 top-0 right-0 w-64 h-full px-5 bg-[#004e91] 
            shadow-[0_0_20_rgba(0,0,0,0.7)] ${open ? "translate-x-0" : "translate-x-full"} 
            translate-y-0 transition-all duration-300 flex flex-col items-center justify-center 
            gap-5 text-white text-2xl `}>
                <div className="cursor-pointer relative group">
                    <div className="flex items-center gap-1">
                        <span >Productos</span>
                        <img src="icons/arrowDown.svg" alt="Flecha de despliegue de menu"
                            className="w-8" />
                    </div>
                    <div className="border border-[red] border-solid absolute top-10 grid py-4 
                    w-full place-content-center bg-gray-100 text-[#004e91] 
                    shadow-[0_40_40_rgba(0,0,0,0.6)] opacity-0 scale-0 transition-all duration-300 
                    group-hover:opacity-100 group-hover:scale-100 rounded-lg text-xl">
                        <a href="">Link 1</a>
                        <a href="">Link 2</a>
                        <a href="">Link 3</a>
                    </div>
                </div>

                <a href="" className="hover:underline hover:font-medium">Empresa</a>
                <a href="" className="hover:underline hover:font-medium">Atención al cliente</a>
            </aside>
        </>
    )
}