import { gql, useQuery } from '@apollo/client';
import List from '../components/List';
import  { GetPastLaunchesVarsType } from '../types/GlobalTypes';
import  { GetPastLaunchesResponseType } from '../types/APIResponseTypes';

const GET_PAST_LAUNCHES = gql`
    query GetPastLaunches($limit: Int) {
        launchesPast(limit: $limit) {
            details
            id
            launch_date_unix
            launch_site {
                site_name_long
            }
            launch_success
            links {
                article_link
            }
            mission_name
            rocket {
                rocket_name
                info: rocket {
                    id
                }
            } 
        }
    }  
`;

const Launches: Function = () => {
    const { data, loading, error } = useQuery<GetPastLaunchesResponseType, GetPastLaunchesVarsType>(
        GET_PAST_LAUNCHES, 
        { variables: { limit: 20 } }
    );

    if(loading) {
        return <p>loading...</p>
    }

    if(error) {
        return <p>error!</p>
    }

    if (data) {
        return (
            <List launches={data.launchesPast} />
        )
    }
}

export default Launches
