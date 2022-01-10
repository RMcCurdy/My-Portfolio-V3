import { Element } from 'react-scroll';
import Headshot from '../images/headshot.png';
import Basketball from '../images/basketball.jpg';
import Fishing from '../images/fishing.jpg';
import Valedictorian from '../images/vale.png';

const About = () => {
    const skills = ['React.js', 'JavaScript', 'HTML', 'CSS', 'MySQL', 'ES6', 'LaTeX', 'Python', 'Java', 'C', 'C#', 'C++'];

    return (
        <Element name='about' className='about-container section-padding'>
            <h1 className='heading-secondary'>About</h1>
            <div className='about-content-container'>
                <div className='shadow-container'>
                    <h2 className='heading-section'>Get to know me!</h2>
                    <p className='paragraph-primary'>
                        I'm a 4th year <span className='about-emphasis-text'>Computer Science</span> student studying at the University of Calgary. I am completing my degree in{' '}
                        <span className='about-emphasis-text'>April 2022</span> with a concentration of study in <span className='about-emphasis-text'>Software Engineering</span>.
                    </p>
                    <p className='paragraph-primary'>
                        I graduated high school in 2018 as the <span className='about-emphasis-text'>Valedictorian</span> of my class. I delivered a speech in front of 2,500 people
                        in attendance.
                    </p>
                    <p className='paragraph-primary'>
                        I recently received the <span className='about-emphasis-text'>Pearl and Samuel Huang Scholarship</span>, which is given to 2 Computer Science students who
                        display academic merit and demonstrate community service and leadership.
                    </p>
                </div>
                <div className='about-image-container'>
                    <img className='image-curved' src={Valedictorian} alt='robert-headshot' />
                    {/* <img src={Headshot} alt='robert-headshot' /> */}
                </div>
            </div>
            <div style={{ marginTop: '5rem' }} className='about-content-container'>
                <div className='about-image-container'>
                    <img className='image-curved' src={Basketball} alt='robert-headshot' />
                    <img className='image-curved' src={Fishing} alt='robert-headshot' />
                </div>

                <div className='shadow-container'>
                    <h2 className='heading-section'>My personal life</h2>
                    <p className='paragraph-primary'>
                        When I'm not learning a new language or framework, I love immersing myself in my favourite hobbies. The two that stand out for me are basketball and
                        fishing.
                    </p>
                    <p className='paragraph-primary'>
                        I have been playing basketball all my life, and played at a highly competitive level during highschool. Lately I have picked up fishing with my friends. We
                        love going out on the weekends and trying our best to reel in a good catch at the local lakes.
                    </p>
                </div>
            </div>
            <div style={{ marginTop: '5rem' }} className='about-skills-container'>
                <div className='shadow-container'>
                    <h2 className='heading-section'>My technical skills</h2>
                    <p className='paragraph-primary'>
                        I'm a 4th year Computer Science student studying at the University of Calgary. I am completing my degree in April 2022 with a concentration of study in
                        Software Engineering.
                    </p>
                    <p className='paragraph-primary'>
                        I'm a 4th year Computer Science student studying at the University of Calgary. I am completing my degree in April 2022 with a concentration of study in
                        Software Engineering.
                    </p>
                </div>
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
