import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { Biome } from '../../biome/biome';

class Goto implements Action {
    name: string = 'goto';
    destination: string;

    constructor(destination: string) {
        this.destination = destination;
    }

    execute(state: Play, output: Output) {
        const destination = state.locations.filter((location: Biome) => location.name === this.destination);
        if (1 === destination.length) {
            state.currentLocation = destination[0];
            output.writeToTerminal('Moved to ' + state.currentLocation.type + '.');
            return;
        }
        output.writeToTerminal('I don\'t know this place...');
    }
}

export function GotoActionFactory(parameters: string[]) {
    if (1 !== parameters.length) {
        throw 'Where do you want to go?!';
    }

    return new Goto(parameters[0]);
}
