import {FunctionComponent} from 'react'
import Titel from './example1/Titel.tsx'
import Example2 from './example2/example2.tsx'
import ISubjects from './data/subjects.ts'
import './assets/main.css'

interface ArrayJsxExampleProps {

}

const MainExample2: FunctionComponent<ArrayJsxExampleProps> = () => {
    return (
        <div className={'spacing2'}>
            <Titel vulIn={'Dit is een voorbeed van arrays in JSX'} className={'letter'}></Titel>
            <Example2 subjects={ISubjects}/>
        </div>
    )
}

export default MainExample2
