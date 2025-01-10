import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CharacterInfo, CharacterInterface } from '../interfaces/character.interface';
import { CharacterAdapter } from '../adapters';

@Injectable({
  providedIn: 'root'
})
export class CharactersServiceService {
  private url = 'https://rickandmortyapi.com/api/';
  private charactersUrl: string = this.url + 'character';
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterInterface[]> {
    return this.http
    .get<CharacterInfo>(this.charactersUrl)
    .pipe(map((result: CharacterInfo) => CharacterAdapter(result)));
  }

  getCharacterInformation(url: string): Observable<CharacterInterface[]> {
    return this.http.get<CharacterInterface[]>(url);
  }
}
