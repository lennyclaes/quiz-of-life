import { View } from "../modules/view.module";

export class IndexView extends View {
    socket: any;

    constructor(socket: Object) {
        super(`
            <h1>Wie kent Lenny het best?</h1>
            <h3>Ontdek het nu!</h3>
            <div class="form-wrap">
            <form class="form js-form">
                <label class="form__label" for="name">Jouw naam</label>
                <input type="text" class="form__input"/>
                <button type="submit" class="form__submit">IK SPEEL MEE!</button>
            </form>
            </div>
        `);
        this.socket = socket;
    }

    onLoad() {
        this.name('Quiz of Life');
        this.socket.emit('test', {msg: 'test'});
        this.socket.on('t').then((data: any) => {
            console.log(data);
        })
    }
}