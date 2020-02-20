import { Song } from './song';

export interface Playlist {
    id: number;
    name: string;
    imgUrl: string;
    rate: number;
    hidden: boolean;
    songs: Song[];
    user: string;
}