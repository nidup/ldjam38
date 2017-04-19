
export default class Preload extends Phaser.State {

    public preload ()
    {
        this.load.spritesheet('coin', 'assets/images/coins.png', 16, 16);
        this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    }

    public create ()
    {
        this.game.state.start('Menu');
    }
}
