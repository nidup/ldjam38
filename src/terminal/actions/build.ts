import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { Biome } from '../../biome/biome';

class Build implements Action {
    name: string = 'build';
    module: string;

    constructor(module: string) {
        this.module = module;
    }

    execute(state: Play, output: Output) {
        output.writeToTerminal('I don\'t know how to build...');
    }
}

export function BuildActionFactory(parameters: string[]) {
    if (1 !== parameters.length) {
        throw 'What do you want to build?!';
    }

    return new Build(parameters[0]);
}
