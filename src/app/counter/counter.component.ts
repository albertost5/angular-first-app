import { Component } from '@angular/core'

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
})
export class CounterComponent {
    title: string = 'Counter App';
    counter: number = 0;
    base: number = 5;

    operation(value: number) {
        if (value > 0 || (value < 0 && this.counter > 0))
            this.counter += value;
    }
}