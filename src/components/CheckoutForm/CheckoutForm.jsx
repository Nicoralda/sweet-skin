import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleConfirm = (event) => {
        event.preventDefault();

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
                    </div>

                </div>

                <div className="field">
                    <label className="label">Teléfono contacto</label>
                    <div className="control">
                        <input className="input is-info" type="text" placeholder="Ingrese su número de teléfono" value={phone} onChange={({ target }) => setPhone(target.value)} />
                    </div>
                </div>

                <div>
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input is-info" type="email" placeholder="Ingrese su correo electrónico" value={email} onChange={({ target }) => setEmail(target.value)} />
                    </div>
                </div>

                <div>
                    <p>
                        <button>
                            Generar pedido
                        </button>
                    </p>
                    <p>
                        <a>
                            Cancelar
                        </a>
                    </p>
                </div>

            </form>
        </div>
    )
}

export default CheckoutForm;