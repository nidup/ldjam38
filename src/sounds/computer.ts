import Play from '../states/Play';
import Preload from '../states/Preload';

export default class ComputerSound {
    private state: Play;

    public static bootPath = 'assets/sounds/ot_computer_start.mp3';
    public static ventiloPath = 'assets/sounds/fade_in_computer_ventilo.mp3';
    public static ventiloLoopPath = 'assets/sounds/loop_computer_ventilo.mp3';

    public static musicIntroPath = 'assets/sounds/musique_intro.mp3';

    constructor(state: Play) {
        this.state = state;
    }

    static loadAssets (state: Preload) {
        state.load.audio('computer/boot', ComputerSound.bootPath);
        state.load.audio('computer/ventilo', ComputerSound.ventiloPath);
        state.load.audio('computer/ventiloLoop', ComputerSound.ventiloLoopPath);

        state.load.audio('computer/music_intro', ComputerSound.musicIntroPath);
    }

    playAllSequentially() {
        this.playBoot();
        this.playMusicIntro();

        setTimeout(() => {
            this.playVentilo();

            setTimeout(() => {
                this.playVentiloLoop();
            }, 35000)
        }, 18000);
    }

    playBoot() {
        this.state.sound.play('computer/boot', 1, false);
    }

    playVentilo() {
        this.state.sound.play('computer/ventilo', 1, false);
    }

    playVentiloLoop() {
        this.state.sound.play('computer/ventiloLoop', 1, true);
    }

    playMusicIntro() {
        this.state.sound.play('computer/music_intro', 1, false);
    }
}
