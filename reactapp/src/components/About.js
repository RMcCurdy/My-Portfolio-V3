import { Element } from 'react-scroll';
import Basketball from '../images/basketball.jpg';
import Fishing from '../images/fishing.jpg';
import Valedictorian from '../images/vale.png';

const About = () => {
    const skills = [
        'React.js',
        'JavaScript',
        'HTML',
        'CSS',
        'SQL',
        'Git',
        'NodeJS',
        'ES6',
        'Python',
        'Java',
        'LaTeX',
        'C',
        'C#',
        'C++',
        'Haskell',
        'Prolog',
        'Figma',
        'Balsamiq',
        'AdobeXD',
    ];

    return (
        <Element name='about' className='about-container section-padding'>
            <h1 className='heading-secondary'>About</h1>
            <div className='about-content-container'>
                <div className='about-text-container'>
                    <h2 className='heading-section'>Get to know me!</h2>
                    <p className='paragraph-primary'>
                        I'm a 4th year <span className='about-emphasis-text'>Computer Science</span> student studying at the University of Calgary. I will be graduating with a BSc
                        degree in April 2022 with a concentration of study in <span className='about-emphasis-text'>Software Engineering</span>.
                    </p>
                    <p className='paragraph-primary'>
                        I graduated high school in 2018 as the <span className='about-emphasis-text'>Valedictorian</span> of my class. I delivered a speech with 2,500 people in
                        attendance for which I received many accolades.
                    </p>
                    <p className='paragraph-primary'>
                        I recently received the <span className='about-emphasis-text'>Pearl and Samuel Huang Scholarship</span>, which is given to 2 Computer Science students who
                        demonstrate academic merit, community service, and leadership.
                    </p>
                    <p className='paragraph-primary'>
                        I was also awarded <span className='about-emphasis-text'>'Game of the Year'</span> by peers in my{' '}
                        <span className='about-emphasis-text'>Applied Artificial Intelligence in Games</span> class, receiving an A in the course.
                    </p>
                </div>
                <div className='about-image-container'>
                    <img className='image-curved' src={Valedictorian} alt='robert-headshot' />
                    {/* <img src={Headshot} alt='robert-headshot' /> */}
                </div>
            </div>
            <div style={{ marginTop: '5rem' }} className='about-content-container column-reverse-mobile'>
                <div className='about-image-container'>
                    <img className='image-curved' src={Basketball} alt='robert-headshot' />
                    <img className='image-curved' src={Fishing} alt='robert-headshot' />
                </div>

                <div className='about-text-container'>
                    <h2 style={{ marginTop: '0' }} className='heading-section'>
                        My personal life
                    </h2>
                    <p className='paragraph-primary'>
                        When I'm not learning a new language or framework, I enjoy immersing myself in my two favourite hobbies: basketball and fishing.
                    </p>
                    <p className='paragraph-primary'>
                        I have been playing basketball all my life, having played at a highly competitive level during highschool. While at university, I continued this pursuit by
                        playing on intramural teams.
                    </p>
                    <p className='paragraph-primary'>
                        Lately I have picked up fishing with my friends. We regularly go out on weekends and try our best to reel in a good catch at the local lakes.
                    </p>
                </div>
            </div>
            <div style={{ marginTop: '5rem' }} className='about-skills-container'>
                <div className='about-text-container'>
                    <h2 style={{ marginTop: '0' }} className='heading-section'>
                        My skills and work experience
                    </h2>
                    <p className='paragraph-primary'>
                        I have demonstrated leadership ability in all project related work by outlining clear checkpoints, facilitating meetings, and providing constructive
                        feedback to team members. I have been told by professors, TAs, and peers that I exhibit strong communication and presentation skills.
                    </p>
                    <p className='paragraph-primary'>
                        My project work has integrated APIs from GitHub, Riot Games, and Discord. I have experience in game development utilizing AI, custom graphics, and level
                        design.
                    </p>
                    <p className='paragraph-primary'>
                        During the summer of 2021, I worked as a React Front End Developer designing an ordering system that serves over 100,000 customers.
                    </p>
                    <p className='paragraph-primary'>
                        I am currently enrolled in a 1-year software engineering project course where I am the lead developer working with a local law firm to build custom PDF
                        scraping software to generate legal documents.
                    </p>
                    <p className='paragraph-primary'>The languages that I am comfortable and familiar with are as follows:</p>
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
