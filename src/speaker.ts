
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
        state.load.audio('notifications/success', 'assets/sounds/notifications/success.wav');
        state.load.audio('hdd/load', 'assets/sounds/hdd_load.wav');
	}

	playSound(name: string, volume: number = 1, loop: boolean = false) {
		return this.state.sound.play(name, volume, loop);
	}

	setOutput (output: Output) {
		this.output = output;
		output.speaker = this;
	}
}
