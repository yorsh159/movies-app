export interface SearchImages {
    backdrops: Image[];
    id:        number;
    logos:     Image[];
    posters:   Image[];
}

export interface Image {
    aspect_ratio: number;
    height:       number;
    iso_639_1:    ISO639_1;
    file_path:    string;
    vote_average: number;
    vote_count:   number;
    width:        number;
}

export enum ISO639_1 {
    Es = "es",
}