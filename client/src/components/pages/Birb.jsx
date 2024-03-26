import { useQuery} from '@apollo/client';
import { useParams} from 'react-router-dom';

import { QUERY_SINGLE_BIRB } from '../utils/queries';

const SingleBirb = () => {
    const { birbId} = useParams();

    const { loading, data} = useQuery(QUERY_SINGLE_BIRB, {
        variables: { birbId: birbId},
    });

    const birb = data?.Birb || {};

    if (loading) {
        return <div>Getting Birb . . .</div>;
    }

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <div>
                <ul>
                    <li>Birb Name: {birb.birbname}</li>
                    <li>Birb Food: {birb.food}</li>
                    <li>Birb Happiness: {birb.happiness}</li>
                    <li>Birb Health: {birb.health}</li>
                    <li>Birb Magic: {birb.magic}</li>
                    <li>Birb Stamina: {birb.stamina}</li>
                
                </ul>
            </div>
            {birb.appearance.birbAppearance}
        </div>
    );
};

export default SingleBirb;
