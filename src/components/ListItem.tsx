import { FunctionComponent, useState } from 'react';
import ListDetails from './ListDetails';
import { convertUnixTimeToString } from '../helpers';
import RocketInfo from './RocketInfo';


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
    const convertedDateTime = convertUnixTimeToString(launchDate);

    const [isVisible, toggleVisible] = useState(false);

    return (
        <div id={`listItem-${id}`} className="list-item">
            <div className="list-content">
                <p>{missionName}</p>
                <p>{convertedDateTime}</p>
                <p>{rocketName}</p>
                <p>{`SUCCESS: ${launchSuccess}`}</p>
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