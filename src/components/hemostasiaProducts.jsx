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
            <Button className='bg-[#97aa07] hover:bg-[#798806]' onClick={handleDownload}>
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

                    <p className='text-base font-normal xl:text-xl'>
                        {data.description}
                    </p>

                    {data.productsCategories.map((productsCategories) => (
                        <section key={productsCategories.id} className='flex flex-col gap-y-16 items-center'>
                            <h2 className='text-[#a5bb00] font-semibold text-3xl text-center lg:text-4xl'>
                                {productsCategories.name}
                            </h2>

                            <p className='text-base text-center font-normal xl:text-lg'>
                                {productsCategories.description}
                            </p>

                            <div className='flex items-center justify-center gap-8 flex-wrap'>
                                {productsCategories.products.map((product) => (
                                    <div key={product.id} className='w-85 flex flex-col gap-y-6 items-center justify-center bg-[#a5bb001f] border border-[#a5bb00] rounded p-8'>
                                        <div className='w-full h-44 rounded-md border'>
                                            <img src={product.image.url} alt={product.image.alt} className='w-full h-full object-center rounded-md' />
                                        </div>

                                        <h3 className='text-[#a5bb00] font-semibold text-2xl'>
                                            {product.name}
                                        </h3>

                                        <div>
                                            <p className={`${expandedCards[product.id] ? '' : 'textDescriptionCard'} mb-2`}>
                                                {product.description}
                                            </p>

                                            <Button variant="outline" size="xs" compact onClick={() => handleVerMásButton(product.id)}>
                                                {expandedCards[product.id] ? 'Ver menos' : 'Ver más'}
                                            </Button>
                                        </div>

                                        <DownloadPdfButton pdfUrl={product['technical-sheet']} pdfName={`${product.name}.pdf`} />

                                        <a href={product['moreInformationUrl']} target='_blank' rel='noreferrer' className='text-[#88942d] bg-[#97aa074b] rounded-3xl border border-[#a5bb00] hover:bg-[#97aa07] hover:text-white px-4 py-2 font-semibold text-sm'>
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