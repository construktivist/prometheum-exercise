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

export interface GetPastLaunchesVarsType {
    limit: number
}

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

export interface GetRocketInfoVarsType {
    rocketId: number
}