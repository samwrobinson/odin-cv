import { useState } from "react";
import Form from "./Form";

export default function Skills() {

    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);

    const handleAddSkill = () => {
        if (skill.trim()) {
            setSkillList([...skillList, skill]);  // Correct way to update state
            setSkill('');  // Clear the input field after adding the skill
        }
    };

    return (

        <div style={{
            marginTop: "15px",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
        }}>
            <h2>Skills</h2>
            <Form
            label="Skill"
            type="text"
            name="skills"
            id="skills"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            />
            <button onClick={handleAddSkill}>Add Skill.</button>

            <ul>
                {skillList.map((skillItem, index) => (
                    <li key={index}>{skillItem}</li>
                ))}
            </ul>

        </div>
    )
}