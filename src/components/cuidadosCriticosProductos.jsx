import data from '../assets/data/cuidadosCríticos.json'

import { Button } from '@mantine/core'
import { AlertErrorComponent } from "./alertErrorComponent";

import { useState } from 'react';

export function CuidadosCriticosProducts() {
    const [expandedCards, setExpandedCards] = useState({});

    const handleVerMásButton = (productId) => {
        setExpandedCards((prevExpandedCards) => ({
            ...prevExpandedCards,
            [productId]: !prevExpandedCards[productId],
        }));
    };
    const handleLinkClick = (e) => {
        e.preventDefault();

        const userConfirmed = window.confirm('¿Deseas abrir este enlace en una nueva pestaña?');

        if (userConfirmed) {
            window.open(e.target.href, '_blank');
        }
    };

    function DownloadPdfButton({ pdfUrl, pdfName }) {
        const handleDownload = () => {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.target = '_blank';
            link.download = pdfName;
            link.click();
        };

        return (
            <Button className='text-white bg-blue-600 hover:text-blue-600 hover:bg-transparent border-blue-600 transition-all duration-150' onClick={handleDownload}>
                Descargar ficha técnica
            </Button>);
    }

    return (
        <>
            {data ?
                <main className='flex flex-col gap-y-32 text-center px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
                    <h1 className="text-4xl font-bold text-blue-800 lg:text-5xl">
                        {data.title}
                    </h1>

                    <img src={data.image.url} alt={data.image.alt} className='w-full object-cover rounded-md sm:h-80' />

                    <p className='text-base font-medium xl:text-xl text-blue-800'>
                        {data.description}
                    </p>

                    {data.productsCategories.map((productsCategories) => (
                        <section key={productsCategories.id} className='flex flex-col gap-y-16 items-center text-blue-600'>
                            <h2 className='font-bold text-3xl text-center lg:text-4xl'>
                                {productsCategories.name}
                            </h2>

                            <p className='text-base text-center font-medium xl:text-lg'>
                                {productsCategories.description}
                            </p>

                            <div className='flex items-center justify-center gap-8 flex-wrap'>
                                {productsCategories.products.map((product) => (
                                    <div key={product.id} className='w-80 md:w-600 flex flex-col md:flex-row gap-6 items-center bg-blue-800/30 border-blue-600 border-2 rounded p-8'>
                                        <div className='w-full md:w-1/2 h-60 rounded-md border'>
                                            <img src={product.image.url} alt={product.image.alt} className='w-full h-full object-center rounded-md bg-white' />
                                        </div>

                                        <div className='flex flex-col gap-y-4 md:w-1/2'>
                                            <h3 className='text-blue-600 font-semibold text-2xl '>
                                                {product.name}
                                            </h3>

                                            <div>
                                                <p className={`${expandedCards[product.id] ? '' : 'textDescriptionCard'} mb-2 text-blue-600`}>
                                                    {product.description}
                                                </p>

                                                <Button size="xs" compact className='text-white bg-blue-600 hover:text-blue-600 hover:bg-transparent border-blue-600 transition-all duration-150' onClick={() => handleVerMásButton(product.id)}>
                                                    {expandedCards[product.id] ? 'Ver menos' : 'Ver más'}
                                                </Button>
                                            </div>

                                            {product.technicalSheet ?
                                                <DownloadPdfButton pdfUrl={product['technical-sheet']} pdfName={`${product.name}.pdf`} />
                                                : null}

                                            {product.moreInformationUrl ?
                                                <a href={product['moreInformationUrl']} onClick={handleLinkClick} target='_blank' rel='noreferrer' className='text-blue-600 bg-transparent border rounded-3xl border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 px-4 py-2 font-semibold text-sm'>
                                                    Más información
                                                </a>
                                                : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </main>
                : <AlertErrorComponent />}
        </>
    )
}