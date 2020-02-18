export interface Playlist {
    id: number;
    name: string;
    imgUrl: string;
    rate: number;
    hidden: boolean;
    songs: [];
    user: string;
}