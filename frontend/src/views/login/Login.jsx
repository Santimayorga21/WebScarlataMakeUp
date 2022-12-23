import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import Button from "../../components/forms/Button";

import './login.css'

function Login() {

    return (
        <section className='login'>
            <Link to="/"><Logo size='60px' showtext={true} /></Link>
            <div className='containerlogin'>
                <h1>¡Bienvenidos!</h1>
                <form className="flex card form">
                    <ul className='menulogin'>
                        <li><h5>Usuario: </h5><input className="input"></input></li>
                        <li><h5>contraseña: </h5><input className="input"></input></li>
                        <li><Button style="fill">Iniciar Sesión</Button></li>
                    </ul>
                </form>
            </div>
        </section>
    );
}

export default Login