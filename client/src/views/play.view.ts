import { View } from '../modules/view.module';


export class PlayView extends View {

    socket: any;

    player: any;
    nameElement: Element;
    scoreElement: Element;

    constructor(socket: Object) {
        super(`
            <div class="player">
                <p class="player__info js-player-name"></p>
                <p class="player__info">Score: <span class="js-player-score"></span></p>
            </div>
            <div class="game-window">

            </div>
        `);

        this.socket = socket;
        console.log(socket);
    }




    onLoad() {
        this.name('Wachten op andere spelers');

        this.nameElement = document.querySelector('.js-player-name');
        this.scoreElement = document.querySelector('.js-player-score');

        this.socket.on('server:data:player-info')
        .then((data: any) => {
            if(data.msg != null) {
                this.player = data.msg;
                this.nameElement.innerHTML = data.msg.name;
                this.scoreElement.innerHTML = data.msg.score;
            } else {
                console.log('no player found');
                (<any>window.history).navigate({}, document.title, '/');
            }
        });
        this.socket.emit('client:data:player-info', {});
    }
}