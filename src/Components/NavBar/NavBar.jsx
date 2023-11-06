import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className='title'>
                <img src={'./images/logoJoystick.png'} alt="Logo" width={90} height={80}/>
                <h1>GearUp</h1>
            </div>
            <div>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/playstation'} className='button'>PS4/PS5</Link>
                    </li>
                    <li>
                        <Link to={'/category/xbox'} className='button'>XBOX</Link>
                    </li>
                    <li>
                        <Link to={'/category/pc'} className='button'>PC</Link>
                    </li>
                </ul>
            </div>
                <CartWidget />
        </div>
    )
};

export default NavBar;