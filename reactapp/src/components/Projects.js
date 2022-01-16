import { Element } from 'react-scroll';
import myGH from '../images/myGH.png';
import Bandwagon from '../images/games-homepage2.png';
import SkipTheBooks from '../images/SkipTheBooks2.png';
import WaitLess from '../images/WaitLess.png';
import DiscordBot from '../images/discord-preview.png';
import ProjectsText from './ProjectsText';

const Projects = () => {
    return (
        <Element name='projects' className='projects-container section-padding'>
            <div className='projects-header-container'>
                <h1 style={{ marginBottom: '0' }} className='heading-secondary'>
                    Projects
                </h1>
            </div>
            <p className='paragraph-primary projects-header-margin-bottom'>These are projects that I have created in my own time and during university classes</p>
            <div className='projects-content-container'>
                <div className='project-content'>
                    <div className='project-image-container'>
                        <img className='image-curved' src={Bandwagon} alt='myGH' />
                    </div>
                    <ProjectsText
                        header='Bandwagon'
                        description={`A web application that utilizes NBA Team's and player data to give accurate predictions for the outcome of games.`}
                        created='Created using ASP.NET Core 5 backend API, Entity Framework Core, a SQLite backend database, and a React JS front end client.'
                        buttonLabel={['GitHub']}
                        links={['https://github.com/RMcCurdy/Bandwagon']}
                    />
                </div>
            </div>
            <div className='projects-content-container'>
                <div className='project-content'>
                    <div className='project-image-container'>
                        <img className='image-curved' src={myGH} alt='myGH' />
                    </div>
                    <ProjectsText
                        header='MyGH'
                        description='A web application that implements the GitHub REST API to show detailed user information.'
                        created={`Created using a React JS front end client and Github's REST API.`}
                        buttonLabel={['GitHub', 'Website']}
                        links={['https://github.com/RMcCurdy/MyGH', 'https://rmccurdy.github.io/MyGH/']}
                    />
                </div>
            </div>
            <div className='projects-content-container'>
                <div className='project-content'>
                    <div className='project-image-container'>
                        <img className='image-curved' src={SkipTheBooks} alt='myGH' />
                    </div>
                    <ProjectsText
                        header='SkipTheBooks'
                        description='Submission for CalgaryHacks2021. A web application that provides students utilities for tracking their school schedule and ordering takeout.'
                        created={`Created using a React JS front end client.`}
                        buttonLabel={['GitHub', 'Website']}
                        links={['https://github.com/RMcCurdy/CalgaryHacks2021', 'https://duan-le.github.io/CalgaryHacks2021/']}
                    />
                </div>
            </div>
            <div className='projects-content-container'>
                <div className='project-content'>
                    <div className='project-image-container'>
                        <img className='image-curved' src={WaitLess} alt='myGH' />
                    </div>
                    <ProjectsText
                        header='WaitLess'
                        description='A mobile application concept to improve the virtual academic advising experience for students by refining a virtual line up system.'
                        created={`Created using Balsamiq and AdobeXD for designing the prototypes.`}
                        buttonLabel={['GitHub', 'Website', 'Demo Video']}
                        links={['https://github.com/RMcCurdy/TeamS_Project', 'https://edmunds13.github.io/#', 'https://youtu.be/492zDqviTfQ']}
                    />
                </div>
            </div>
            <div className='projects-content-container'>
                <div className='project-content'>
                    <div className='project-image-container'>
                        <img className='image-curved' src={DiscordBot} alt='myGH' />
                    </div>
                    <ProjectsText
                        header={`Rob's Discord Bot`}
                        description='An AI that can perform a number of useful automated
                            tasks and bot commands on a Discord server.'
                        created={`Created using JavaScript and Discord's API.`}
                        buttonLabel={['GitHub']}
                        links={['https://github.com/RMcCurdy/Discord-Bot']}
                    />
                </div>
            </div>
        </Element>
    );
};

export default Projects;
