import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {
  // @Input() charactersArr: Character[] = [];

  @Input() newCharacter: Character = {
    name: '',
    power: 0
  }

  // @Output() onNewCharacter = new EventEmitter<Character>();

  // add(): void {
  //   if (this.newCharacter.name.trim().length === 0) {
  //     console.log('Name value empty.');
  //     return;
  //   }

  //   console.log(`[CHILD]: Character to add - ${JSON.stringify(this.newCharacter)}`);

  //   //  Add the new character to the charArr to be displayed
  //   this.onNewCharacter.emit(this.newCharacter);

  //   //  Clean the Character object
  //   this.newCharacter = {
  //     name: '',
  //     power: 0
  //   }
  // }

  addNewCharacter(): void {

    if (this.newCharacter.name.trim().length === 0) {
      console.log('Name value empty.');
      return;
    }

    this.dbzService.addNewCharacter(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0
    }
  }

  constructor(private dbzService: DbzService) { }
}
