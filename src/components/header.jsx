import { Burger, Drawer, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import wmaLogo from '../assets/images/wma-w-logo.svg'
import dropdownIcon from '../assets/icons/dropdownArrow.svg'

import { useEffect, useState } from 'react';

export function Header() {
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsNavbarVisible(currentScrollPos <= prevScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header>
            <nav className={`w-full flex justify-between items-center px-3 py-3 fixed top-0 left-0
          bg-white shadow-[0_12px_20px_rgba(0,0,0,0.1)] transition-opacity duration-300
          ${isNavbarVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                <img src={wmaLogo} alt="Logo de WM Argentina" className="w-16" />

                <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#004e91" />
            </nav>

            <Drawer opened={opened} onClose={toggle} position="right" size="272px" className="">
                <aside className="w-full bg-[#004e91] h-full grid gap-y-10 place-content-center text-white">
                    {opened ? (
                        <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#ffffff" className="absolute top-3 right-7" />
                    ) : null}

                    <Menu trigger="hover" openDelay={100} closeDelay={200}>
                        <Menu.Target>
                            <Button className='flex items-center text-2xl hover:bg-transparent'>
                                <span>Productos</span>
                                <img src={dropdownIcon} alt="Flecha de despliegue de menu"
                                    className="w-10 ml-4" />
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

                    <span className='text-2xl text-center font-semibold transition-all duration-300 
                    hover:underline hover:decoration-white cursor-pointer'>Empresa</span>
                    <span className='text-2xl text-center font-semibold transition-all duration-300 
                    hover:underline hover:decoration-white cursor-pointer'>Atención al cliente</span>
                    <span className='text-2xl text-center font-semibold transition-all duration-300 
                    hover:underline hover:decoration-white cursor-pointer'>Contactanos</span>
                </aside>
            </Drawer>
        </header>
    )
}