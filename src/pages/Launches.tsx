import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import List from '../components/launches/List';
import { GET_PAST_LAUNCHES } from '../queries'
import  { GetPastLaunchesVarsType } from '../types/GlobalTypes';
import  { GetPastLaunchesResponseType } from '../types/APIResponseTypes';

//Performs GET_PAST_LAUNCHES query and passes the data as props to List component.
const Launches: FunctionComponent = () => {
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

    else {
        return null
    }
}

export default Launches
