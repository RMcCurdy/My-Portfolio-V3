import { Element } from 'react-scroll';

const Projects = () => {
    return (
        <Element name='projects' className='projects-container section-padding'>
            <div className='projects-header-container'>
                <h1 className='heading-secondary'>Projects</h1>
            </div>
            <div className='projects-content-container'></div>
        </Element>
    );
};

export default Projects;
