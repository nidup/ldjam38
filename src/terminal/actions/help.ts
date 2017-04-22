import { Action } from '../action';
import { Output } from '../output';

class Help implements Action {
    name: string;

    constructor() {
        this.name = 'help';
    }

    execute(output: Output) {
        output.write('help       -- display helps');
    }
}

export function HelpActionFactory(parameters: string[]) {
    return new Help();
}
