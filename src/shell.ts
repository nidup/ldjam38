import Play from './states/Play';
import { Terminal } from './terminal/terminal';
import { Output } from './terminal/output';
import { HelpActionFactory } from './terminal/actions/help';
import { GotoActionFactory } from './terminal/actions/goto';
import { SearchActionFactory } from './terminal/actions/search';

class ShellOutput implements Output {
    constructor(private element: HTMLInputElement) { }

    write(data: string) {
        this.element.value = this.element.value + '>>>' + data + '\n';
    }

    error(mess: string) {
        this.element.value = this.element.value + '>>> ERROR: ' + mess + '\n';
    }
}

export default class Shell {
    private terminal: Terminal;

    private terminalLines = [];
    private shellInput = null;
    private shellText = null;

    constructor(state: Play) {
        let enterKey = state.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterKey.onDown.add(() => {
            this.shellText.value = this.shellText.value + this.shellInput.value + '\n';

            this.shellText.scrollTop = this.shellText.scrollHeight;

            const output = new ShellOutput(this.shellText);
            try {
                this.terminal.getAction(this.shellInput.value).execute(state, output);
            } catch (e) {
                output.error(e);
            }
            this.shellInput.value = '';
        }, this);

        this.shellInput = document.createElement("input");
        this.shellInput.setAttribute('type', 'text');
        this.shellInput.setAttribute('id', 'shellInput');
        document.body.appendChild(this.shellInput);
        this.shellInput.focus();

        this.shellText = document.createElement("textarea");
        this.shellText.setAttribute('id', 'shellText');
        this.shellText.setAttribute('disabled', 'disabled');
        document.body.appendChild(this.shellText);

        this.terminal = new Terminal();
        this.terminal.addActionFactory('help', HelpActionFactory);
        this.terminal.addActionFactory('goto', GotoActionFactory);
        this.terminal.addActionFactory('search', SearchActionFactory);
    }
}
