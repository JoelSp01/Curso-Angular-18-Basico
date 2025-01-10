import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CharacterInterface } from '../../../../interfaces/character.interface';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-character-card',
  imports: [NgOptimizedImage],
  standalone: true,
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCardComponent {
  character = input.required<CharacterInterface>();
}
