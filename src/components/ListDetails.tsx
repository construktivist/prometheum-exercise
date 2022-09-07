import { FunctionComponent } from 'react';

interface IProps {
    launchSite: string
    launchDetails: string | null,
    article: string | null,
}

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