import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div>
                <img src={'./images/logoJoystick.png'} alt="Logo" width={150}/>
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
        </div>
    )
};

export default NavBar;