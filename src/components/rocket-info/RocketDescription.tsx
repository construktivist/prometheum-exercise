import { FunctionComponent } from 'react';
import '../../styles/RocketInfoSection.css';

//Accepts rocket description as props and displays information.
const RocketDescription: FunctionComponent<{description: string}> = ({ description })  => {
    return(
        <div className="info-container">
            <h3>Description:</h3>
            <p>{ description }</p>
        </div>
    )
}

export default RocketDescription;