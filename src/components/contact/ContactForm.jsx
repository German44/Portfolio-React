import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('https://formspree.io/f/mbjveprp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('Formulario enviado con éxito');
            setFormData({
                nombre: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }
    };


    return (
        <form className="w-full mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">

                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder='Name'
                    className="w-full px-3 py-2 border-b-2 rounded-xl bg-black/30 focus:outline-none focus:border-accent"
                />
            </div>

            <div className="mb-4">

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b-2 rounded-xl bg-black/30 focus:outline-none focus:border-accent"
                />
            </div>

            <div className="mb-4">

                <textarea
                    id="message"
                    name="message"
                    placeholder='Message'
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b-2 rounded-xl bg-black/30 focus:outline-none focus:border-accent"
                />
            </div>

            <button
                type="submit"
                className="btn btn-lg"
            >
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
