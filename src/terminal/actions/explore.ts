import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { GatheredData } from '../../gathered-data';

export class Explore implements Action {
    name: string = 'explore';

    execute(state: Play, output: Output) {
        return new Promise((resolve) => {
            if (state.isRoverLanded == false) {
                output.writeToTerminal('I can\'t explore. I\'m docked. I feel lonely for years now, parked here, I would discover the world.', false, true);
                resolve();
                return;
            }
            const location = state.currentLocation;
            if (!location) {
                throw 'Move me first...';
            }

            if (state.gatheredData.length === 10 && !state.alienModuleFound) {
                state.alienModuleFound = true;
                output.writeToTerminal('I have found something strange. I can\'t analyze it, it just look like a cube with a button on the top.', false, true);
                output.writeToTerminal('I have put it in my module inventory, feel free to build it... whenever you want...', false, true);

                return resolve();
            }

            const data = location.search(output);
            if (data) {
                state.gatheredData.push(data);
            }

            resolve();
        });
    }
}

export function ExploreActionFactory(parameters: string[]) {
    return new Explore();
}
