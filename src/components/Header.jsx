import Caret from "./Caret";

export default function Header({title, isExpanded, toggleExpand}) {
return (
    <h2 style={{
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
     }}>
        {title}
        <Caret isExpanded={isExpanded} onClick={toggleExpand}/>
    </h2>
    );
}