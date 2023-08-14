import { Accordion } from '@mantine/core';

import newsImage from '../assets/images/newsImage.jpg'

export function NewsSection() {
    return (
        <section className='px-3 py-20 lg:px-12 xl:px-24 xxl:px-48 xxxl:px-72 bg-[#004e91]'>
            <h2 className="text-2xl font-semibold text-white text-center mb-16 lg:text-3xl">
                Novedades
            </h2>

            <Accordion variant="contained" defaultValue="customization" >
                <Accordion.Item value="Novedad 1" className='bg-white'>
                    <Accordion.Control>
                        Novedad 1
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='flex flex-col gap-y-8'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur, quas esse temporibus aspernatur magni optio.
                                Culpa porro illo facilis odio optio accusamus quisquam
                                ipsum odit ratione? Quisquam, dolores. Minus, delectus!
                            </p>
                            <img className='rounded' src={newsImage} alt="" />
                            <a href="">Link</a>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Novedad 2" className='bg-white'>
                    <Accordion.Control>
                        Novedad 2
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='flex flex-col gap-y-8'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur, quas esse temporibus aspernatur magni optio.
                                Culpa porro illo facilis odio optio accusamus quisquam
                                ipsum odit ratione? Quisquam, dolores. Minus, delectus!
                            </p>
                            <img className='rounded' src={newsImage} alt="" />
                            <a href="">Link</a>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="Novedad 3" className='bg-white'>
                    <Accordion.Control>
                        Novedad 3
                    </Accordion.Control>
                    <Accordion.Panel>
                        <div className='flex flex-col gap-y-8'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Pariatur, quas esse temporibus aspernatur magni optio.
                                Culpa porro illo facilis odio optio accusamus quisquam
                                ipsum odit ratione? Quisquam, dolores. Minus, delectus!
                            </p>
                            <img className='rounded' src={newsImage} alt="" />
                            <a href="">Link</a>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </section>
    )
}