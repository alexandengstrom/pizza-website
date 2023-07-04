import {useRef} from "react"
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);

    const showNavbar = () => {
        navRef.current?.classList.toggle("responsive-nav"); 
    }

    showNavbar()

    return (
        <>
        <header>
            <h3>Super Mario Pizza</h3>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/menu" onClick={showNavbar}>Menu</Link>
                <Link to="/about" onClick={showNavbar}>About us</Link>
                <Link to="/contact" onClick={showNavbar}>Contact</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
        </>
    )
}

export default Navbar