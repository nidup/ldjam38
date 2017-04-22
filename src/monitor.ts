
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
	}

	showImage (name: string) {
		// 490x 130 | 105 x 75
		var sprite = this.state.game.add.sprite(495, 143, name);
		sprite.width = 90;
		sprite.height = 60;
	}

	update() {
	    // this.state.game.add.sprite(80, 0, this.currentImage);
	}

	setOutput (output: Output) {
		this.output = output;
		output.monitor = this;
	}
}
