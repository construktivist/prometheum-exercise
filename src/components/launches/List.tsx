import { FunctionComponent } from 'react';
import { PastLaunchType } from '../../types/GlobalTypes';
import ListItem from './ListItem'; 

//Accepts array for past launches as props from Launches and passes data to ListItem.
const List: FunctionComponent<{launches: PastLaunchType[]}>  = ({ launches }) => {
    return (
        <div className="row">
            <div className="container">
                {!launches.length ? (
                    <div>No Results</div>
                ) : (
                    launches.map(launch => {
                        return (
                            <ListItem 
                                key={launch.id}
                                id={launch.id}
                                missionName={launch.mission_name}
                                launchDate={launch.launch_date_unix}
                                rocketId={launch.rocket.info.id}
                                rocketName={launch.rocket.rocket_name}
                                launchSuccess={launch.launch_success}
                                launchSite={launch.launch_site.site_name_long}
                                launchDetails={launch.details}
                                article={launch.links.article_link}
                            />
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default List;