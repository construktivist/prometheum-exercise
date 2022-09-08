import { FunctionComponent, useState } from 'react';
import { DropDownButtonHandlerType } from '../../types/GlobalTypes'

//Props interface type.
interface IProps {
    primaryLabel: string;
    downstreamLabels: string[]
    buttonHandler: DropDownButtonHandlerType
}


//Dropdown navigation menu that accepts button labels and button handler as props from a parent component.
const DropDownNav: FunctionComponent<IProps> = props => {
    const { primaryLabel, downstreamLabels, buttonHandler } = props;
    const [isVisible, toggleVisible ] = useState(false)

    return (
        <div className="drop-down-nav">
            <button onClick={() => {toggleVisible(!isVisible)}}>{ primaryLabel }</button>
            { isVisible && 
                <ul>
                    {downstreamLabels.map((label, index) => {
                        return (
                            <li key={`${label}-${index}`}>
                                <button value={label} onClick={(e) => {buttonHandler(e)}}>{label}</button>
                            </li>
                        )
                    })}
                </ul>
            }    
        </div>
    )
}

export default DropDownNav;