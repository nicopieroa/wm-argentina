import { Button, Menu } from '@mantine/core'
import { Logo } from './logo'

import dropdownArrow from '../assets/icons/dropdownArrow.svg'
import whatsappWhiteColor from '../assets/icons/whatsapp-whiteColor.svg'
import emailWhiteColor from '../assets/icons/email-whiteColor.svg'

import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer className='px-3 py-32 sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent bg-blue-950 text-white flex items-center justify-center flex-wrap gap-20'>
            <Logo width="96px" />

            <div className='flex flex-wrap justify-center items-center gap-8'>
                <div className='flex flex-col items-center gap-4 text-white'>
                    <Menu trigger="hover" openDelay={100} closeDelay={200}>
                        <Menu.Target>
                            <Button className='flex items-center text-base hover:bg-transparent p-0'>
                                <span>Productos</span>
                                <img src={dropdownArrow} alt="Flecha de despliegue de menu" className="w-8 ml-2" />
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
                                <Link to="/Microscopios">
                                    Microscopios
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
                        <span className='text-base font-semibold hover:underline cursor-pointer'>
                            Empresa
                        </span>
                    </Link>

                    <Link to='/trabaja-con-nosotros'>
                        <span className='text-base font-semibold hover:underline cursor-pointer'>
                            Trabaja con nosotros
                        </span>
                    </Link>
                </div >

                <div className="flex items-center justify-center gap-x-4 py-2 px-3 rounded-lg border border-white">
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className='w-8 transition-all duration-200 grow-animation'>
                        <img src={whatsappWhiteColor} alt="Imagen del logo de whatsapp" className='w-full' />
                    </a>
                    <a href="#contactSection" className='w-9 transition-all duration-200 grow-animation'>
                        <img src={emailWhiteColor} alt="Imagen del logo de un sobre, simbolizando casilla de correo" className='w-full' />
                    </a>
                </div>
            </div>

            <div className='flex flex-col gap-4 items-center'>
                <h3 className='text-2xl font-semibold'>
                    Sedes
                </h3>

                <div className='flex flex-wrap items center gap-8 justify-center'>
                    <div className='flex flex-col gap-y-2 items-center justify-center'>
                        <h4 className='text-base text-neutral-300 font-medium'>
                            CABA - Casa Central
                        </h4>
                        <p className='text-sm text-neutral-300 italic'>
                            Angel Peluffo 3944
                        </p>
                    </div>

                    <div className='flex flex-col gap-y-2 items-center justify-center'>
                        <h4 className='text-base text-neutral-300 font-medium'>
                            Mendoza
                        </h4>
                        <p className='text-sm text-neutral-300 italic'>
                            Calle xxxx
                        </p>
                    </div>

                    <div className='flex flex-col gap-y-2 items-center justify-center'>
                        <h4 className='text-base text-neutral-300 font-medium'>
                            Tandil
                        </h4>
                        <p className='text-sm text-neutral-300 italic'>
                            Calle xxxx
                        </p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-y-4 items-center justify-center'>
                <h3 className='text-2xl font-semibold'>
                    Horarios de atención
                </h3>

                <p className='text-sm text-neutral-300 italic'>
                    Lunes a Viernes de 8 a 17 hs
                </p>
            </div>
        </footer>
    )
}