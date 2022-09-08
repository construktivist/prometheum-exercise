import { gql } from '@apollo/client'

//Queries SpaceX API for past launches.
//Accepts limit variable.
export const GET_PAST_LAUNCHES = gql`
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

//Queries SpaceX API for information about a specific rocket.
//Accepts the rocket ID variable.
export const GET_ROCKET_INFO = gql`
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