export default class Preload extends Phaser.State {

    public preload ()
    {
        this.load.image('cinematic1', 'assets/images/cinematic1.png');
        this.load.image('cinematic2', 'assets/images/cinematic2.png');
        this.load.image('board', 'assets/images/board.png');

        this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    }

    public create ()
    {
        // this.game.state.start('Menu');
        this.game.state.start('Play');
    }
}
