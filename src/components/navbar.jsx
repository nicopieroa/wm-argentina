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
            <nav className="border border-[red] border-solid ">
                <img src="/public/images/wma-w-logo.svg" alt="Logo de WM Argentina"
                    className="w-16" />
            </nav>

            <div className={`fixed z-2 top-0 left-0 bottom-0 right-0 bg-sky-800/50 
            ${open ? "visible opacity-100" : "invisible opacity-0"} 
            backdrop-blur transition-opacity duration-300`}>
            </div>

            <button className={`fixed z-10 m-0 top-0 right-0 grid place-items-center p-0 
            bg-transparent border-0 cursor-pointer transition-transform duration-700 transform 
            ${rotate ? "rotate-360" : ""}`} onClick={handleBurgerButton}>
                <img src="icons/burgerButton.svg" alt="Botón que abre el menu"
                    className={`w-14 ${open ? "hidden" : ""}`} />
                <img src="icons/closeButton.svg" alt="Botón que cierra el menu"
                    className={`w-14 ${open ? "block" : "hidden"}`} />
            </button>

            <aside className={`fixed z-3 top-0 right-0 w-60 h-full p-20 bg-[#004e91] 
            shadow-[0_0_20_rgba(0,0,0,0.7)] ${open ? "translate-x-0" : "translate-x-full"} 
            translate-y-0 transition-all duration-300 flex flex-col`}>
                <a href="">Link 1</a>
                <a href="">Link 2</a>
                <a href="">Link 3</a>
                <a href="">Link 4</a>
                <a href="">Link 5</a>
            </aside>
        </>
    )
}