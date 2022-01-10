import React from 'react';

const ProjectsText = (props) => {
    return (
        <div>
            <h1 className='heading-project'>{props.header}</h1>
            <p className='paragraph-primary project-description-width'>{props.description}</p>
            <div className='project-btn-container'>
                {props.buttonLabel.map((label, index) => {
                    return (
                        <button className='project-btn' onClick={() => window.open(`${props.links[index]}`, '_blank')}>
                            {label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectsText;
