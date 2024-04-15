export class Player {
    #program;
    #x;
    #y;
    #width = 48;
    #height = 48;
    #img;
    #angle = 0;

    constructor(program) {
        this.#program = program;
        this.#x = this.#program.center[0] - this.#width / 2;
        this.#y = this.#program.center[1] - this.#height / 2;
        this.#img = document.createElement('img');
        this.#img.onload = () => this.draw();
        this.#img.src = '/img/player-ship.svg';
        this.#img.width = this.#width;
        this.#img.height = this.#height;


        // this.#img = new Image(this.#width, this.#height);
        // this.#img.src = '/img/player-ship.svg';
        // this.#img.onload = () => this.draw();
    }

    get x() {
        return this.#x;
    }

    get y() {
        return this.#y;
    }

    get angle() {
        return this.#angle;
    }

    foofoo() {
        this.#program.context.drawImage('/img/player-ship.svg', this.#width, this.#height, this.#x, this.#y);
    }

    draw() {
        console.log('this.#program.context', this.#program.context);
        console.log('this.#img', this.#img);
        this.#program.context.drawImage(this.#img, this.#width, this.#height, this.#x, this.#y);
    }
}