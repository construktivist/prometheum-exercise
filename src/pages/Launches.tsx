import { FunctionComponent } from 'react';
import { useQuery } from '@apollo/client';
import List from '../components/launches/List';
import Jumbotron from '../components/global/Jumbotron';
import Loading from '../components/global/Loading';
import Error from '../components/global/Error';
import { GET_PAST_LAUNCHES } from '../queries';
import  { GetPastLaunchesVarsType } from '../types/GlobalTypes';
import  { GetPastLaunchesResponseType } from '../types/APIResponseTypes';

//Performs GET_PAST_LAUNCHES query and passes the data as props to List component.
const Launches: FunctionComponent = () => {
    const { data, loading, error } = useQuery<GetPastLaunchesResponseType, GetPastLaunchesVarsType>(
        GET_PAST_LAUNCHES, 
        { variables: { limit: 20 } }
    );

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    if (data) {
        return (
            <div className="row">
                <Jumbotron heading="SpaceX: Past Launches" />
                <List launches={data.launchesPast} />
            </div>
        )
    }

    else {
        return null
    }
}

export default Launches
