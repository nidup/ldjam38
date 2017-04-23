import { Action } from '../action';
import { Output } from '../output';
import SpaceshipSound from '../../sounds/spaceship'
import Play from '../../states/Play';

class Undock implements Action {
    name: string = 'undock';

    execute(state: Play, output: Output) {
        return new Promise((resolve) => {
            if (state.isRoverLanded) {
                output.writeToTerminal('Nothing to undock.');
                resolve();
                return;
            }

            output.writeToTerminal('Wow, finally!', false, true);
            output.writeToTerminal(':: Undocking procedure started');
            let spaceshipSound = new SpaceshipSound(state);
            spaceshipSound.playUndock();

            setTimeout(() => { output.writeToTerminal(':: Depressuring process...'); }, 2000);
            setTimeout(() => {
                this.shake(state);
                output.writeToTerminal(':: Undocking rover... please stay vigilant.');
              }, 15000);
            setTimeout(() => {
                output.writeToTerminal('Undocking process succeeded!');
                state.isRoverLanded = true;
                // always land on snowy-forest, you can't do nothing here
                state.currentLocation = state.locations.find((location) => location.name === 'ice-field');

            }, 28000);
            setTimeout(() => {
                output.writeToTerminal('Boot...');
                output.writeToTerminal('Connect to recon rover...');
            }, 28500);
            setTimeout(() => { output.writeToTerminal('Ping...'); }, 29000);
            setTimeout(() => { output.writeToTerminal('Ping...'); }, 30000);
            setTimeout(() => { output.writeToTerminal('Ping...'); }, 31000);
            setTimeout(() => { output.writeToTerminal('Connection established.'); }, 32000);
            setTimeout(() => {
                output.writeToTerminal(
                    'Hello operator, I\'m VJ-Net42, your recon rover. I\'ve finally ' +
                    'landed on this small planet, feel free to send instructions.', false, true);
                output.writeToTerminal(state.currentLocation.description, false, true);
                resolve();
            }, 33000);
        });
    }
    shake(state: Play) {
        var canvas = document.getElementsByTagName('canvas')[0];
        var shellText = document.getElementById('shellText');
        canvas.classList.add('shake');
        shellText.classList.add('shake');

        let darkBoard = state.foreground.create(0, 0, 'board_top_dark');
        darkBoard.width = darkBoard.width * 1.5;
        darkBoard.height = darkBoard.height * 1.5;
        setTimeout(() => {
            darkBoard.kill();
        }, 200);

        setTimeout(() => {
            canvas.classList.remove('shake');
            shellText.classList.remove('shake');
        }, 2000);

        setTimeout(() => {
            canvas.classList.add('shake');
            shellText.classList.add('shake');

            let darkBoard = state.foreground.create(0, 0, 'board_top_dark');
            darkBoard.width = darkBoard.width * 1.5;
            darkBoard.height = darkBoard.height * 1.5;
            setTimeout(() => {
                darkBoard.kill();
            }, 200);
        }, 3000);

        setTimeout(() => {
            canvas.classList.remove('shake');
            shellText.classList.remove('shake');
        }, 4000);
    }
}

export function UndockActionFactory(parameters: string[]) {
    return new Undock();
}
