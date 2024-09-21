import React from 'react';

const Input = ({ label, id, value, onChange, type = 'text' }) => {
    return (
        <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
            <label htmlFor={id} style={{ marginBottom: '5px' }}>{label}</label>
            <input 
                type={type} 
                id={id} 
                value={value} 
                onChange={onChange}
                style={{
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                }}
            />
        </div>
    );
}

export default Input;
