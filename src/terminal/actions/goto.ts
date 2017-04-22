import { Action } from '../action';
import { Output } from '../output';

class Goto implements Action {
    name: string = 'goto';
    destination: string;

    constructor(destination: string) {
        this.destination = destination;
    }

    execute(output: Output) {
        output.write('Going to ' + this.destination);
    }
}

export function GotoActionFactory(parameters: string[]) {
    if (1 !== parameters.length) {
        throw 'Where do you want to go?!';
    }

    return new Goto(parameters[0]);
}
