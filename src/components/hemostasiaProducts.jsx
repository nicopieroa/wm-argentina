import data from '../assets/data/hemostasis.json'

import { Button } from '@mantine/core'
import { AlertErrorComponent } from './alertErrorComponent';

import { useState } from 'react';
import { ContactSection } from './contactSection';

export function HemostasiaProducts() {
    const [expandedCards, setExpandedCards] = useState({});

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

    const handleVerMásButton = (productId) => {
        setExpandedCards((prevExpandedCards) => ({
            ...prevExpandedCards,
            [productId]: !prevExpandedCards[productId],
        }));
    };

    return (
        <>
            {data ?
                <main className='flex flex-col gap-y-32 text-center px-twoDotFivePercent py-64 sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
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
                                    <div key={product.id} className='w-85 flex flex-col gap-y-6 items-center justify-center bg-blue-800/30 border-blue-600 border-2 rounded p-8'>
                                        <div className='w-full h-44 rounded-md border'>
                                            <img src={product.image.url} alt={product.image.alt} className='w-full h-full object-center rounded-md' />
                                        </div>

                                        <h3 className='text-blue-600 font-semibold text-2xl'>
                                            {product.name}
                                        </h3>

                                        <div>
                                            <p className={`${expandedCards[product.id] ? '' : 'textDescriptionCard'} mb-2 text-blue-600`}>
                                                {product.description}
                                            </p>

                                            <Button size="xs" className='text-white bg-blue-600 hover:text-blue-600 hover:bg-transparent border-blue-600 transition-all duration-150' compact onClick={() => handleVerMásButton(product.id)}>
                                                {expandedCards[product.id] ? 'Ver menos' : 'Ver más'}
                                            </Button>
                                        </div>

                                        <DownloadPdfButton pdfUrl={product['technical-sheet']} pdfName={`${product.name}.pdf`} />

                                        <a href={product['moreInformationUrl']} target='_blank' rel='noreferrer' className='text-blue-600 bg-transparent border rounded-3xl border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-150 px-4 py-2 font-semibold text-sm'>
                                            Más información
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    <ContactSection />

                </main>
                : <AlertErrorComponent />}
        </>
    )
}