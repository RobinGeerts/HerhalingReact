import {FunctionComponent} from 'react'
import {Col, Row} from 'react-bootstrap'
import Infocard from './infocard.tsx'
import {useGetMotor} from '../api/motorAPI.ts'
import IMotor from '../models/IMotor.ts'

interface MotorProps {
    make: string
    allowFetch: boolean
}

const infocard = (merk: IMotor) => (
    <Col key={merk.make} xs={12} md={3} className="d-flex align-items-stretch">
        <Infocard {...merk}/>
    </Col>
)

const Motor: FunctionComponent<MotorProps> = ({make}) => {
    const model = ''
    const {data: informationData} = useGetMotor(make, model)
    return (
        <Row className={'mb-5'}>
            {informationData?.map(infocard)}
        </Row>
    )
}

export default Motor
