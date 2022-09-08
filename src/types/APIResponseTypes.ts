import { PastLaunchType } from './GlobalTypes'
import { RocketInfoType } from './GlobalTypes'

//Interface for GET_PAST_LAUNCHES query response type.
export interface GetPastLaunchesResponseType {
    launchesPast: PastLaunchType[]
}

//Interface for GET_ROCKET_INFO response type.
export interface GetRocketInfoResponseType {
    rocket: RocketInfoType
}
