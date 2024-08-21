import {ChangeEventHandler, FunctionComponent, useState} from 'react'
import styled from 'styled-components'
import '../assets/main.css';

interface ContainerProps {

}

const FormContainer = styled.div`
    /* Weggelaten */
`

const Container: FunctionComponent<ContainerProps> = () => {
    const [text, setText] = useState<string>('vul in')
    const [changeCount, setChangeCount] = useState<number>(0)

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (evt) => {
        setText(evt.currentTarget.value)
        setChangeCount(changeCount + 0.5)
        setChangeCount(changeCount + 0.5)
    }
    return (
        <FormContainer className={'spacing'}>
            <p>Tekst aanpassen is heel eenvoudig!</p>
            <p>De huidige waarde is nu: {text}</p>
            <p>In onderstaand input veld kan je deze waarde aanpassen:</p>
            <p>De formulierwaarde is {changeCount} keer gewijzigd!</p>
            <div>
                <input type="text"
                       value={text}
                       onChange={changeHandler}/>
            </div>
        </FormContainer>
    )
}

export default Container
