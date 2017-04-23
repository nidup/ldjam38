import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Whereami implements Action {
    name: string = 'whereami';

    execute(state: Play, output: Output) {
        return new Promise((resolve) => {
            const currentLocation = state.currentLocation;

            if (!state.isRoverLanded) {
                output.writeToTerminal('Docked in the pod.');
                resolve();
                return;
            }

            for (let location of state.locations) {
                if (currentLocation && currentLocation.type == location.type) {
                    output.writeToTerminal('[x] ' + location.name);
                } else {
                    output.writeToTerminal('[ ] ' + location.name);
                }
            }
            resolve();
        });
    }
}

export function WhereamiActionFactory(parameters: string[]) {
    return new Whereami();
}
