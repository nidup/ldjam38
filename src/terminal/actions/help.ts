import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';

class Help implements Action {
    name: string;

    constructor() {
        this.name = 'help';
    }

    execute(state: Play, output: Output) {
        return new Promise(function(resolve) {
            output.writeToTerminal(                       'help               -- display helps');
            let timeout = 200;
            setTimeout(function(){ output.writeToTerminal('build [module]     -- build a module'); }, timeout*1);
            setTimeout(function(){ output.writeToTerminal('goto [location]    -- move to location'); }, timeout*2);
            setTimeout(function(){ output.writeToTerminal('inbox              -- check your inbox'); }, timeout*3);
            setTimeout(function(){ output.writeToTerminal('inventory          -- check rover inventory'); }, timeout*4);
            setTimeout(function(){ output.writeToTerminal('undock             -- undock rover from pod'); }, timeout*5);
            setTimeout(function(){ output.writeToTerminal('whereami           -- current/known locations'); }, timeout*6);
            setTimeout(function(){ output.writeToTerminal('archive ls, show   -- browse archives'); }, timeout*7);
            setTimeout(function(){ output.writeToTerminal('search             -- analysis of current location'); resolve(); }, timeout*8);
        });
    }
}

export function HelpActionFactory(parameters: string[]) {
    return new Help();
}
