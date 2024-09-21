import { useState } from "react";
import Input from "./Input";

export default function EducationForm({ educationList, addEducation, children }) {

    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [gpa, setGPA] = useState('');

    const handleAddEducation = () => {
        const newEducation = {
            school,
            degree,
            gpa
        };

        addEducation(newEducation);  // Call the function to add new education

        // Clear the input fields after adding the education
        setSchool('');
        setDegree('');
        setGPA('');
    }

    return (
        <div style={{
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
            <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)' }}>
                <Input 
                    label="School"
                    id="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                />
                <Input
                    label="Degree"
                    id="degree" 
                    value={degree} 
                    onChange={(e) => setDegree(e.target.value)}
                />
                <Input
                    label="GPA"
                    id="gpa" 
                    value={gpa} 
                    onChange={(e) => setGPA(e.target.value)}
                />
                {children}  {/* In case you want to render child elements */}
            </form>
            <button type="button" onClick={handleAddEducation}>Add Education</button>

            <div>
                {educationList.length > 0 && (
                    <div>
                        {educationList.map((edu, index) => (
                            <div key={index} style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                                <div>
                                    <h4>School</h4>
                                    <p>{edu.school}</p>
                                </div>
                                <div>
                                    <h4>Degree</h4>
                                    <p>{edu.degree}</p>
                                </div>
                                <div>
                                    <h4>GPA</h4>
                                    <p>{edu.gpa}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
