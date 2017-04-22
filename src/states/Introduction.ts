
export default class Introduction extends Phaser.State {

    private nbCinematicImages = 2;
    private currentPicture = 1;

    public create()
    {
        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.nextPicture, this);
    }

    public update()
    {
        if (this.currentPicture > this.nbCinematicImages) {
            return this.game.state.start('Play');
        }

        this.add.image(0, 0, 'cinematic' + this.currentPicture);
    }

    public nextPicture()
    {
        this.currentPicture++;
    }
}
