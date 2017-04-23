import Shell from './shell';
import Speaker from './speaker';
import Monitor from './monitor';
import Leds from './leds';
import {Output} from "./terminal/output";

export default class Dashboard {
	private shell: Shell;
	public speaker: Speaker;
	public monitor: Monitor;
	public leds: Leds;

	constructor(shell: Shell, speaker: Speaker, monitor: Monitor, leds: Leds) {
		this.shell = shell;
		this.speaker = speaker;
		this.monitor = monitor;
		this.leds = leds;
	}

	setOutput(output: Output) {
		this.shell.setOutput(output);
		this.speaker.setOutput(output);
		this.monitor.setOutput(output);
		this.leds.setOutput(output);
	}
}
