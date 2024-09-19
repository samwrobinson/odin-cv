import { useState } from "react";
import Form from "./Form";
import Caret from "./Caret";
import Header from "./Header";

export default function Skills() {

    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);
    const [isExpanded, setExpanded] = useState('false');

    const handleAddSkill = () => {
        if (skill.trim()) {
            setSkillList([...skillList, skill]);  // Correct way to update state
            setSkill('');  // Clear the input field after adding the skill
        }
    };

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
            <Header title="Skills" isExpanded={isExpanded} toggleExpand={toggleExpand}/>
            {isExpanded && (
            <Form
            label="Skill"
            type="text"
            name="skills"
            id="skills"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            >
                <button onClick={handleAddSkill}>Add Skill.</button>
                <ul style={{listStyle: 'none', margin: '0', padding: '0'}}>
                    {skillList.map((skillItem, index) => (
                        <li key={index} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>{skillItem}</li>
                    ))}
                </ul>
            </Form>
            )}
        </div>
    )
}