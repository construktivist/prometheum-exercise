import { PastLaunchType } from './GlobalTypes'
import { RocketInfoType } from './GlobalTypes'

export interface GetPastLaunchesResponseType {
    launchesPast: PastLaunchType[]
}

export interface GetRocketInfoResponseType {
    rocket: RocketInfoType
}
