
export default class Introduction extends Phaser.State {
    public create()
    {
        this.game.sound.play('music/intro', 0.7, false);

        let bg = this.add.image(0, 0, 'cinematic1');
        bg.width = bg.width * 1.5;
        bg.height = bg.height * 1.5;

        setTimeout(() => {
            bg = this.add.image(0, 0, 'cinematic2');
            bg.width = bg.width * 1.5;
            bg.height = bg.height * 1.5;
        }, 13000);

        setTimeout(() => {
            this.game.state.start('Play');
        }, 24000);
    }
}
