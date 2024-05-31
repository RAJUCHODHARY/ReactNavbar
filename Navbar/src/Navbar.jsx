import { FaBars, FaTimes } from "react-icons/fa"
import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Navbar.css"
let Navbar = () => {
    let useref = useRef();
    let ShowNavbar = () => {
        useref.current.classList.toggle('Responsive-nave')
    }
    return (
        <>
            <header>
                <h3> <span>L</span>ogo</h3>
                <nav ref={useref}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="aboute">About</NavLink>
                    <NavLink to="contact">Contact</NavLink>
                    <NavLink to="other">Other</NavLink>
                    <Outlet/>
                    <button onClick={ShowNavbar} className="nav-btn nav-close-btn">
                        <FaTimes />
                    </button>
                </nav>
                <button className="nav-btn " onClick={ShowNavbar}><FaBars /></button>
            </header>
        </>
    );
}
export default Navbar