import { Alert } from "@mantine/core";

export function AlertErrorComponent() {
    return (
        <Alert className='bg-[#ff000077] border border-[red] px-4 py-8'>
            <h1 className='text-[red] text-xl font-bold text-center mb-4'>
                Error inesperado!
            </h1>
            <p className='text-white text-sm'>
                Ocurrió un error inesperado al intentar obtener la información que está deseando. Intente volver a cargar la página. De persistir el error lo invitamos a ponerse directamente en contacto con nosotros para resolver su consulta. Muchas gracias, y disculpas por el incoveniente.
            </p>
        </Alert>
    );
}