
import Play from "./states/Play";
import Preload from "./states/Preload";
import {Output} from "./terminal/output";


export default class Speaker {
	private state: Play;
	private output: Output;

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

	setOutput (output: Output) {
		this.output = output;
		output.speaker = this;
	}
}
