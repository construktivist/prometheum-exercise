import { MouseEvent } from 'react';

//Interface for items from GET_PAST_LAUNCHES query response.
export interface PastLaunchType {
    details: string | null
    id: number
    launch_date_unix: number
    launch_site: { site_name_long: string }
    launch_success: boolean
    links: { article_link: string | null }
    mission_name: string
    rocket: { 
        rocket_name: string
        info: {
            id: number
        }
    }
}

//Interface for GET_PAST_LAUNCH variables.
export interface GetPastLaunchesVarsType {
    limit: number
}

//Interface for items from GET_ROCKET_INFO query response.
export interface RocketInfoType {
    name: string
    description: string
    engines: {
        number: number
        propellant_1: string
        propellant_2: string
        thrust_to_weight: number
        type: string
        version: string
    }
    diameter: {
        meters: number
    }
    height: {
        meters: number
    }
    mass: {
        kg: number
    }
}

//Interface for GET_ROCKET_INFO variables.
export interface GetRocketInfoVarsType {
    rocketId: number
}

//Interface for onclick event that occurs on dropdown navigation buttons. 
export interface DropDownButtonHandlerType {
    (e: MouseEvent<HTMLButtonElement>): void
  }