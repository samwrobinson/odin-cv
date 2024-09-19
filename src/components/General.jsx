import { useState } from 'react'
import Form from './Form'
import Caret from './Caret';
import Header from './Header';

export default function General() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isExpanded, setExpanded] = useState('false');

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div>
            <Header title="General Information" isExpanded={isExpanded} toggleExpand={toggleExpand}/>
            {isExpanded && (
            <div>
                <Form
                    label="First Name"
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Form
                    label="Last Name"
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Form
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
        )}
        </div>
    )
}

