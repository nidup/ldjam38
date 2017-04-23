import Play from '../states/Play';
import Preload from '../states/Preload';

export default class SpaceshipSound {
    private state: Play;

    public static undockPath = 'assets/sounds/ot_sound_rover_landing.mp3';

    constructor(state: Play) {
        this.state = state;
    }

    static loadAssets (state: Preload) {
        state.load.audio('spaceship/undock', SpaceshipSound.undockPath);
    }

    playUndock() {
        this.state.sound.play('spaceship/undock', 1, false);
    }
}
