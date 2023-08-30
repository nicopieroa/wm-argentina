import { useForm } from '@mantine/form';
import { Textarea, TextInput, Button } from '@mantine/core';

export function ContactSection() {
    const form = useForm({
        initialValues: { name: '', email: '', message: '' },

        validate: {
            name: (value) => (value.length < 1 ? 'Ingrese su nombre' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Mail invalido'),
            message: (value) => (value.length < 1 ? 'Ingrese su mensaje' : null),
        },
    });

    const handleSubmit = () => {
        form.reset()
    }

    return (
        <section id="contactSection" className='sm:px-fivePercent lg:px-tenPercent xl:px-fifteenPercent'>
            <h2 className="text-4xl font-bold text-[#004e91] mb-8 lg:text-5xl">
                Contactanos
            </h2>

            <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-y-8'>
                <TextInput label="Nombre" placeholder="Gustavo" {...form.getInputProps('name')} withAsterisk className='m-0 w-full' />

                <TextInput label="Email" placeholder="gustavo@email.com" {...form.getInputProps('email')} withAsterisk className='m-0 w-full' />

                <Textarea label="Mensaje" placeholder="Mi consulta es sobre..." {...form.getInputProps('message')} withAsterisk className='m-0 w-full' />

                <Button size="lg" variant='filled' type='submit' className='bg-green-600 hover:bg-green-700 m-0'>
                    ENVIAR
                </Button>
            </form>
        </section>
    )
}