import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

const birbCard = () => {

    return (
        <div className="mainBirbCard">
            {/* birbCardPic div must contain the birb picture and only the birb picture. */}
            <div className="birbCardPic">

            </div>
        </div>
    )
}