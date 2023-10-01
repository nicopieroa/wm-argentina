import lemaImage from '../assets/images/lemaDeEmpresa.png'

export function AboutUsSection() {
    return (
        <main className='flex flex-col items-center justify-center gap-y-32 text-center px-twoDotFivePercent sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <h1 className="text-4xl font-bold text-blue-800 lg:text-5xl">
                Nuestra Empresa
            </h1>

            <img src={lemaImage} alt="Imagen con una frase qe dice 'Mejorando la vida a cada instante'" className='w-full h-60 object-cover rounded-lg' />

            <section className="flex flex-wrap gap-16 items-center justify-center text-blue-800 bg-blue-600/50 px-tenPercent py-fivePercent rounded-lg">
                <h2 className="font-semibold text-3xl text-center lg:text-4xl">
                    Sobre Nosotros
                </h2>

                <p className="text-base italic font-normal xl:text-xl">
                    Nacimos hace 21 años con el firme propósito de brindar un
                    aporte significativo a la investigación científica, y un
                    excelente servicio al cliente, así como también proveer
                    productos con la mejor tecnología y calidad
                </p>
            </section>

            <section className="flex flex-wrap gap-16 items-center justify-center text-blue-800 bg-blue-600/50 px-tenPercent py-fivePercent rounded-lg">
                <h2 className="font-semibold text-3xl text-center lg:text-4xl">
                    Misión
                </h2>

                <p className="text-base italic font-normal xl:text-xl">
                    Acercar a los profesionales de la salud la más alta tecnología
                    para el diagnóstico y tratamiento, impulsando la transparencia y
                    la honestidad en la concreción de los negocios.
                </p>
            </section>

            <section className="flex flex-wrap gap-16 items-center justify-center text-blue-800 bg-blue-600/50 px-tenPercent py-fivePercent rounded-lg">
                <h2 className="font-semibold text-3xl text-center lg:text-4xl">
                    Visión
                </h2>

                <p className="text-base italic font-normal xl:text-xl">
                    Ser una empresa argentina referente en el sector de la salud,
                    reconocida por su gestión eficiente y transparente.
                </p>
            </section>

            <section className="flex flex-wrap gap-16 items-center justify-center text-blue-800 bg-blue-600/50 px-tenPercent py-fivePercent rounded-lg">
                <h2 className="font-semibold text-3xl text-center lg:text-4xl">
                    Valores
                </h2>

                <div>
                    <h3 className='font-semibold text-2xl mb-8'>
                        Dinamismo
                    </h3>

                    <p className="text-base italic font-normal xl:text-xl">
                        Valoramos la pro-actividad, la búsqueda permanente de la
                        actualización y la vocación de servicio para ofrecer el mejor
                        servicio a nuestros clientes.
                    </p>
                </div>

                <div>
                    <h3 className='font-semibold text-2xl mb-8'>
                        Cercanía
                    </h3>

                    <p className="text-base italic font-normal xl:text-xl">
                        En WM Argentina S.A trabajamos día a día esforzándonos por estar
                        siempre cerca de nuestros clientes, atentos a sus necesidades,
                        buscando promover el derecho a la salud de todos los argentinos.
                    </p>
                </div>

                <div>
                    <h3 className='font-semibold text-2xl mb-8'>
                        Compromiso hacia adentro y hacia afuera de la compañía
                    </h3>

                    <p className="text-base italic font-normal xl:text-xl">
                        Nos comprometemos con el desarrollo del país mediante el trabajo
                        en equipo, en el marco de una gestión empresaria eficiente, transparente
                        y comunicación directa.
                    </p>
                </div>
            </section>

        </main>
    )
}