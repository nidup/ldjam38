import { Action } from '../action';
import { Output } from '../output';
import SpaceshipSound from '../../sounds/spaceship'
import Play from '../../states/Play';

class Undock implements Action {
    name: string = 'undock';

    execute(state: Play, output: Output) {
        if (state.isRoverLanded) {
            output.writeToTerminal('Nothing to undock.');
            return;
        }

        output.writeToTerminal('Undocking module from spaceship...');
        let spaceshipSound = new SpaceshipSound(state);
        spaceshipSound.playUndock();

        setTimeout(() => {
            output.writeToTerminal('Depressuring process...');
        }, 2000);

        setTimeout(() => {
            output.writeToTerminal('Undocking rover... please stay vigilant.');
        }, 15000);

        setTimeout(() => {
            output.writeToTerminal('Undocking process succeeded!');
            state.isRoverLanded = true;
        }, 28000);
    }
}

export function UndockActionFactory(parameters: string[]) {
    return new Undock();
}
