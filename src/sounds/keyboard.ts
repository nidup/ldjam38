
import Play from '../states/Play';

export default class KeyboardSound {
	private state: Play;
	public static numberKey = 32;
	public static numberEnter = 8;
	public static numberSpace = 8;

	public static keyPath = 'assets/sounds/keyboard/key_';
	public static enterPath = 'assets/sounds/keyboard/enter_';
	public static spacePath = 'assets/sounds/keyboard/space_';

	constructor(state: Play) {
		this.state = state;
	}

	register() {
		this.state.input.keyboard.onDownCallback = (event) => {
			if (event.repeat) {
				return;
			}
			if (event.keyCode == Phaser.Keyboard.ENTER) {
				this.playEnter();
			} else if (event.keyCode == Phaser.Keyboard.SPACEBAR) {
				this.playSpace();
			} else {
				this.playKey();
			}
		};
	}
	playEnter() {
		var i = Math.floor((Math.random() * KeyboardSound.numberEnter) + 1);
        var j = ("00" + i).substr(-2, 2);
        this.state.sound.play('keyboard/enter_' + j + '.wav');
	}
	playSpace() {
		var i = Math.floor((Math.random() * KeyboardSound.numberSpace) + 1);
        var j = ("00" + i).substr(-2, 2);
        this.state.sound.play('keyboard/space_' + j + '.wav');
	}
	playKey() {
		var i = Math.floor((Math.random() * KeyboardSound.numberKey) + 1);
        var j = ("00" + i).substr(-2, 2);
        this.state.sound.play('keyboard/key_' + j + '.wav');
	}
}
