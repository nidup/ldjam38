
import Play from './states/Play';
import Preload from './states/Preload';
import {Output} from './terminal/output';

export default class Leds {
    private state: Play;
    private output: Output;

    private led1X = 497;
    private led2X = 517;
    private led3X = 537;
    private led4X = 557;

    constructor(state: Play) {
        this.state = state;
    }

    static loadAssets (state: Preload) {
        state.load.image('leds/off', 'assets/images/leds/led_off.png');
        state.load.image('leds/on', 'assets/images/leds/led_on.png');
    }

    turnOnLed(position: number) {
        switch (position) {
            case 1:
                this.state.foreground.create(this.led1X, 96, 'leds/on');
                break;
            case 2:
                this.state.foreground.create(this.led2X, 96, 'leds/on');
                break;
            case 3:
                this.state.foreground.create(this.led3X, 96, 'leds/on');
                break;
            case 4:
                this.state.foreground.create(this.led4X, 96, 'leds/on');
                break;
        }
    }

    displayLeds() {
        this.state.foreground.create(this.led1X, 96, 'leds/off');
        this.state.foreground.create(this.led2X, 96, 'leds/off');
        this.state.foreground.create(this.led3X, 96, 'leds/off');
        this.state.foreground.create(this.led4X, 96, 'leds/off');
    }

    setOutput (output: Output) {
        this.output = output;
        output.leds = this;
    }
}
