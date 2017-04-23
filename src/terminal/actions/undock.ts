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

        setTimeout(() => { output.writeToTerminal('Depressuring process...'); }, 2000);
        setTimeout(() => { output.writeToTerminal('Undocking rover... please stay vigilant.'); }, 15000);
        setTimeout(() => {
            output.writeToTerminal('Undocking process succeeded!');
            state.isRoverLanded = true;
            // always land on tundra, you can't do nothing here
            state.currentLocation = state.locations.find((location) => location.name === 'snowy-forest');

        }, 28000);
        setTimeout(() => {
            output.writeToTerminal('Boot...');
            output.writeToTerminal('Connect to recon rover...');
        }, 28500);
        setTimeout(() => { output.writeToTerminal('Ping...'); }, 29000);
        setTimeout(() => { output.writeToTerminal('Connection established.'); }, 30000);
        setTimeout(() => { output.writeToTerminal('Hello operator, i\'m VJ-Net38, your recon rover.'); }, 31000);
    }
}

export function UndockActionFactory(parameters: string[]) {
    return new Undock();
}
