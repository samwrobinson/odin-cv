import { useState } from "react";
import Caret from "./Caret";
import Form from "./Form";

export default function Education() {
    const [isExpanded, setExpanded] = useState(true);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    }
    return (
        <div style={{
            marginTop: "15px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}>
            <h2 style={{
                backgroundColor: 'white',
                padding: '20px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around'
             }}>
                Education
                <Caret isExpanded={!isExpanded} onClick={toggleExpand}/>
            </h2>
        </div>
    )
}