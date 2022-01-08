import { Element } from 'react-scroll';
import ValePhoto from '../images/vale-placeholder.png';

const About = () => {
    const skills = ['React.js', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'ES6'];

    return (
        <Element name='about' className='about-container section-padding'>
            <h1 className='heading-secondary'>About</h1>
            <div className='about-content-container'>
                <div>
                    <h2 className='heading-section'>Get to know me!</h2>
                    <p className='paragraph-primary'>
                        I'm a Student at the University of Calgary studying
                        Computer Science with a concentration in Software
                        Engineering.
                    </p>
                </div>
            </div>
            <div>
                <h2 className='heading-section'>My Skills</h2>
                <div className='skills-container'>
                    {skills.map((skill) => (
                        <div className='skill'>{skill}</div>
                    ))}
                </div>
            </div>
        </Element>
    );
};

export default About;
