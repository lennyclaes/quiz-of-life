import { View } from '../modules/view.module';


export class PlayView extends View {

    socket: any;

    constructor(socket: Object) {
        super(`<h1>Play</h1>`);
        
        this.socket = socket;
        console.log(socket);
    }


    onLoad() {
        this.name('Wachten op andere spelers');
        this.socket.on('server:data:player-info')
        .then((data: any) => {
            if(data.msg != null) {
                console.log(data);
            } else {
                console.log('no player found');
                (<any>window.history).navigate({}, document.title, '/');
            }
        });
        this.socket.emit('client:data:player-info', {});
    }
}