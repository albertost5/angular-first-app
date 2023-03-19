import { Component } from '@angular/core';

interface Character {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  characterArr: Character[] = [
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Vegetta',
      power: 8000
    }
  ];

  newCharacter: Character = {
    name: '',
    power: 0
  }

  add(): void {
    if (this.newCharacter.name.trim().length === 0) {
      console.log('Name value empty.');
      return;
    }

    console.log('addFn', this.newCharacter);

    //  Add the new character to the charArr to be displayed
    this.characterArr.push(this.newCharacter);

    //  Clean the Character object
    this.newCharacter = {
      name: '',
      power: 0
    }
  }
}
