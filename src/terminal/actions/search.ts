import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

export class Search implements Action {
    name: string = 'search';

    execute(state: Play, output: Output) {
        return new Promise((resolve) => {
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
