export function PresentationSection() {
    return (
        <main className="flex flex-col gap-y-16 px-3 py-20 max-w-full">
            <h1 className="text-2xl font-bold text-[#004e91] text-center">
                Mejorando la vida a cada instante
            </h1>

            <section className="flex flex-wrap gap-10 items-center">
                <img
                    src="images/headerImage.jpg"
                    alt="Mujer con brazos extendidos sobre un balcón recibiendo el sol"
                    className="rounded w-full h-40 object-cover" />
                <p className="text-sm text-center text-gray-500 italic">
                    Buscamos mejorar la salud y vida mediante innovación y calidad. Ofrecemos
                    productos de alta calidad, colaboramos con socios innovadores y
                    representamos compañías afines. Priorizamos calidad con mejoras continuas
                    y adaptación a necesidades del cliente.
                </p>
            </section>

            <section className="flex flex-wrap gap-10 items-center">
                <img
                    src="images/headerImage2.jpg"
                    alt="Mujer con brazos extendidos sobre un balcón recibiendo el sol"
                    className="rounded h-40 object-cover w-full" />
                <p className="text-sm text-center text-gray-500 italic">
                    Proporcionamos soluciones de diagnóstico personalizadas, enfoques
                    innovadores y asesoramiento científico para impulsar el crecimiento
                    económico. Nuestra pasión, visión a largo plazo y equipo comprometido
                    generan una cultura de éxito colaborativo.
                </p>
            </section>
        </main>
    )
}