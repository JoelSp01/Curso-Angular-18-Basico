import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersServiceService } from '../../services';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../../interfaces/character.interface';
import { CharacterCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContainerComponent {
  private charactersService = inject(CharactersServiceService);
  characters$ : Observable<CharacterInterface[]> = this.charactersService.getCharacters();

}
