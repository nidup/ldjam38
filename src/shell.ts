
import { Terminal } from './terminal/terminal';
import { HelpActionFactory } from './terminal/actions/help';
import { GotoActionFactory } from './terminal/actions/goto';
import { SearchActionFactory } from './terminal/actions/search';
import { WhereamiActionFactory } from './terminal/actions/whereami';
import { EmailActionFactory } from './terminal/actions/email';
import {Output} from "./terminal/output";
import {BuildActionFactory} from "./terminal/actions/build";
import Play from "./states/Play";

export default class Shell {
    private output: Output;
    private terminal: Terminal;
    private shellInput = null;
    private shellText = null;
    private state : Play;

    constructor(state: Play) {
        this.state = state;
        this.shellInput = document.createElement("input");
        this.shellInput.setAttribute('type', 'text');
        this.shellInput.setAttribute('id', 'shellInput');
        document.body.appendChild(this.shellInput);
        this.shellInput.setAttribute('disabled', true);
        this.shellInput.focus();
        this.shellInput.addEventListener("blur", (e) => {
            this.shellInput.focus();
        }, true);

        this.shellText = document.createElement("textarea");
        this.shellText.setAttribute('id', 'shellText');
        this.shellText.setAttribute('disabled', true);
        document.body.appendChild(this.shellText);

        this.terminal = new Terminal();
        this.terminal.addActionFactory('help', HelpActionFactory);
        this.terminal.addActionFactory('goto', GotoActionFactory);
        this.terminal.addActionFactory('search', SearchActionFactory);
        this.terminal.addActionFactory('whereami', WhereamiActionFactory);
        this.terminal.addActionFactory('email', EmailActionFactory);
        this.terminal.addActionFactory('build', BuildActionFactory);
    }

    public setOutput(output: Output) {
        this.output = output;
        this.output.terminalElement = this.shellText;

        this.writeBootLines(this.output, () => {
            let enterKey = this.state.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            enterKey.onDown.add(() => {
                if (this.shellInput.value == "") {
                    return;
                }
                this.shellText.value = this.shellText.value + this.shellInput.value + '\n';

                this.shellText.scrollTop = this.shellText.scrollHeight;

                try {
                    this.terminal.getAction(this.shellInput.value).execute(this.state, this.output);
                } catch (e) {
                    this.output.writeToTerminal(e, true);
                    this.output.playToSpeaker('notifications/error');
                }
                this.shellInput.value = '';
            }, this);
            this.shellInput.removeAttribute('disabled');
            this.shellInput.focus();
        });
    }

    private writeBootLines(output: Output, callback)
    {
        let timeout = 1000;
        setTimeout(function(){ output.writeToTerminal('Boot...'); }, timeout*1);
        setTimeout(function(){ output.writeToTerminal('Connect to recon rover...'); }, timeout*2);
        setTimeout(function(){ output.writeToTerminal('Ping ...'); }, timeout*3);
        setTimeout(function(){ output.writeToTerminal('Ping ...'); }, timeout*5);
        setTimeout(function(){ output.writeToTerminal('Ping ...'); }, timeout*7);
        setTimeout(function(){ output.writeToTerminal('Connection established.'); }, timeout*8);
        setTimeout(function(){ output.writeToTerminal('Hello operator, i\'m Herb-LB38, your recon rover.'); }, timeout*9);
        setTimeout(function(){
            output.writeToTerminal('Please let me know what to do.');
            callback();
        }, timeout*10);

    }
}
