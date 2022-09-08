import { FunctionComponent } from 'react';

//Props interface type.
interface IProps {
    launchSite: string
    launchDetails: string | null,
    article: string | null,
}

//Accepts additional past launch data as props and displays information.
//Conditionally rendered based on state in ListItem.
const ListDetails: FunctionComponent <IProps> = (props) => {
    const { launchSite, launchDetails, article } = props; 

    return (
        <div className="list-details">
            <p>Launch site: {launchSite}</p>
            { launchDetails && <p>Mission summary: {launchDetails}</p> }
            { article && <a href={article} target="_blank" rel="noreferrer">Press article</a> }
        </div>
    )
}

export default ListDetails;