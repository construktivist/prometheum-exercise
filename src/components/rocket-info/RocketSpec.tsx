import { FunctionComponent } from 'react';

//Props type
interface IProps {
    diameter: number
    height: number
    mass: number
}

//Accepts rocket specification as props from RocketInfo and displays information.
const EngineSpec: FunctionComponent<IProps> =  props => {
    const { diameter, height, mass } = props;

    return(
        <div className="info-container">
            <h3>Rocket Specifications:</h3>
            <table>
                <tr>
                    <td>Diameter:</td><td>{diameter}</td> 
                </tr>
                <tr>
                    <td>Height:</td><td>{height}</td> 
                </tr>
                <tr>
                    <td>Mass:</td><td>{mass}</td> 
                </tr>
            </table>    
        </div>
    )
}

export default EngineSpec;