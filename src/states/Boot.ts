
export default class Boot extends Phaser.State {

    public create ()
    {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start('Preload');
    }
}

