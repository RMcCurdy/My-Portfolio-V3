import { Element } from 'react-scroll';

const About = () => {
    const skills = ['React.js', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'ES6'];

    return (
        <Element name='about' className='about-container section-padding'>
            <h1 className='heading-secondary'>About</h1>
            <div className='about-content-container'>
                <div className='about-me-container'>
                    <h2>Get to know me!</h2>
                    <p>
                        I'm a Student at the University of Calgary studying
                        Computer Science with a concentration in Software
                        Engineering.
                    </p>
                </div>
                <div className='about-my-skills-container'>
                    <h2>My Skills</h2>
                    
                </div>
            </div>
        </Element>
    );
};

export default About;
