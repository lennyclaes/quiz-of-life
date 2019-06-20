import { Router } from "./modules/router.module";
import { Menu } from "./modules/menu.module";

import { IndexView } from "./views/index.view";
import { PlayView } from "./views/play.view";
import { Socket } from "./modules/socket.module";
import { ControlView } from "./views/control.view";

(<any>window.history).navigate = function navigate(object: Object, title: string, url: string) {
    window.history.pushState(object, title, url);
    window.dispatchEvent(new Event('pushstate'));
}

const s = new Socket();

let router: Router = new Router([
    { path: '/', view: new IndexView(s) },
    { path: '/play', view: new PlayView(s) },
    { path: 'control', view: new ControlView(s) }
]);

router.route();

window.addEventListener('scroll', () => {
    console.log('scroll');
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
})

//#region "Register SW"
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
            console.log('SW Registered');
        }).catch(err => {
            console.error('SW Registration failed: ', err);
        })
    })
}
//#endregion