import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import {FunctionComponent} from 'react'
import IMotor from '../models/IMotor.ts'

const StyledCard = styled(Card)`
  text-align: center;
  background-color: #3399ff;
`

const WeatherIcon = styled.img`
  font-size: 6em;
  margin: .2em;
`

const Infocard: FunctionComponent<IMotor> = ({make: make, model: model, type: type, engine: engine, power: power, torque: torque, total_weight: total_weight, year: year}) => {
    return (
        <StyledCard className={'mt-5 w-100'}>
            <Card.Body>
                <Card.Title>{make}: {model}</Card.Title>
            </Card.Body>
            <Card.Body>
                <Card.Title>moto details: </Card.Title>
                <Card.Subtitle>
                    Type: {type}
                    Build: {year}
                    Engine: {engine}
                    Power: {power}
                    Torque: {torque}
                    Weight: {total_weight}</Card.Subtitle>
            </Card.Body>
        </StyledCard>
    )
}

export default Infocard
