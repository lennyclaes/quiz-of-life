export class Router {
    private routes: Array<Object>;
    private routerOutlet: Element;

    /**
     * Creates a new instance of Router.
     * @param routes Array of routes
     */
    constructor(routes: Array<Object>, routerOutlet?: Element) {
        this.routes = routes;
        this.routerOutlet = routerOutlet || document.querySelector('.router-outlet');

        window.addEventListener('load', () => {
            this.loadPage();
        });
        window.addEventListener('pushstate', () => {
            this.loadPage();
        });
        window.addEventListener('popstate', () => {
            this.loadPage();
        });
    }

    route(): void {
        let links = document.querySelectorAll('a[data-route]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.changeURL(link);
            });
        });
    }

    private changeURL(link: any): void {
        const route = link.dataset.route;
        (<any>window.history).navigate({}, document.title, route);
    }

    private loadPage(): void {
        const route = window.location.pathname;
        const view: any = this.routes.filter((r: any) => {return r.path == route})[0];
        this.routerOutlet.innerHTML = view != null ? view.view.render() : `<h1>Error</h1><p>View ${route} not found</h1>`;
        if(view != null) {
            view.view.onLoad();
        }
    }
}