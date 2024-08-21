import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {Link} from 'react-router-dom'
import {FunctionComponent, ReactElement} from 'react'
import {getAllStudents} from '../../api/studentApi.ts'
import Student from '../../models/student.ts'

const Class: FunctionComponent = () => {
    const students = getAllStudents()

    const studentItem = (s: Student): ReactElement => (
        <ListGroupItem key={s.id}>
            {/**
              * De eerste link gebruikt een pad dat relatief ten opzichte van het huidige pad is.
              * Dit betekent dat onderstaande link de gebruiker naar /class/hetIdVanDeStudent zal sturen,
              * net zoals de tweede link.
              **/}
            <Link to={`${s.id}`}>
                {s.name}
            </Link>


            {/*<Link to={`/class/${s.id}`}>*/}
            {/*    {s.name}*/}
            {/*</Link>*/}
        </ListGroupItem>
    )

    return (
        <>
            <Card>
                <Card.Header>Class</Card.Header>

                <ListGroup>
                    {students.map(s => studentItem(s))}
                </ListGroup>
                <Card.Footer className="text-muted">
                    <Link to={'/'}>Back</Link>
                </Card.Footer>
            </Card>
        </>
    )
}

export default Class
