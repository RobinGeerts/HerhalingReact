import Card from 'react-bootstrap/Card'
import {FunctionComponent} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {getStudentById} from '../../api/studentApi.ts'

const Student: FunctionComponent = () => {
    const {id} = useParams()
    const student = getStudentById(Number(id))
    /**
     * De useNavigate hook geeft een functie terug waarmee we kunnen
     * navigeren als gevolg van een user event. Bijvoorbeeld een click.
     */
    const navigate = useNavigate()

    if (!student) {
        return <div>Student could not be found</div>
    }

    return (
        <Card>
            <Card.Header>{student?.name}</Card.Header>
            <Card.Body>
                <Card.Text>Id: {student?.id}</Card.Text>
                <Card.Text>Grade: {student?.grade}</Card.Text>
            </Card.Body>
            <Card.Footer>
                {/* -1 geeft aan dat we één pagina terug willen navigeren. */}
                <div onClick={() => navigate(-1)}>Back</div>
            </Card.Footer>
        </Card>
    )
}

export default Student
