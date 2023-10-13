import { Burger, Drawer, Menu, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Navbar } from './navbar';
import dropdownIcon from '../assets/icons/dropdownArrow.svg'

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
            <Navbar isNavbarVisible={isNavbarVisible} opened={opened} toggle={toggle} label={label} />

            <Drawer opened={opened} onClose={toggle} position="right" size="272px" className="md:hidden">
                <aside className="w-full bg-blue-700 h-full grid gap-y-10 place-content-center text-white text-center">
                    {opened ? (
                        <Burger opened={opened} onClick={toggle} aria-label={label} size="44px" color="#ffffff" className="absolute top-3 right-7" />
                    ) : null}

                    <Menu trigger="hover" openDelay={100} closeDelay={200}>
                        <Menu.Target>
                            <Button className='flex items-center text-2xl hover:bg-transparent'>
                                <span>Productos</span>
                                <img src={dropdownIcon} alt="Flecha de despliegue de menu" className="w-10 ml-4" />
                            </Button>
                        </Menu.Target>

                        <Menu.Dropdown className='bg-gray-100 text-center'>
                            <Menu.Label className='text-sm'>
                                Categoria 1
                            </Menu.Label>
                            <Menu.Item className='text-base text-center font-bold hover:underline hover:decoration-blue-800 text-blue-800 transition-all duration-150'>
                                <Link to="/hemostasia">
                                    Hemostasia
                                </Link>
                            </Menu.Item>
                            <Menu.Item className='text-base text-center font-bold hover:underline hover:decoration-blue-800 text-blue-800 transition-all duration-150'>
                                <Link to="/microscopios">
                                    Microscopios
                                </Link>
                            </Menu.Item>
                            <Menu.Item className='text-base text-center font-bold hover:underline hover:decoration-blue-800 text-blue-800 transition-all duration-150'>
                                <Link to="/cuidados-criticos">
                                    Cuidados Críticos
                                </Link>
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label className='text-sm'>
                                Categoria 2
                            </Menu.Label>
                            <Menu.Item className='text-base text-center font-bold hover:underline hover:decoration-blue-800 text-blue-800 transition-all duration-150'>
                                Link
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                    <Link to='/empresa'>
                        <span className='text-2xl font-semibold transition-all duration-300 hover:underline hover:decoration-white cursor-pointer'>
                            Empresa
                        </span>
                    </Link>
                </aside>
            </Drawer>
        </header >
    )
}