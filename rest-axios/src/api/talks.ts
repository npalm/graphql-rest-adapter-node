import axios from 'axios';

interface TalksData {
    content: TalkData[]
}

export interface TalkData {
    id: number
}

export const getAllTalks = async () => {
    const data = await axios.get<TalksData>('http://localhost:8080/talks')
    return data.data.content;
}

interface SpeakersData {
    content: Speaker[]
}

interface Speaker {
    id: number
}

export const getSpeakersForTalk = async (id: number) => {
    const data = await axios.get<SpeakersData>(`http://localhost:8080/talks/${id}/speakers`)
    return data.data.content;
}


