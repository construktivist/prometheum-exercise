import { FunctionComponent } from 'react';
import '../../styles/RocketInfoSection.css';

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
                <tbody>
                    <tr>
                        <td>Diameter:</td><td>{diameter}</td> 
                    </tr>
                    <tr>
                        <td>Height:</td><td>{height}</td> 
                    </tr>
                    <tr>
                        <td>Mass:</td><td>{mass}</td> 
                    </tr>
                </tbody>
            </table>    
        </div>
    )
}

export default EngineSpec;