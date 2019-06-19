import { View } from "../modules/view.module";

export class IndexView extends View {
    constructor() {
        super(`<h1>Homepage</h1>`);
    }

    onLoad() {
        console.log('My first pageload');
        this.name('Home');
    }
}