import { FunctionComponent } from 'react';
import { gql, useQuery } from '@apollo/client';
import { GetRocketInfoResponseType } from '../types/APIResponseTypes'
import { GetRocketInfoVarsType } from '../types/GlobalTypes'

const GET_ROCKET_INFO = gql`
    query Rocket($rocketId: ID!) {
        rocket(id: $rocketId) {
            name
            description
            engines {
                number
                propellant_1
                propellant_2
                thrust_to_weight
                type
                version
            }
            diameter {
                meters
            }
            height {
                meters
            }
            mass {
                kg
            }
        }
    }
`;

const RocketInfo: FunctionComponent<{ rocketId: number }> = ({ rocketId }) => {
    const { data, loading, error } = useQuery<GetRocketInfoResponseType, GetRocketInfoVarsType>(
        GET_ROCKET_INFO, 
        { variables: { rocketId: rocketId } }
    );

    if(loading) {
        return <p>loading...</p>
    }

    if(error) {
        return <p>error!</p>
    }

    if (data) {
        return (
            <p>{data.rocket.name}</p>
        )
    }

    else {
       return (<div>This broke</div>)
    }
}

export default RocketInfo;