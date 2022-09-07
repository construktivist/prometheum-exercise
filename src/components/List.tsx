import { FunctionComponent } from 'react';
import { PastLaunchType } from '../types/GlobalTypes';
import ListItem from './ListItem'; 


const List: FunctionComponent<{launches: PastLaunchType[]}>  = ({ launches }) => {
    return (
        <div className="list-container">
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
    )
}

export default List;