import { Action } from '../action';

class Help implements Action {
    name: string;

    constructor() {
        this.name = 'help';
    }
}

export function HelpActionFactory(parameters: string[]) {
    return new Help();
}
