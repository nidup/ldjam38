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
        return new Promise((resolve) => {
            if (state.isRoverLanded == false) {
                output.writeToTerminal('I can\'t move. I\'m docked. I feel lonely for years now, parked here, I would discover the world.', false, true);
                resolve();
                return;
            }

            const destination = state.locations.filter((location: Biome) => location.name === this.destination);
            if (1 === destination.length) {
                state.currentLocation = destination[0];
                output.stopCapture();
                output.writeToTerminal('Moved to ' + state.currentLocation.type + '.');
                output.writeToTerminal(state.currentLocation.description, false, true);
                resolve();
                return;
            }
            output.writeToTerminal('I don\'t know this place...', false, true);
            resolve();
        });
    }
}

export function GotoActionFactory(parameters: string[]) {

    if (1 !== parameters.length) {
        throw 'I need a destination, I can\'t decide where to go, or may I?';
    }

    return new Goto(parameters[0]);
}
