import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Inbox implements Action {
	name: string = 'inbox';

	execute(state: Play, output: Output) {
		output.writeToTerminal('Subject: Get the job done');
		output.writeToTerminal('From: Bernard McLindon');
		output.writeToTerminal(
			'No surprise, investors are pushing us for exo-planet LD38. You know the drill: ' +
			'land the rover on the surface, deploy solar arrays, settle the communication ' +
			'network, install the ore extractor and refinery. Be quick, be efficient, don’t ' +
			'lose your time around this rock. And don’t listen to the rover, the new firmware' +
			' made him… a little poetic. You’ll see.' +
			'\nPS: In case your forget it, you’ll have to `undock` your rover.');
	}
}

export function InboxActionFactory(parameters: string[]) {
	return new Inbox();
}
