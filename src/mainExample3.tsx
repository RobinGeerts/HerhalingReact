import {FunctionComponent} from 'react'
import {Container} from 'react-bootstrap'
import NavBarNoBootstrap from './navBarNoBootstrap.tsx'
import Routing from './routing.tsx'
import {BrowserRouter} from 'react-router-dom'

interface MainExample3Props {

}

const MainExample3: FunctionComponent<MainExample3Props> = () => {
    return (
        <BrowserRouter>
        <Container className={'spacing2'}>
            <NavBarNoBootstrap></NavBarNoBootstrap>
            <Routing></Routing>
        </Container>
    </BrowserRouter>
    )
}

export default MainExample3
