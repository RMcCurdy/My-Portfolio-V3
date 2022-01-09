import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';
// import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content-container'>
                <div>
                    <h1 className='footer-header'>Robert McCurdy</h1>
                    <p className='footer-text'>University Student and aspiring Web Developer</p>
                    {/* <div className='footer-link'>
                        <Link
                            style={{ paddingLeft: '0' }}
                            activeClass='active'
                            className='footer-link footer-link-color-animation'
                            to='home'
                            spy={true}
                            smooth={true}
                            duration={500}>
                            Home
                        </Link>
                        <Link activeClass='active' className='footer-link footer-link-color-animation' to='about' spy={true} smooth={true} duration={500}>
                            About
                        </Link>
                        <Link activeClass='active' className='footer-link footer-link-color-animation' to='projects' spy={true} smooth={true} duration={500}>
                            Projects
                        </Link>
                        <Link activeClass='active' className='footer-link footer-link-color-animation' to='contact' spy={true} smooth={true} duration={500}>
                            Contact
                        </Link>
                    </div> */}
                </div>
                <div className='footer-icons-container'>
                    <div className='footer-icons' onClick={() => window.open('https://www.linkedin.com/in/robert-mccurdy/', '_blank')}>
                        <LinkedInIcon />
                    </div>
                    <div className='footer-icons' onClick={() => window.open('https://github.com/RMcCurdy', '_blank')}>
                        <GitHubIcon />
                    </div>
                    <div className='footer-icons' onClick={() => window.open('https://drive.google.com/file/d/1CaDL7z_ibbJcyZ6gRmV6OVGgWmW7kU-r/view', '_blank')}>
                        <ContactPageIcon />
                    </div>
                </div>
            </div>
            <div className='footer-copyright-container'>
                <p className='footer-copyright-text'>© Copyright 2022. Made by Robert McCurdy</p>
            </div>
        </div>
    );
};

export default Footer;
