import { Router } from "./modules/router.module";
import { Menu } from "./modules/menu.module";

import { IndexView } from "./views/index.view";
import { AboutView } from "./views/about.view";

let router: Router = new Router([
    { path: '/', view: new IndexView() },
    { path: '/about', view: new AboutView() }
]);

router.route();

new Menu();

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