import { useState } from 'react'
import Form from './Form'
import Caret from './Caret';

export default function General() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [isExpanded, setExpanded] = useState('true');

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    }

    return (
        <div>
            <h2 style={{
                backgroundColor: 'white',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
             }}>
                General Information
                <Caret  isExpanded={isExpanded} onClick={toggleExpand}></Caret>
            </h2>
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

