import { Burger, Menu, Button } from '@mantine/core';

import { Logo } from './logo';
import dropdownIconBlue from '../assets/icons/dropdownArrow-blueColor.svg'
import whatsappBlue from '../assets/icons/whatsapp-blueColor.svg'
import { Link } from 'react-router-dom';

export function Navbar({ isNavbarVisible, opened, toggle, label }) {

    return (
        <nav className={`w-full flex justify-between items-center px-twoDotFivePercent py-4 sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent fixed top-0 left-0 bg-white shadow-[0_12px_20px_rgba(0,0,0,0.1)] transition-opacity duration-300 z-10 
        ${isNavbarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

            <Link to='/'><Logo width="64px" /></Link>

            <div className='hidden md:flex items-center gap-x-8'>
                <div className='flex items-center gap-x-4'>
                    <Menu trigger="hover" openDelay={100} closeDelay={200}>
                        <Menu.Target>
                            <Button className='flex items-center text-base hover:bg-transparent p-0'>
                                <span className='text-blue-800'>Productos</span>
                                <img src={dropdownIconBlue} alt="Flecha de despliegue de menu"
                                    className="w-5 ml-2" />
                            </Button>
                        </Menu.Target>

                        <Menu.Dropdown className='bg-gray-100 text-center'>
                            <Menu.Item className='text-base text-center font-bold hover:underline hover:decoration-blue-800 text-blue-800 transition-all duration-150'>
                                <Link to="/hemostasia">Hemostasia</Link>
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    <span className='text-base text-blue-800 text-center font-semibold hover:underline hover:decoration-blue-00 cursor-pointer'>
                        Empresa
                    </span>
                    <span className='text-base text-[#004e91] text-center font-semibold hover:underline hover:decoration-[#004e91] cursor-pointer'>
                        Cliente
                    </span>
                    <span className='text-base text-[#004e91] text-center font-semibold hover:underline hover:decoration-[#004e91] cursor-pointer'>
                        Contactanos
                    </span>
                </div >

                <img src={whatsappBlue} alt="Logo de whatsapp para contactarse" className='w-13' />
            </div>


            <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#004e91" className='md:hidden' />
        </nav >
    )
}