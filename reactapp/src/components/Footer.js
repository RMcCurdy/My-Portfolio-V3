import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-content-container'>
                <div>
                    <h1 className='footer-header'>Robert McCurdy</h1>
                    <p className='footer-text'>University Student and aspiring Web Developer</p>
                </div>
                <div className='footer-icons-container'>
                    <div className='footer-icons first-icon-mobile' onClick={() => window.open('https://www.linkedin.com/in/robert-mccurdy/', '_blank')}>
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
                <p className='footer-copyright-text'>© Copyright 2022</p>
            </div>
        </div>
    );
};

export default Footer;
