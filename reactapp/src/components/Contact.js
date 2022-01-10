import { Element } from 'react-scroll';
import { useState } from 'react';

const Contact = () => {
    const [toggleSuccess, setToggleSuccess] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submit = () => {
        const mailObject = {
            fromName: name,
            fromEmail: email,
            subject: name,
            body: message,
        };
        const url = 'https://robertapi.azurewebsites.net/api/sendmail';
        console.log('Starting fetch');
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mailObject),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('data is: ', data);
                if (data.isSuccess === true) {
                    console.log('data.isSuccess === true');
                    setToggleSuccess(1);
                    setName('');
                    setEmail('');
                    setMessage('');
                } else {
                    console.log('data.isSuccess === false');
                    setToggleSuccess(2);
                }
            })
            .catch((error) => console.log('Error detected: ' + error));
    };

    // if (resp.isSuccess) {
    //     setToggleSuccess(1);
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    // } else {
    //     setToggleSuccess(2);
    // }

    return (
        <Element name='contact' className='contact-container section-padding'>
            <div className='contact-header-container'>
                <h1 className='conact-heading'>Contact</h1>
            </div>
            <div className='contact-content-container'>
                <label className='contact-input-header' for='name'>
                    Name
                </label>
                <input
                    className='contact-input-field'
                    placeholder='Enter your name'
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    required></input>

                <label className='contact-input-header' for='email'>
                    Email
                </label>
                <input
                    className='contact-input-field'
                    placeholder='Enter your email'
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required></input>

                <label className='contact-input-header' for='message'>
                    Message
                </label>
                <textarea
                    className='contact-textarea-field'
                    placeholder='Enter your message'
                    type='text'
                    id='message'
                    name='message'
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    required></textarea>

                <div className='contact-btn-container'>
                    <p style={{ display: toggleSuccess === 1 ? 'flex' : 'none', alignItems: 'center', margin: '0', marginRight: '1rem', color: 'green', fontFamily: 'Source-R' }}>
                        Success!
                    </p>
                    <p style={{ display: toggleSuccess === 2 ? 'flex' : 'none', alignItems: 'center', margin: '0', marginRight: '1rem', color: 'red', fontFamily: 'Source-R' }}>
                        Error!
                    </p>
                    <button
                        onClick={() => {
                            console.log('Clicked the button');
                            submit();
                        }}
                        className='project-btn'
                        type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </Element>
    );
};

export default Contact;
