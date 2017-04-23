/// <reference path="../lib/phaser.d.ts"/>

import Boot from "./states/Boot";
import Preload from "./states/Preload";
import Menu from "./states/Menu";
import Introduction from "./states/Introduction";
import Play from "./states/Play";


class SimpleGame extends Phaser.Game {
    constructor() {
        super(
            720 * 1.5,
            405 * 1.5,
            Phaser.WEBGL,
            "content",
            null
        );

        this.state.add('Boot', Boot);
        this.state.add('Preload', Preload);
        this.state.add('Menu', Menu);
        this.state.add('Introduction', Introduction);
        this.state.add('Play', Play);
        this.state.start('Boot');
    }
}

window.onload = () => {
    new SimpleGame();
};
