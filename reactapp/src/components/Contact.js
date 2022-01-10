import { Element } from 'react-scroll';

const Contact = () => {
    return (
        <Element name='contact' className='contact-container section-padding'>
            <div className='contact-header-container'>
                <h1 className='heading-secondary'>Contact</h1>
            </div>
            <div className='contact-content-container'>
                <label className='contact-input-header' for='name'>
                    Name
                </label>
                <input className='contact-input-field' placeholder='Enter your name' id='name' name='name' required></input>

                <label className='contact-input-header' for='email'>
                    Email
                </label>
                <input className='contact-input-field' placeholder='Enter your email' id='email' name='email' required></input>

                <label className='contact-input-header' for='message'>
                    Message
                </label>
                <textarea className='contact-textarea-field' placeholder='Enter your message' id='message' name='message' required></textarea>

                <div className='contact-btn-container'>
                    <button className='project-btn'>Submit</button>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
