import { gql } from 'apollo-server';

export const RootSchema = gql`

type Talk {
    id: ID
    title: String
    summary: String
    speakers: [Speaker]
}

type Speaker {
    id: ID
    name: String
    github: String
    blog: String
}

type Query {
    talks: [Talk]
}
`;