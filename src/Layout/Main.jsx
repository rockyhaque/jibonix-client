import './main.css'
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className="main-container">
            <Navbar />
            <div className="content-wrapper">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;