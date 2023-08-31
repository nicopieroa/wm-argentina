import imagePresentation1 from '../assets/images/headerImage.jpg'
import imagePresentation2 from '../assets/images/headerImage2.jpg'

export function PresentationSection() {
    return (
        <main className='flex flex-col gap-y-32 text-center px-twoDotFivePercent py-64 sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            {/* mt-20 is for separate with the navbar that has an absolute position */}

            <h1 className="text-4xl font-bold text-[#004e91] lg:text-5xl">
                Mejorando la vida a cada instante
            </h1>

            <section className="flex flex-wrap gap-16 items-center">
                <img src={imagePresentation1} alt="Mujer con brazos extendidos sobre un balcón recibiendo el sol" className="w-full object-cover rounded-md sm:h-80" />

                <p className="text-base text-gray-500 italic font-normal xl:text-xl">
                    Buscamos mejorar la salud y vida mediante innovación y calidad. Ofrecemos
                    productos de alta calidad, colaboramos con socios innovadores y
                    representamos compañías afines. Priorizamos calidad con mejoras continuas
                    y adaptación a necesidades del cliente.
                </p>
            </section>

            <section className="flex flex-wrap gap-16 items-center">
                <img src={imagePresentation2} alt="Mujer con brazos extendidos sobre un balcón recibiendo el sol" className="w-full object-cover rounded-md sm:h-80" />

                <p className="text-base text-gray-500 italic font-normal xl:text-xl">
                    Proporcionamos soluciones de diagnóstico personalizadas, enfoques
                    innovadores y asesoramiento científico para impulsar el crecimiento
                    económico. Nuestra pasión, visión a largo plazo y equipo comprometido
                    generan una cultura de éxito colaborativo.
                </p>
            </section>
        </main>
    )
}