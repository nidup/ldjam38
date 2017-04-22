import Play from './states/Play';
import { Terminal } from './terminal/terminal';
import { ShellOutput } from './terminal/outputs/html-element-output';
import { HelpActionFactory } from './terminal/actions/help';
import { GotoActionFactory } from './terminal/actions/goto';
import { SearchActionFactory } from './terminal/actions/search';
import { WhereamiActionFactory } from './terminal/actions/whereami';
import { EmailActionFactory } from './terminal/actions/email';
import {Output} from "./terminal/output";

export default class Shell {
    private terminal: Terminal;
    private shellInput = null;
    private shellText = null;

    constructor(state: Play) {

        this.shellInput = document.createElement("input");
        this.shellInput.setAttribute('type', 'text');
        this.shellInput.setAttribute('id', 'shellInput');
        document.body.appendChild(this.shellInput);
        this.shellInput.focus();
        this.shellInput.addEventListener("blur", (e) => {
            this.shellInput.focus();
        }, true);

        this.shellText = document.createElement("textarea");
        this.shellText.setAttribute('id', 'shellText');
        this.shellText.setAttribute('disabled', 'disabled');
        document.body.appendChild(this.shellText);

        const output = new ShellOutput(this.shellText);
        this.writeBootLines(output);

        let enterKey = state.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterKey.onDown.add(() => {
            this.shellText.value = this.shellText.value + this.shellInput.value + '\n';

            this.shellText.scrollTop = this.shellText.scrollHeight;

            try {
                this.terminal.getAction(this.shellInput.value).execute(state, output);
            } catch (e) {
                output.error(e);
            }
            this.shellInput.value = '';
        }, this);

        this.terminal = new Terminal();
        this.terminal.addActionFactory('help', HelpActionFactory);
        this.terminal.addActionFactory('goto', GotoActionFactory);
        this.terminal.addActionFactory('search', SearchActionFactory);
        this.terminal.addActionFactory('whereami', WhereamiActionFactory);
        this.terminal.addActionFactory('email', EmailActionFactory);
    }

    private writeBootLines(output: Output)
    {
        let timeout = 1000;
        setTimeout(function(){ output.write('Boot...'); }, timeout*1);
        setTimeout(function(){ output.write('Connect to recon rover...'); }, timeout*2);
        setTimeout(function(){ output.write('Ping ...'); }, timeout*3);
        setTimeout(function(){ output.write('Ping ...'); }, timeout*5);
        setTimeout(function(){ output.write('Ping ...'); }, timeout*7);
        setTimeout(function(){ output.write('Connection established.'); }, timeout*8);
        setTimeout(function(){ output.write('Hello operator, i\'m Herb-LB38, your recon rover.'); }, timeout*9);
        setTimeout(function(){ output.write('Please let me know what to do.'); }, timeout*10);
    }
}
