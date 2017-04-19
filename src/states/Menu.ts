
export default class Menu extends Phaser.State {

    private titleText : Phaser.BitmapText;
    private subtitleText : Phaser.BitmapText;
    private startText : Phaser.BitmapText;
    private coin1: Phaser.Sprite;
    private coin2: Phaser.Sprite;

    public create ()
    {
        this.game.stage.backgroundColor = '#1b1128';

        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);

        this.titleText = this.game.add.bitmapText(40, 100, 'carrier-command','Our New Game', 27);
        this.subtitleText = this.game.add.bitmapText(40, 140, 'carrier-command','LDJAM 38', 10);

        this.startText = this.game.add.bitmapText(240, 450, 'carrier-command','Press space to start', 10);

        this.coin1 = this.game.add.sprite(200, 447, 'coin', 0);
        this.coin1.animations.add('flip', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        this.coin1.play('flip');

        this.coin2 = this.game.add.sprite(500, 447, 'coin', 0);
        this.coin2.animations.add('flip', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
        this.coin2.play('flip');
    }

    public startGame ()
    {
        this.game.state.start('Play');
    }

    public shutdown ()
    {
        this.titleText.destroy();
        this.subtitleText.destroy();
        this.startText.destroy();
        this.coin1.destroy();
        this.coin2.destroy();
    }
}
