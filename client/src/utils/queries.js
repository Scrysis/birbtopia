import { gql} from '@apollo/client';

export const QUERY_BIRBS = gql`
    query getBirbs {
        Birbs {
            _id
            appearance
        }
    }
`;

export const QUERY_SINGLE_BIRB = gql`
    query getSingleBirb($birbID: ID!){
        birb(birbID: $birbID){
            _id
            birbname
            appearance
            food
            happiness
            lastTimeFed
            lastTimePetted
            health
            magic
            stamina
        }
    }
`;