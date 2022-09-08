import { FunctionComponent, useState } from 'react';
import { DropDownButtonHandlerType } from '../../types/GlobalTypes'
import '../../styles/DropDownNav.css';

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
            <button className="primary-dd-button" onClick={() => {toggleVisible(!isVisible)}}>{ primaryLabel }</button>
            { isVisible && 
                <ul className="dd-list">
                    {downstreamLabels.map((label, index) => {
                        return (
                            <li className="dd-list-item" key={`${label}-${index}`}>
                                <button className="secondary-dd-button" value={label} onClick={(e) => {
                                        buttonHandler(e)
                                        toggleVisible(!isVisible)
                                    }
                                }>{label}</button>
                            </li>
                        )
                    })}
                </ul>
            }    
        </div>
    )
}

export default DropDownNav;