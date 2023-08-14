import { useForm } from '@mantine/form';
import { Textarea, TextInput, Button, Box } from '@mantine/core';

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
        <section className='px-3 py-20 lg:px-12 xl:px-24 xxl:px-48 xxxl:px-72'>
            <h2 className="text-2xl font-semibold text-[#004e91] text-center mb-16 lg:text-3xl">
                Contactanos
            </h2>

            <Box maw={320} mx="auto">
                <form
                    onSubmit={form.onSubmit(handleSubmit)}
                    className='flex flex-col gap-y-8'>
                    <TextInput
                        label="Nombre"
                        placeholder="Gustavo"
                        {...form.getInputProps('name')}
                        className='m-0' />
                    <TextInput
                        mt="sm"
                        label="Email"
                        placeholder="gustavo@email.com"
                        {...form.getInputProps('email')}
                        className='m-0' />
                    <Textarea
                        label="Mensaje"
                        placeholder="Mi consulta es sobre..."
                        {...form.getInputProps('message')} />

                    <Button
                        variant='filled'
                        type='submit'
                        className='bg-green-600 hover:bg-green-700 m-0'>
                        ENVIAR
                    </Button>
                </form>
            </Box>
        </section>
    )
}