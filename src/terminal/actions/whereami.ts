import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Whereami implements Action {
    name: string = 'whereami';

    execute(state: Play, output: Output) {
        const currentLocation = state.currentLocation;

        if (currentLocation == null) {
            output.writeToTerminal('[x] Docked in the pod');
            return;
        }

        for (let location of state.locations) {
           if (currentLocation.type == location.type) {
                output.writeToTerminal('[x]' + location.type);
            } else {
                output.writeToTerminal('[ ] ' + location.type);
            }
        }
    }
}

export function WhereamiActionFactory(parameters: string[]) {
    return new Whereami();
}
