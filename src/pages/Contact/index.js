import React, { useState } from 'react';
import './Contact.css';

import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Form from '../../components/Form';
import { Input, TextArea, Submit } from '../../components/Input';


const Contact = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className="Contact">
            <Title>Contact</Title>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris nec risus hendrerit, pretium ligula at, blandit justo.
                Sed ut tempus urna, nec posuere lorem. In ullamcorper, libero nec placerat sollicitudin.
            </Paragraph>

            <Form>
                <Input 
                    type = 'text' 
                    name = 'name' 
                    placeholder = 'Name' 
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                />
                
                <Input 
                    type = 'text' 
                    name = 'email' 
                    placeholder = 'Email' 
                    value = {email}
                    onChange = {e => setEmail(e.target.value)}
                />

                <TextArea 
                    name = 'message' 
                    placeholder = 'Message...' 
                    value = {message}
                    onChange = {e => setMessage(e.target.value)}
                />      

                <Submit>Send it</Submit>
            </Form>
        </div>
    );
}

export default Contact;