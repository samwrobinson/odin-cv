import { useState } from "react";
import Caret from "./Caret";
import Form from "./Form";
import Header from "./Header";

export default function Education() {
    const [isExpanded, setExpanded] = useState(false);

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
            <Header title="Education" isExpanded={isExpanded} toggleExpand={toggleExpand} />
        </div>
    )
}