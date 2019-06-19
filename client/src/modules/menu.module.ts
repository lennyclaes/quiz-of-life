export class Menu {
    menuBtn: Element;
    menuElement: Element;
    open: boolean;

    constructor() {
        this.menuBtn = document.querySelector('.js-menu-btn');
        this.menuElement = document.querySelector('.js-side-bar');
        this.open = true;

        this.menuBtn.addEventListener('click', () => {
            this.toggleMenu();
        });
    }

    toggleMenu() {
        if (!this.open) {
            this.menuElement.classList.remove('side-bar--close');
            this.open = true;
        } else {
            this.menuElement.classList.add('side-bar--close');
            this.open = false;
        }
    }
}