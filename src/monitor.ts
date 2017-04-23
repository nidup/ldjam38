
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
        state.load.image('scenes/rain-forest', 'assets/images/scenes/rain-forest.png');
        state.load.image('scenes/rocky-mountain', 'assets/images/scenes/rocky-mountain.png');
        state.load.image('scenes/grassland', 'assets/images/scenes/grassland.png');
        state.load.image('scenes/sand-desert', 'assets/images/scenes/sand-desert.png');
        state.load.image('scenes/ice-field', 'assets/images/scenes/ice-field.png');
        state.load.image('scenes/sea-shore', 'assets/images/scenes/sea-shore.png');
        state.load.image('scenes/toundra', 'assets/images/scenes/toundra.png');
	}

	showImage (name: string, opacity: number) {
		if (this.currentImage) {
			this.currentImage.kill();
		}
		this.currentImage = this.state.middleground.create(490 * 1.5, 135 * 1.5, name);
		this.currentImage.width = 100 * 1.5;
		this.currentImage.height = 73 * 1.5;
		this.currentImage.alpha = opacity;
	}

	update() {
	}

	setOutput (output: Output) {
		this.output = output;
		output.monitor = this;
	}
}
