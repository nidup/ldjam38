
import Play from "./states/Play";
import Preload from "./states/Preload";
import {ShellOutput} from "./terminal/outputs/html-element-output";


export default class Speaker {
	private state: Play;
	private output: ShellOutput;

	constructor(state: Play) {
		this.state = state;
	}

	static loadAssets (state: Preload) {
        state.load.audio('notifications/error', 'assets/sounds/notifications/01.wav');
        state.load.audio('notifications/01', 'assets/sounds/notifications/01.wav');
	}

	playSound(name: string) {
		this.state.sound.play(name);
	}

	setOutput (output: ShellOutput) {
		this.output = output;
	}
}
