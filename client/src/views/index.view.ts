import { View } from "../modules/view.module";

export class IndexView extends View {
    socket: any;

    constructor(socket: Object) {
        super(`<h1>Homepage</h1>`);
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