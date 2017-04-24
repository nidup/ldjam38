import Play from '../states/Play';
import Preload from '../states/Preload';

export default class ComputerSound {
    private state: Play;

    public static bootPath = 'assets/sounds/ot_computer_start.mp3';
    public static ventiloLoopPath = 'assets/sounds/loop_computer_ventilo.mp3';

    constructor(state: Play) {
        this.state = state;
    }

    static loadAssets (state: Preload) {
        state.load.audio('computer/boot', ComputerSound.bootPath);
        state.load.audio('computer/ventiloLoop', ComputerSound.ventiloLoopPath);
    }

    playAllSequentially() {
        this.playBoot();

        setTimeout(() => {
            this.playVentiloLoop();
        }, 18000);
    }

    playBoot() {
        this.state.sound.play('computer/boot', 1, false);
    }

    playVentiloLoop() {
        this.state.sound.play('computer/ventiloLoop', 1, true);
    }
}
