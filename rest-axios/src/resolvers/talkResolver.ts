import { getAllTalks, getSpeakersForTalk, TalkData } from '../api/talks'
import { IResolvers } from 'apollo-server'

interface TalkResolver extends IResolvers {
    Query: {
        talks: (parent: any, args: any, context: any, info: any) => Promise<TalkData[]>
    }
}



export const TalkResolver: TalkResolver = {
    Query: {
        talks: async (parent, args, context, info) => {
            return await getAllTalks()
        },
    },

    Talk: {
        speakers: async ({ id }) => {
            return await getSpeakersForTalk(id)
        }
    }



};