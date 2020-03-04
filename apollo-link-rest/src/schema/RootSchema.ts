import { gql } from 'apollo-server';

export const RootSchema = gql`
type Talk {
    id: ID
    title: String
    speakers: [Speaker]
}

type Speaker {
    id: ID
    name: String
    blog: String
    github: String
}

type Query {
    talks: [Talk]
}
`;