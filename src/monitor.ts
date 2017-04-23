
import Play from "./states/Play";
import Preload from "./states/Preload";
import {Output} from "./terminal/output";

export default class Monitor {
	private state: Play;
	private currentImage: Phaser.Sprite;
	private output: Output;

	constructor(state: Play) {
		this.state = state;
	}

	static loadAssets (state: Preload) {
        state.load.image('scenes/01', 'assets/images/scenes/01.png');
        state.load.image('scenes/river', 'assets/images/scenes/river.png');
	}

	showImage (name: string, opacity: number) {
		if (this.currentImage) {
			this.currentImage.kill();
		}
		this.currentImage = this.state.middleground.create(490, 135, name);
		this.currentImage.width = 100;
		this.currentImage.height = 73;
		this.currentImage.alpha = opacity;
	}

	update() {
	}

	setOutput (output: Output) {
		this.output = output;
		output.monitor = this;
	}
}
