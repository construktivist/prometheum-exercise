import { FunctionComponent } from 'react';

//Props interface type
interface IProps {
    number: number
    propellant1: string
    propellant2: string
    thrustToWeight: number
    type: string
    version: string
}

//Accepts engine specifications as props and displays data.
const EngineSpec: FunctionComponent<IProps> =  props => {
    const {
        number,
        propellant1,
        propellant2,
        thrustToWeight,
        type,
        version
    } = props;

    return(
        <div className="info-container">
            <h3>Engine Specifications:</h3>
            <table>
                <tr>
                    <td>Type:</td><td>{type}</td>
                </tr>
                <tr>
                    <td>Version:</td><td>{version}</td>
                </tr>
                <tr>
                    <td>Number:</td><td>{number}</td>
                </tr>
                <tr>
                    <td>Propellants:</td><td>{propellant1} and {propellant2}</td>
                </tr>
                <tr>
                    <td>Thrust to Weight</td><td>{thrustToWeight}</td>
                </tr>
            </table>
        </div>
    )
}

export default EngineSpec;