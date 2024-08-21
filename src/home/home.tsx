import {FunctionComponent, Suspense} from 'react'
import useIsEditing from '../hooks/useIsEdditing.ts'
import {Form} from 'react-bootstrap'
import Loading from '../utils/loading.tsx'
import Motor from './motor.tsx'

const Home: FunctionComponent = () => {
    const [selectedMoto, setSelectedMoto, isEditing] = useIsEditing({defaultValue: 'Kawasaki'})

    return (
        <div className={'spacing2'}>
            <h2>Motor</h2>

            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Toon motor info voor:</Form.Label>
                    <Form.Control type="text"
                                  value={selectedMoto}
                                  onChange={setSelectedMoto}/>
                </Form.Group>
            </Form>

            <h2>{isEditing ? 'Editing...' : 'Finished Editing'}</h2>

            <Suspense fallback={<Loading spinnerText={'motor aan het laden'}/>}>
                {selectedMoto !== '' &&
                    <Motor city={selectedMoto} allowFetch={!isEditing}/>}
            </Suspense>
        </div>
    )
}

export default Home
