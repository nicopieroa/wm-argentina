import wmaLogo from '../assets/images/wma-w-logo.svg'

export function Footer() {
    return (
        <footer className='px-3 py-20 bg-sky-950 text-white flex items-center justify-center flex-wrap gap-y-10'>
            <img src={wmaLogo} alt="Logo de WM Argentina" className="w-16" />

            <div className='w-full flex flex-col gap-y-4 items-center'>
                <h3 className='text-lg font-semibold'>Sedes</h3>

                <div className='w-full flex flex-col gap-y-2 items-center'>
                    <h4 className='text-base text-neutral-300 font-medium'>
                        CABA - Casa Central
                    </h4>
                    <p className='text-sm text-neutral-300 italic'>
                        Angel Peluffo 3944
                    </p>
                </div>

                <div className='w-full flex flex-col gap-y-2 items-center'>
                    <h4 className='text-base text-neutral-300 font-medium'>
                        Mendoza
                    </h4>
                    <p className='text-sm text-neutral-300 italic'>
                        Calle xxxx
                    </p>
                </div>

                <div className='w-full flex flex-col gap-y-2 items-center'>
                    <h4 className='text-base text-neutral-300 font-medium'>
                        Tandil
                    </h4>
                    <p className='text-sm text-neutral-300 italic'>
                        Calle xxxx
                    </p>
                </div>
            </div>

            <div className='w-full flex flex-col gap-y-4 items-center'>
                <h3 className='text-lg font-semibold'>
                    Horarios de atención
                </h3>

                <p className='text-sm text-neutral-300 italic'>
                    Lunes a Viernes de 8 a 17 hs
                </p>
            </div>
        </footer>
    )
}