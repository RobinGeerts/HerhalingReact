import {FunctionComponent} from 'react'
import '../assets/main.css';

interface WoordProps {
    vulIn: string;
    className: string;
}

const Titel: FunctionComponent<WoordProps> = ({vulIn, className}) => {
    return (
        <div className={className}>
            {vulIn}
        </div>
    )
}

export default Titel
