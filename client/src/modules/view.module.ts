export abstract class View {
    private html: string;

    /**
     * Creates a new view instance.
     * @param html The HTML for the view
     */
    constructor(html: string) {
        this.html = html;
     }

    render(): string {
        return this.html;
    }

    name(name: string): void {
        document.querySelector('.pagename').innerHTML = name;
    }
}