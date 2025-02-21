import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({});

    const handleConfirm = (event) => {
        event.preventDefault();

        let validationErrors = {};

        const phonePattern = /^[0-9]+$/;
        if (!phonePattern.test(phone)) {
            validationErrors.phone = "Por favor, ingrese solo números en el campo del teléfono.";
        }

        if (!name) {
            validationErrors.name = "Por favor, ingrese su nombre.";
        }
        if (!email) {
            validationErrors.email = "Por favor, ingrese su email.";
        }
        if (!phone) {
            validationErrors.phone = "Por favor, ingrese su teléfono.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const userData = {
            name, phone, email
        }
        onConfirm(userData);
    }

    return (
        <div className="container">
            <form onSubmit={handleConfirm}>

                <div className="field">
                    <label className="label">Nombre y Apellido</label>
                    <div className="control">
                        <input type="text" className="input is-info" placeholder="Ingrese su nombre" value={name} onChange={({ target }) => setName(target.value)} />
                        {errors.name && <p className="help is-danger">{errors.name}</p>}
                    </div>
                </div>

                <div className="field">
                    <label className="label">Teléfono contacto</label>
                    <div className="control">
                        <input className="input is-info" type="text" placeholder="Ingrese su número de teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                        {errors.phone && <p className="help is-danger">{errors.phone}</p>}
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input is-info" type="email" placeholder="Ingrese su correo electrónico" value={email} onChange={({ target }) => setEmail(target.value)} />
                        {errors.email && <p className="help is-danger">{errors.email}</p>}
                    </div>
                </div>

                <div className="field">
                    <button className="button" type="submit">
                        Generar pedido
                    </button>
                    <a className="button-cancel" href="/">
                        Cancelar
                    </a>
                </div>

            </form>
        </div>
    )
}

export default CheckoutForm;
