import {FunctionComponent, useState} from 'react'
import '../assets/main.css';

const ExampleComponent: FunctionComponent = () => {
    const [firstValue, setNextValue] = useState<number>(0)

    return (
        <div className={'spacing'}>
            {firstValue}
            <button onClick={() => setNextValue(stateValue => stateValue + 1)}>
                Verander de state
            </button>
        </div>
    )
}


export default ExampleComponent
