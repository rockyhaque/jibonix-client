import { Link } from 'react-router-dom';
import '../Navbar/navbar.css';

const Navbar = () => {
    const list = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/requests">Help Requests</Link></li>
            <li><Link to="/locations">Affected Areas</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login/Logout</Link></li>
        </>
    );

    return (
        <div className="navbar-container bg-black">
            <nav className="navbar">
                <div className="navbar-container container">
                    <input type="checkbox" name="" id="menu-toggle" />


                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>


                    <ul className="menu-items">
                        {list}
                    </ul>


                    <h1 className="logo">Jibonix</h1>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
