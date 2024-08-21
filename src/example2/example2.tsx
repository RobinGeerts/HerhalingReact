import {FunctionComponent} from 'react'
import Subject from './Subject.tsx'
import {ISubject} from '../models/ISubject.ts'
import Accordion from './accordion.tsx'
import AccordionItem from './accordionItem.tsx'

interface Example2Props {
    subjects: ISubject[]
}

const Example2: FunctionComponent<Example2Props> = ({subjects}) => {

    const output = []
    for (const subject of subjects) {
        output.push((<AccordionItem key={subject.id} openKey={subject.id} title={subject.name}>
            <Subject {...subject}/>
        </AccordionItem>))
    }

    return (
        <Accordion>
            {output}
        </Accordion>
    )
}

export default Example2
