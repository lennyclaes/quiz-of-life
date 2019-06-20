import { View } from "../modules/view.module";

export class IndexView extends View {
    socket: any;

    constructor(socket: Object) {
        super(`
            <div class="wrap">
                <h1 class="title" >Wie kent Lenny het best?</h1>
                <h3 class="title-sub">Ontdek het nu!</h3>
                <form class="form js-form">
                    <div class="form-flow">
                        <label class="form__label" for="name">Jouw naam</label><br>
                        <input type="text" class="form__input" name="name" autocomplete="off" />
                    </div>
                    <div class="form-flow">
                        <button type="submit" class="form__submit">IK SPEEL MEE!</button>
                    </div>
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