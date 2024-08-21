import {FunctionComponent} from 'react'
import '../assets/main.css';

interface ParagraafProps {
    text: string
}

const Paragraaf: FunctionComponent<ParagraafProps> = ({text}) => {
    return (
        <div className={'spacing'}>
            {text}
        </div>
    )
}

export default Paragraaf
