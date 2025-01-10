import { InfoInterface } from "./info.interface";

enum Gender{
    'MALE' = 'Male',
    'FEMALE' = 'Female',
    'GENDERLESS' = 'Genderless',
    'UNKNOWN' = 'unknown'
}

export interface CharacterInfo{
    info: InfoInterface;
    results: CharacterInterface[];
}

export interface LinkedElement {
    name: string;
    link: string;
}

export interface Origin extends LinkedElement{}
export interface Location extends LinkedElement{}


export interface CharacterInterface {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string
    gender: Gender;
    origin: Origin;
    location: Location;
    image: string;
    episode: string[];
    url: string;
    created: string;
}