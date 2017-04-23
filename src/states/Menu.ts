
export default class Menu extends Phaser.State {

    private titleText : Phaser.BitmapText;
    private subtitleText : Phaser.BitmapText;
    private startText : Phaser.BitmapText;

    public create ()
    {
        this.game.stage.backgroundColor = '#1b1128';

        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);

        // this.titleText = this.game.add.bitmapText(40, 100, 'carrier-command','Our New Game', 27);
        // this.subtitleText = this.game.add.bitmapText(40, 140, 'carrier-command','LDJAM 38', 10);

        // this.startText = this.game.add.bitmapText(240, 300, 'carrier-command','Press space to start', 10);
    }

    public startGame ()
    {
        this.game.state.start('Introduction');
    }

    public shutdown ()
    {
        this.titleText.destroy();
        this.subtitleText.destroy();
        this.startText.destroy();
    }
}
