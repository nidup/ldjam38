
import KeyboardSound from '../sounds/keyboard';
import ComputerSound from '../sounds/computer';
import Speaker from '../speaker';
import Monitor from '../monitor';

export default class Preload extends Phaser.State {

    public preload ()
    {
        this.load.image('cinematic1', 'assets/images/cinematic1.png');
        this.load.image('cinematic2', 'assets/images/cinematic2.png');
        this.load.image('board', 'assets/images/board.png');
        this.load.image('board_top', 'assets/images/board_top.png');

        this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');

        Speaker.loadAssets(this);
        Monitor.loadAssets(this);
        KeyboardSound.loadAssets(this);
        ComputerSound.loadAssets(this);
    }

    public create ()
    {
        // this.game.state.start('Menu');
        this.game.state.start('Play');
    }
}
