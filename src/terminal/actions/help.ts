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
        setTimeout(function(){ output.writeToTerminal('build [module]     -- build a module'); }, timeout*2);
        setTimeout(function(){ output.writeToTerminal('goto [location]    -- move to location'); }, timeout*1);
        setTimeout(function(){ output.writeToTerminal('inbox              -- check your inbox'); }, timeout*3);
        setTimeout(function(){ output.writeToTerminal('inventory          -- check inventory'); }, timeout*2);
        setTimeout(function(){ output.writeToTerminal('search             -- analysis of location'); }, timeout*6);
        setTimeout(function(){ output.writeToTerminal('undock             -- undock module from pod'); }, timeout*4);
        setTimeout(function(){ output.writeToTerminal('whereami           -- locations'); }, timeout*5);
    }
}

export function HelpActionFactory(parameters: string[]) {
    return new Help();
}
