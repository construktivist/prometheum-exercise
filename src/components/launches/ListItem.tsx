import { FunctionComponent, useState } from 'react';
import ListDetails from './ListDetails';
import { convertUnixTimeToString } from '../../helpers';
import RocketInfo from '../rocket-info/RocketInfo';

//Props interface type
interface IProps {
    id: number
    missionName: string
    launchDate: number
    rocketId: number
    rocketName: string
    launchSuccess: boolean
    launchSite: string
    launchDetails: string | null
    article: string | null
}

//Accepts past launch props from List and displays information. 
const ListItem: FunctionComponent<IProps> = props => {
    const { id, 
            missionName, 
            launchDate,
            rocketId, 
            rocketName, 
            launchSuccess,
            launchSite,
            launchDetails,
            article
        } = props;

    //Converts unix timestamp to a formatted string.    
    const convertedDateTime = convertUnixTimeToString(launchDate);

    //State
    const [isVisible, toggleVisible] = useState(false);

    return (
        <div id={`listItem-${id}`} className="list-item">
            <div className="list-content">
                <p>Mission: {missionName}</p>
                <p>Launch date: {convertedDateTime}</p>
                <p>Rocket used: {rocketName}</p>
                <p>Launch status: {launchSuccess ? 'Success' : 'Failure'}</p>
            </div>
            <div className="expand-button">
                <button onClick={() => toggleVisible(!isVisible)}>
                    {isVisible ? 'Close' : 'See Details' }
                </button>
            </div>
            { isVisible && 
                <div className="details-section">
                    <ListDetails
                        launchSite={launchSite} 
                        launchDetails={launchDetails}
                        article={article}
                    />
                    <RocketInfo rocketId={rocketId} />
                </div>    
            }
        </div>
    )
}

export default ListItem;