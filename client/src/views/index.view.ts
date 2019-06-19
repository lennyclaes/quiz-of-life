import { View } from "../modules/view.module";

export class IndexView extends View {
    socket: any;

    constructor(socket: Object) {
        super(`<h1>Homepage</h1>`);
        this.socket = socket;
    }

    onLoad() {
        console.log('My first pageload');
        this.name('Home');
        this.socket.emit('test', {msg: 'test'});
        this.socket.on('t').then((data: any) => {
            console.log(data);
        })
    }
}