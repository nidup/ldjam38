export class Terminal {
    sendCommand(command: string) {
        return command.split(' ').reduce((action: Action, elem: string, idx: any) => {
            if (0 === idx) {
                action.name = elem;

                return action;
            }

            action.parameters.push(elem);

            return action;
        }, new Action());
    }
}
