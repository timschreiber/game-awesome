import { Player } from "./player.mjs";

export class Program {
    static #program;
    #canvas;
    #context;
    #canvasRect;
    #player;

    static {
        this.#program = new Program();
    }
    
    constructor() {
        this.#canvas = document.getElementById('canvas');
        this.#context = this.#canvas.getContext('2d');
        addEventListener('resize', this.#handleResize);
        this.#handleResize();
        this.#start();
    }

    #start() {
        this.#player = new Player(this);
        console.log('player', this.#player);
        // this.#update();
    }

    get canvas() { return this.#canvas; }
    get context() { return this.#context; }
    get center() { return [ this.#canvasRect.width / 2, this.#canvasRect.height / 2 ]; }

    // #update() {
    //     this.#player.foofoo();
    // }
    
    #handleResize() {
        this.#canvasRect = this.canvas.getBoundingClientRect();
    }
}