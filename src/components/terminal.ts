import { Action } from '../models/action';
import { Command } from '../models/command';

export class Terminal {
    actionFactories: ((parameters: string[])=>Action)[] = [];

    addActionFactory(name: string, factory: (parameters: string[])=>Action) {
        this.actionFactories[name] = factory;
    }

    getAction(input: string) {
        const command = input
            .split(' ')
            .reduce((command: Command, elem: string, idx: any) => {
                if (0 === idx) {
                    command.name = elem;

                    return command;
                }

                command.parameters.push(elem);

                return command;
            }, new Command());

        if (command.name in this.actionFactories) {
            return this.actionFactories[command.name](command.parameters);
        }

        throw 'Unknown command "' + command.name + '".';
    }
}
