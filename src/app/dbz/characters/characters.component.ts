import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  @Input() characters: Character[] = []
}
