import { Burger, Menu, Button } from '@mantine/core';

import { Logo } from './logo';
import dropdownIconBlue from '../assets/icons/dropdownArrow-blueColor.svg'
import whatsappBlue from '../assets/icons/whatsapp-blueColor.svg'

export function Navbar({ isNavbarVisible, opened, toggle, label }) {

    return (
        <nav className={`w-full flex justify-between items-center px-3 py-3 lg:px-12 xl:px-24 
        xxl:px-48 xxxl:px-72 fixed top-0 left-0 bg-white shadow-[0_12px_20px_rgba(0,0,0,0.1)] 
        transition-opacity duration-300 ${isNavbarVisible ? 'opacity-100 visible' :
                'opacity-0 invisible'}`}>

            <Logo />

            <div className='hidden mdMin:flex items-center gap-x-8'>
                <div className='flex items-center gap-x-4'>
                    <Menu trigger="hover" openDelay={100} closeDelay={200}>
                        <Menu.Target>
                            <Button className='flex items-center text-base hover:bg-transparent p-0'>
                                <span className='text-[#004e91]'>Productos</span>
                                <img src={dropdownIconBlue} alt="Flecha de despliegue de menu"
                                    className="w-5 ml-2" />
                            </Button>
                        </Menu.Target>

                        <Menu.Dropdown className='bg-gray-100 text-center'>
                            <Menu.Label className='text-lg'>Categoria 1</Menu.Label>
                            <Menu.Item className='text-base text-center font-bold hover:underline 
                      hover:decoration-[#004e91] hover:text-[#004e91] transition-all duration-300'>
                                Tipo 1
                            </Menu.Item>
                            <Menu.Item className='text-base text-center font-bold hover:underline 
                      hover:decoration-[#004e91] hover:text-[#004e91] transition-all duration-300'>
                                Tipo 2
                            </Menu.Item>
                            <Menu.Item className='text-base text-center font-bold hover:underline 
                      hover:decoration-[#004e91] hover:text-[#004e91] transition-all duration-300'>
                                Tipo 3
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label className='text-lg'>Categoria 2</Menu.Label>
                            <Menu.Item className='text-base text-center font-bold hover:underline 
                      hover:decoration-[#004e91] hover:text-[#004e91] transition-all duration-300'>
                                Tipo 1
                            </Menu.Item>
                            <Menu.Item className='text-base text-center font-bold hover:underline 
                      hover:decoration-[#004e91] hover:text-[#004e91] transition-all duration-300'>
                                Tipo 2
                            </Menu.Item>
                            <Menu.Item className='text-base text-center font-bold hover:underline 
                      hover:decoration-[#004e91] hover:text-[#004e91] transition-all duration-300'>
                                Tipo 3
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    <span className='text-base text-[#004e91] text-center font-semibold hover:underline hover:decoration-[#004e91] cursor-pointer'>
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


            <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#004e91" className='mdMin:hidden' />
        </nav >
    )
}