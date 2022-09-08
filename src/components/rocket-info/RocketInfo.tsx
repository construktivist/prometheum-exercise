import { FunctionComponent, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ROCKET_INFO } from '../../queries' 
import { GetRocketInfoResponseType } from '../../types/APIResponseTypes';
import { GetRocketInfoVarsType, DropDownButtonHandlerType } from '../../types/GlobalTypes';
import Loading from '../global/Loading';
import Error from '../global/Error';
import DropDownNav from '../global/DropDownNav';
import RocketDescription from './RocketDescription';
import RocketSpec from './RocketSpec';
import EngineSpec from './EngineSpec';

//Queries GET_ROCKET_INFO and passes response as props to RocketDescription, RocketSpec and EngineSpec components.
const RocketInfo: FunctionComponent<{ rocketId: number }> = ({ rocketId }) => {

    //Apollo query
    const { data, loading, error } = useQuery<GetRocketInfoResponseType, GetRocketInfoVarsType>(
        GET_ROCKET_INFO, 
        { variables: { rocketId: rocketId } }
    );

    //State
    const [displayInfo, setDisplayInfo] = useState('');
    
    //Button handler for buttons located in DropDownNav component
    const rocketInfoNavHandler: DropDownButtonHandlerType = (e) => {
        const buttonValue = e.currentTarget.value.toLowerCase();
        setDisplayInfo(buttonValue);
    }

    if(loading) {
        return <Loading />
    }

    if(error) {
        return <Error />
    }

    if (data) {
        return (
          <div className="rocket-info-container">
            <DropDownNav 
                primaryLabel={'Rocket Info'}
                downstreamLabels={['Description', 'Rocket Specifications', 'Engine Specifications']}
                buttonHandler={rocketInfoNavHandler} 
            />
            { displayInfo === 'description' && 
                <RocketDescription description={data.rocket.description}/> 
            }
            { displayInfo === 'rocket specifications' && 
                <RocketSpec 
                    diameter={data.rocket.diameter.meters}
                    height={data.rocket.height.meters}
                    mass={data.rocket.mass.kg}
                /> 
            }
            { displayInfo === 'engine specifications' && 
                <EngineSpec 
                    number={data.rocket.engines.number}
                    propellant1={data.rocket.engines.propellant_1}
                    propellant2={data.rocket.engines.propellant_2}
                    thrustToWeight={data.rocket.engines.thrust_to_weight}
                    type={data.rocket.engines.type}
                    version={data.rocket.engines.version}
                /> 
            }
          </div>  
        )
    }

    else {
       return null
    }
}

export default RocketInfo;