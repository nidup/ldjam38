import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { GatheredData } from '../../gathered-data';

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

            if (state.gatheredData.length === 10 && !state.alienArtifactFound) {
                state.alienArtifactFound = true;
                //  TODO:  <23-04-17, gildas> // Improve message
                output.writeToTerminal('* OMAGAD You have found an alien artificat!! BUILD IT !!!! *');

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

export function SearchActionFactory(parameters: string[]) {
    return new Search();
}
