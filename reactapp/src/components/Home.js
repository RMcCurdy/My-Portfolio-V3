import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import { Element } from 'react-scroll';

const Home = () => {
    return (
        <Element name='home' className='home-container'>
            <div className='home-text-container'>
                <h1 className='heading-primary'>
                    Hey, I'm Robert M
                    <span style={{ textTransform: 'lowercase' }}>c</span>Curdy
                </h1>
                <p className='text-primary'>
                    University Student and aspiring Web Developer
                </p>
            </div>
            <div className='home-icons-container'>
                <div
                    className='home-icons'
                    onClick={() =>
                        window.open(
                            'https://www.linkedin.com/in/robert-mccurdy/',
                            '_blank',
                        )
                    }>
                    <LinkedInIcon />
                </div>
                <div
                    className='home-icons'
                    onClick={() =>
                        window.open('https://github.com/RMcCurdy', '_blank')
                    }>
                    <GitHubIcon />
                </div>
                <div
                    className='home-icons'
                    onClick={() =>
                        window.open(
                            'https://drive.google.com/file/d/1CaDL7z_ibbJcyZ6gRmV6OVGgWmW7kU-r/view',
                            '_blank',
                        )
                    }>
                    <ContactPageIcon />
                </div>
            </div>
        </Element>
    );
};

export default Home;
