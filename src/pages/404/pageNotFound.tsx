
import styled from 'styled-components'
import {FunctionComponent} from 'react'
import {Navigate} from 'react-router-dom'
import useCountdown from '../../utility/useCountdown.ts'

const CounterContainer = styled.div`
    color: azure;
`

const PageNotFound: FunctionComponent = () => {
    const countdown = useCountdown(5)

    if (countdown === 0) {
        /**
         * De Navigate component kan gebruikt worden om het renderen van
         * een component vroegtijdig te stoppen en de gebruiker vervolgens
         * te redirecten naar een andere pagina. Let op, deze component moet
         * steeds de enige gerenderde component zijn. Als deze tussen andere
         * componenten staat, wordt de gebruiker nog steeds geredirect en zijn
         * de andere componenten niet zichtbaar.
         */
        return <Navigate to={'/'}/>
    }

    return (
        <div>
            <CounterContainer>
                Redirecting to home in {countdown} seconds
            </CounterContainer>
        </div>

    )
}


export default PageNotFound
