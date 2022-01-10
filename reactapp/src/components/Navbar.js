import { useState } from 'react';
import { Link } from 'react-scroll';
import RobertIcon from '../images/headshot.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const mobileWidth = useMediaQuery('(max-width:500px)');

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
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
                    {mobileWidth ? (
                        <div>
                            {toggleMenu ? (
                                <div className='navbar-menu-icon'>
                                    <CloseIcon
                                        onClick={() => {
                                            setToggleMenu(false);
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className='navbar-menu-icon'>
                                    <MenuIcon
                                        onClick={() => {
                                            setToggleMenu(true);
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
            {toggleMenu ? (
                <div className='navbar-menu-container'>
                    <Link
                        onClick={() => {
                            setToggleMenu(false);
                        }}
                        activeClass='active'
                        className='navbar-link navbar-link-color-animation navbar-mobile-link'
                        to='home'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Home
                    </Link>
                    <Link
                        onClick={() => {
                            setToggleMenu(false);
                        }}
                        activeClass='active'
                        className='navbar-link navbar-link-color-animation navbar-mobile-link'
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        About
                    </Link>
                    <Link
                        onClick={() => {
                            setToggleMenu(false);
                        }}
                        activeClass='active'
                        className='navbar-link navbar-link-color-animation navbar-mobile-link'
                        to='projects'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Projects
                    </Link>
                    <Link
                        onClick={() => {
                            setToggleMenu(false);
                        }}
                        activeClass='active'
                        className='navbar-link navbar-link-color-animation navbar-mobile-link'
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}>
                        Contact
                    </Link>
                </div>
            ) : null}
        </>
    );
};

export default Navbar;
