import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

export class Search implements Action {
    name: string = 'search';

    execute(state: Play, output: Output) {
        return new Promise((resolve) => {
            if (state.isRoverLanded == false) {
                output.writeToTerminal('I can\'t search. I\'m docked. I feel lonely for years now, parked here, I would discover the world.');
                resolve();
                return;
            }
            const location = state.currentLocation;
            if (!location) {
                throw 'Move me first...';
            }

            location.search(output);
            resolve();
        });
    }
}

export function SearchActionFactory(parameters: string[]) {
    return new Search();
}
