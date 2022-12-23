import Button from '../../components/forms/Button'
import Hero_image from './home_illustration.png'
import './home.css'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="home">
            <div className='flex'>
                
                <div className='hero_image containerhome'>                 
                    <img src={Hero_image} />
                </div>
                <div className='headline containerhome'>
                    <h1 className='title'>El mejor maquillaje</h1>
                    <h2 className='content'>Al mejor precio y al alcance de tu mano</h2>
                    <Link to={'/productos'}><Button style="fill">Empezar a comprar!</Button></Link>
                </div>
            </div>
        </section>
    );
}

export default Home;