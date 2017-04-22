import Shell from './shell';
import Speaker from './speaker';
import Monitor from './monitor';

export default class Dashboard {
	private shell: Shell;
	public speaker: Speaker;
	public monitor: Monitor;

	constructor(shell: Shell, speaker: Speaker, monitor: Monitor) {
		this.shell = shell;
		this.speaker = speaker;
		this.monitor = monitor;
	}
}
