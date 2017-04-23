
export default class Menu extends Phaser.State {

    private titleText : Phaser.BitmapText;
    private subtitleText : Phaser.BitmapText;
    private startText : Phaser.BitmapText;

    public create ()
    {
        this.game.stage.backgroundColor = '#1b1128';

        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);

        this.subtitleText = this.game.add.bitmapText(300, 450, 'carrier-command','Audio headset heavily recommended', 12);
        this.startText = this.game.add.bitmapText(390, 500, 'carrier-command','- Press space to start -', 10);
    }

    public startGame ()
    {
        this.game.state.start('Introduction');
    }

    public shutdown ()
    {
        this.game.input.keyboard.removeKey(Phaser.Keyboard.SPACEBAR);
        this.subtitleText.destroy();
        this.startText.destroy();
    }
}
