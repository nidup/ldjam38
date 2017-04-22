import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Help implements Action {
    name: string;

    constructor() {
        this.name = 'help';
    }

    execute(state: Play, output: Output) {
        output.writeToTerminal(                       'help               -- display helps');
        let timeout = 200;
        setTimeout(function(){ output.writeToTerminal('goto [destination] -- move to destination'); }, timeout*1);
        setTimeout(function(){ output.writeToTerminal('build [module]     -- build the module'); }, timeout*2);
        setTimeout(function(){ output.writeToTerminal('email              -- open your inbox'); }, timeout*3);
        setTimeout(function(){ output.writeToTerminal('whereami           -- describe current location'); }, timeout*4);
        setTimeout(function(){ output.writeToTerminal('search             -- advanced analysis of location'); }, timeout*5);
    }
}

export function HelpActionFactory(parameters: string[]) {
    return new Help();
}
