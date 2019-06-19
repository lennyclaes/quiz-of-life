import { View } from '../modules/view.module';


export class AboutView extends View {
    constructor() {
        super(`<h1>Test</h1>`);
    }


    onLoad() {
        console.log('Page loaded');
    }
}