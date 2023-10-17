import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget';

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
                        <button className='button'>PS4/PS5</button>
                    </li>
                    <li>
                        <button className='button'>XBOX</button>
                    </li>
                    <li>
                        <button className='button'>PC</button>
                    </li>
                </ul>
            </div>
                <CartWidget />
        </div>
    )
};

export default NavBar;