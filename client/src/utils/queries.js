import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql`
    query thoughts($username: string) {
        thoughts( username $username) {
            _id
            thoughText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                username
                reactionBody
            }
        }
    }
    `;