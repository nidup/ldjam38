export default class Preload extends Phaser.State {

    public preload ()
    {
        this.load.image('cinematic1', 'assets/images/cinematic1.png');
        this.load.image('cinematic2', 'assets/images/cinematic2.png');
        this.load.image('board', 'assets/images/board.png');

        this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');

        for (var i = 1; i <= 8; i++) {
            var j = ("00" + i).substr(-2, 2);
            this.load.audio('keyboard/enter_' + j + '.wav', 'assets/sounds/keyboard/enter_' + j + '.wav')
        }

        for (var i = 1; i <= 32; i++) {
            var j = ("00" + i).substr(-2, 2);
            this.load.audio('keyboard/key_' + j + '.wav', 'assets/sounds/keyboard/key_' + j + '.wav')
        }

        for (var i = 1; i <= 8; i++) {
            var j = ("00" + i).substr(-2, 2);
            this.load.audio('keyboard/space_' + j + '.wav', 'assets/sounds/keyboard/space_' + j + '.wav')
        }
    }

    public create ()
    {
        // this.game.state.start('Menu');
        this.game.state.start('Play');
    }
}
