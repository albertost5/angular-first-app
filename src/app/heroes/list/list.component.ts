import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
  heroes: string[] = ['Iron Man', 'Spiderman', 'Hulk', 'Thor'];
  heroDeleted: string = '';
  
  deleteHero(): void {
    console.log('Deleting hero...');
    this.heroDeleted = this.heroes.at(-1) || '';

    console.log('Hero deleted: ', this.heroDeleted);
    this.heroes.splice(this.heroes.length - 1, 1);
  }
}
