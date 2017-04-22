import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Help implements Action {
    name: string;

    constructor() {
        this.name = 'help';
    }

    execute(state: Play, output: Output) {
        output.writeToTerminal('help       -- display helps');
    }
}

export function HelpActionFactory(parameters: string[]) {
    return new Help();
}
