import caretUp from '../assets/caret-up.svg';
import caretDown from '../assets/caret-down.svg';

export default function Caret({isExpanded, onClick}) {
    return (
        <img
        src={!isExpanded ? caretUp : caretDown}
        alt={!isExpanded ? 'Collapse' : 'Expand'}
        style={{ cursor: 'pointer', marginLeft: '10px', height: '30px', width: '30px' }}
        onClick={onClick}
        />
    )
}