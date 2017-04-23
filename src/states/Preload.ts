
import KeyboardSound from '../sounds/keyboard';
import ComputerSound from '../sounds/computer';
import SpaceshipSound from '../sounds/spaceship';
import Speaker from '../speaker';
import Monitor from '../monitor';
import Leds from '../leds';

export default class Preload extends Phaser.State {

    public preload ()
    {
        this.load.image('cinematic1', 'assets/images/cinematic1.png');
        this.load.image('cinematic2', 'assets/images/cinematic2.png');
        this.load.image('board', 'assets/images/board.png');
        this.load.image('board_top', 'assets/images/board_top.png');
        this.load.image('scenes/planet1', 'assets/images/scenes/planet1.png');
        this.load.image('scenes/planet2', 'assets/images/scenes/planet2.png');

        this.load.audio('music/intro', 'assets/sounds/musique_intro.mp3')

        Speaker.loadAssets(this);
        Monitor.loadAssets(this);
        Leds.loadAssets(this);
        KeyboardSound.loadAssets(this);
        ComputerSound.loadAssets(this);
        SpaceshipSound.loadAssets(this);
    }

    public create ()
    {
        // this.game.state.start('Menu');
        this.game.state.start('Introduction');
    }
}
