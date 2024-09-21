import { useState } from "react";
import Header from "./Header";

export default function Employment() {

    const [isExpanded, setExpanded] = useState(false);
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [duties, setDuties] = useState('');

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    }

    return (
        <>
            <Header title="Employment" isExpanded={isExpanded} toggleExpand={toggleExpand}/>
            {isExpanded && (
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="company">Company: </label>
                    <input 
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    />
                    <label htmlFor="title">Title: </label>
                    <input 
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="start-date">Start Date: </label>
                    <input 
                    type="text"
                    id="start-date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label htmlFor="end-date">End Date: </label>
                    <input 
                    type="text"
                    id="end-date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    />
                    <label htmlFor="duties">Duties: </label>
                    <input 
                    type="text"
                    id="duties"
                    value={duties}
                    onChange={(e) => setDuties(e.target.value)}
                    />
                </form>
            )}
        </>
    )

}