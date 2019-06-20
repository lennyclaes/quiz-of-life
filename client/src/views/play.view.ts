import { View } from '../modules/view.module';


export class PlayView extends View {
    constructor() {
        super(`<h1>Play</h1>`);
    }


    onLoad() {
        this.name('Wachten op andere spelers');
    }
}