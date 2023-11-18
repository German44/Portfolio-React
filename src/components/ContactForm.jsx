// ContactForm.js
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para enviar el formulario
        console.log('Formulario enviado:', formData);
    };

    return (
        <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
            <div className="mb-4">

                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder='Nombre'
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
                    placeholder='   Mensaje'
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
