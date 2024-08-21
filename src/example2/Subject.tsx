import {FunctionComponent} from 'react'

interface ISubject {

}

const Subject: FunctionComponent<ISubject> = ({name, sp, semester, goals}) => {
    return (
        <div className="subject">
            <div className="subtitle">
                <div>{name}</div>
                {sp} studiepunten - semester {semester}
            </div>
            <div className="content">
                <ul>
                    {goals.map(g => <li key={g.id}>{g.goal}</li>)}
                </ul>
            </div>
        </div>
    )
}


export default Subject
