import { Link } from 'react-scroll';
import RobertIcon from '../images/headshot.png';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-content-container'>
                <div className='navbar-icon-and-name-container'>
                    <img className='robert-sunglasses-icon' src={RobertIcon} alt='robert' />
                    <div
                        onClick={() => {
                            window.location.reload(false);
                        }}
                        id='navbar-logo'>
                        robert
                    </div>
                </div>
                <div className='navbar-links-container'>
                    <Link activeClass='active' className='navbar-link navbar-link-color-animation' to='home' spy={true} smooth={true} duration={500}>
                        Home
                    </Link>
                    <Link activeClass='active' className='navbar-link navbar-link-color-animation' to='about' spy={true} smooth={true} duration={500}>
                        About
                    </Link>
                    <Link activeClass='active' className='navbar-link navbar-link-color-animation' to='projects' spy={true} smooth={true} duration={500}>
                        Projects
                    </Link>
                    <Link activeClass='active' className='navbar-link navbar-link-color-animation' to='contact' spy={true} smooth={true} duration={500}>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
