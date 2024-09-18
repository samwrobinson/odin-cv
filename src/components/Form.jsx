import { useState } from "react";

export default function Form({ label, type, name, id, value, onChange }) {

    return (
        <div style={{
            backgroundColor: 'white',
             padding: '20px',
             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}
        }>
            <label htmlFor={id}>{label}: </label>
            <input type={type} id="firstName" name={name} value={value} onChange={onChange}/>
        </div>
    )

}