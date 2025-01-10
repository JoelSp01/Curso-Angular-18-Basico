import { CharacterInfo } from "../interfaces/character.interface";

export const CharacterAdapter = (characterInfo: CharacterInfo) => {
    return characterInfo.results;
}