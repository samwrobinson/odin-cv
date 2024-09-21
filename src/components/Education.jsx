import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import EducationForm from "./EducationForm";

export default function Education() {
    const [isExpanded, setExpanded] = useState(false);
    const [educationList, setEducationList] = useState([]);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    }

    const addEducation = (newEducation) => {
        setEducationList([...educationList, newEducation])
    }

    return (
        <div style={{
            marginTop: "15px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}>
            <Header title="Education" isExpanded={isExpanded} toggleExpand={toggleExpand} />
            {isExpanded && (
                <EducationForm educationList={educationList} addEducation={addEducation} />
            )}
        </div>
    )
}