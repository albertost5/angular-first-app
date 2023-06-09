import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {
  // @Input() characters: Character[] = []

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) { }
}
