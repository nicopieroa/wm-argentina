import imagePresentation1 from '../assets/images/headerImage.jpg'
import imagePresentation2 from '../assets/images/headerImage2.jpg'

export function PresentationSection() {
    return (
        <main className="flex flex-col gap-y-16 px-3 py-20 lg:px-12 xl:px-24 xxl:px-48 xxxl:px-72 mt-20">
            {/* mt-20 is for separate with the navbar that has an absolute position */}

            <h1 className="text-2xl font-bold text-[#004e91] text-center mdMin:text-3xl">
                Mejorando la vida a cada instante
            </h1>

            <section className="flex flex-wrap gap-10 items-center">
                <img
                    src={imagePresentation1}
                    alt="Mujer con brazos extendidos sobre un balcón recibiendo el sol"
                    className="rounded w-full h-52 object-cover smMin:h-60 mdMin:h-80 lg:h-96" />
                <p className="text-sm text-center text-gray-500 italic smMin:text-base 
                mdMin:text-lg lgMin:text-xl">
                    Buscamos mejorar la salud y vida mediante innovación y calidad. Ofrecemos
                    productos de alta calidad, colaboramos con socios innovadores y
                    representamos compañías afines. Priorizamos calidad con mejoras continuas
                    y adaptación a necesidades del cliente.
                </p>
            </section>

            <section className="flex flex-wrap gap-10 items-center">
                <img
                    src={imagePresentation2}
                    alt="Mujer con brazos extendidos sobre un balcón recibiendo el sol"
                    className="rounded h-52 object-cover w-full smMin:h-60 mdMin:h-80 lg:h-96" />
                <p className="text-sm text-center text-gray-500 italic smMin:text-base 
                mdMin:text-lg lgMin:text-xl">
                    Proporcionamos soluciones de diagnóstico personalizadas, enfoques
                    innovadores y asesoramiento científico para impulsar el crecimiento
                    económico. Nuestra pasión, visión a largo plazo y equipo comprometido
                    generan una cultura de éxito colaborativo.
                </p>
            </section>
        </main>
    )
}