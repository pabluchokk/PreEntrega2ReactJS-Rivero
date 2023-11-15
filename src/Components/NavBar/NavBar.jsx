import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className='title'>
                {/* <img src={'./images/logoJoystick.png'} alt="Logo" width={90} height={80}/> */}
                <h1>
                    <Link to={"/"} className='title'>GearUp</Link>
                </h1>
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/electronics'} className='button'>Electrónicos</Link>
                    </li>
                    <li>
                        <Link to={'/category/jewelry'} className='button'>Joyería</Link>
                    </li>
                    <li>
                        <Link to={"/category/men's clothing"} className='button'>Ropa de hombre</Link>
                    </li>
                    <li>
                        <Link to={"/category/women's clothing"} className='button'>Ropa de mujer</Link>
                    </li>
                </ul>
            </div>
                <CartWidget />
        </div>
    )
};

export default NavBar;