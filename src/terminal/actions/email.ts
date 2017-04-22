import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { Biome } from '../../biome/biome';

class Email implements Action {
    name: string = 'email';

    execute(state: Play, output: Output) {
        output.write('Subject: Get the job done');
        output.write('From: Bernard McLindon');
        output.write('No suprise, investors are pushing us for exo-planet LD38. You know the drill land the rover on the surface, deploy solar arrays, settle the communication network, install the stock depot and the ore extractor. Be quick, be efficient, don’t lose your time around this rock. And don’t listen to the rover, the new firmware made him… a little poetic. You’ll see.');
    }
}

export function EmailActionFactory(parameters: string[]) {
    return new Email();
}
