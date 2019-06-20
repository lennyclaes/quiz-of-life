module.exports = class Player {

    constructor(name, socket) {
        this.name = name;
        this.score = 0;
        this.socket = socket;
    }

    addPoints(points) {
        this.points += points;
    }

}