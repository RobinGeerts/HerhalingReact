import {FunctionComponent} from 'react'
import Titel from './example1/Titel.tsx'
import Paragraaf from './example1/Paragraaf.tsx'
import Container from './example1/Container.tsx'
import ExampleComponent from './example1/ExampleComponent.tsx'

interface Props {

}

const MainExample1: FunctionComponent<Props> = () => {

    return (
        <div>
            <ul>
                <li><Titel vulIn={'Eerste titel'} className={'letter'}></Titel></li>
                    <Paragraaf text={'Dit is de eerste paragraaf van de eerste titel'}></Paragraaf>
                <li><Titel vulIn={'Tweede titel'} className={'letter'}></Titel></li>
                    <Paragraaf text={'Dit is de tweede paragraaf van de tweede titel'}></Paragraaf>
                <li><Titel vulIn={'Derde  titel'} className={'letter'}></Titel></li>
                    <Paragraaf text={'Dit is de derde paragraaf van de derde titel'}></Paragraaf>
                <li>
                    <Titel vulIn={'Dit is een voorbeeld van een teller'} className={'letter'}></Titel>
                    <ExampleComponent></ExampleComponent>
                </li>
                <li>
                    <Titel vulIn={'Dit is een voorbeeld van een container'} className={'letter'}></Titel>
                    <Container></Container>
                </li>
            </ul>
        </div>
    )
}


export default MainExample1
