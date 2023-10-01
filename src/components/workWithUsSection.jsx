import { Accordion, Button } from '@mantine/core';
import { ResumeForm } from './resumeForm';
import { useState } from 'react';

export function WorkWithUsSection() {
    const [open, setOpen] = useState(false)

    const handleAplyButton = () => {
        setOpen(!open)
    }

    return (
        <main className='flex flex-col gap-y-32 text-center px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <h1 className="text-4xl font-bold text-blue-800 lg:text-5xl">
                Trabaja con nosotros
            </h1>

            <Accordion variant="contained" defaultValue="customization" >
                <Accordion.Item value="Novedad 1" className='bg-white'>
                    <Accordion.Control>
                        Oferta laboral 1
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='flex flex-col gap-y-8'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur, quas esse temporibus aspernatur magni optio.
                                Culpa porro illo facilis odio optio accusamus quisquam
                                ipsum odit ratione? Quisquam, dolores. Minus, delectus!
                            </p>

                            <img className='rounded' src="" alt="" />
                        </div>

                        <Button radius="md" size="md" onClick={handleAplyButton} className='bg-blue-600 hover:bg-blue-700 text-white'>
                            {open ? "NO APLICAR" : "APLICAR"}
                        </Button>

                        {open ? <div className='py-12'><ResumeForm title={"Ingresa tus datos"} /></div> : null}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Novedad 2" className='bg-white'>
                    <Accordion.Control>
                        Oferta laboral 2
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='flex flex-col gap-y-8'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur, quas esse temporibus aspernatur magni optio.
                                Culpa porro illo facilis odio optio accusamus quisquam
                                ipsum odit ratione? Quisquam, dolores. Minus, delectus!
                            </p>

                            <img className='rounded' src="" alt="" />
                        </div>

                        <Button radius="md" size="md" onClick={handleAplyButton} className='bg-blue-600 hover:bg-blue-700 text-white'>
                            {open ? "NO APLICAR" : "APLICAR"}
                        </Button>

                        {open ? <div className='py-12'><ResumeForm title={"Ingresa tus datos"} /></div> : null}
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Novedad 3" className='bg-white'>
                    <Accordion.Control>
                        Oferta laboral 3
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='flex flex-col gap-y-8'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur, quas esse temporibus aspernatur magni optio.
                                Culpa porro illo facilis odio optio accusamus quisquam
                                ipsum odit ratione? Quisquam, dolores. Minus, delectus!
                            </p>

                            <img className='rounded' src="" alt="" />
                        </div>

                        <Button radius="md" size="md" onClick={handleAplyButton} className='bg-blue-600 hover:bg-blue-700 text-white'>
                            {open ? "NO APLICAR" : "APLICAR"}
                        </Button>

                        {open ? <div className='py-12'><ResumeForm title={"Ingresa tus datos"} /></div> : null}
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </main>
    )
}
