import { View } from '../modules/view.module';


export class ControlView extends View {

    socket: any;

    constructor(socket: Object) {
        super(`<h1>Test</h1>`);
        this.socket = socket;
    }


    onLoad() {
        this.socket.on('server:data:control-players')
        .then((data: any) => {
            console.log(data.msg);
        })
        this.socket.emit('client:controller');
        setTimeout(() => {
            this.socket.emit('client:test');  
        }, 1000);
    }
}