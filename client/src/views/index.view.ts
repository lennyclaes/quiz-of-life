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
                        <label class="form__label" for="name">Vul hier jouw naam in</label><br>
                        <input type="text" class="form__input js-name" name="name" autocomplete="off" required />
                    </div>
                    <div class="form-flow">
                        <input type="submit" class="form__submit js-form-submit" value="IK SPEEL MEE!" />
                    </div>
                </form>
            </div>
        `);
        this.socket = socket;
    }

    join(name: string) {
        if(name.length > 0) {
            this.socket.emit('client:join', {
                name: name
            });
            (<any>window.history).navigate({}, document.title, '/play');
        } else {
            console.error('No name provided');
        }
    }

    onLoad() {
        this.name('Kom erbij!');
        const form = document.querySelector('.js-form');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name: string = (<any>document.querySelector('.js-name')).value;
            this.join(name);
        });
    }
}