
import { Terminal } from './terminal/terminal';
import { HelpActionFactory } from './terminal/actions/help';
import { GotoActionFactory } from './terminal/actions/goto';
import { SearchActionFactory } from './terminal/actions/search';
import { WhereamiActionFactory } from './terminal/actions/whereami';
import { UndockActionFactory } from './terminal/actions/undock';
import { ArchiveActionFactory } from './terminal/actions/archive';
import {Output} from "./terminal/output";
import {BuildActionFactory} from "./terminal/actions/build";
import Play from "./states/Play";
import {InventoryActionFactory} from "./terminal/actions/inventory";
import {InboxActionFactory} from "./terminal/actions/inbox";

export default class Shell {
    private output: Output;
    private terminal: Terminal;
    private shellInput = null;
    private shellText = null;
    private shellPrompt = null;
    private state : Play;

    constructor(state: Play) {
        this.state = state;
        this.shellPrompt = document.createElement("input");
        this.shellPrompt.value = "$ ";
        this.shellPrompt.setAttribute('id', 'shellPrompt');
        this.shellPrompt.setAttribute('type', 'text');
        this.shellPrompt.setAttribute('readonly', 'readonly');
        document.body.appendChild(this.shellPrompt);
        this.shellInput = document.createElement("input");
        this.shellInput.spellcheck = false;
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
        this.terminal.addActionFactory('inbox', InboxActionFactory);
        this.terminal.addActionFactory('build', BuildActionFactory);
        this.terminal.addActionFactory('undock', UndockActionFactory);
        this.terminal.addActionFactory('inventory', InventoryActionFactory);
        this.terminal.addActionFactory('archive', ArchiveActionFactory);
    }

    public setOutput(output: Output) {
        this.output = output;
        this.output.terminalElement = this.shellText;

        this.writeBootLines(this.output, () => {
            let enterKey = this.state.input.keyboard.addKey(Phaser.Keyboard.ENTER);
            let lastHddLoadSoundPlayed = 1;
            enterKey.onDown.add(() => {
                if (this.shellInput.value == "") {
                    return;
                }
                this.shellText.value = this.shellText.value + '\n$ ' + this.shellInput.value;
                this.shellInput.setAttribute('disabled', true);

                const stopSound = this.output.playToSpeaker('hdd/load/'+lastHddLoadSoundPlayed++);
                if (lastHddLoadSoundPlayed > 8) {
                    lastHddLoadSoundPlayed = 1;
                }

                try {
                    this.terminal
                        .getAction(this.shellInput.value)
                        .execute(this.state, this.output)
                        .then(
                            () => {
                                stopSound();
                                this.shellInput.removeAttribute('disabled');
                                this.shellInput.focus();
                            },
                            (error) => {
                                stopSound();
                                this.printError(error);
                            }
                        );
                } catch (e) {
                    stopSound();
                    this.printError(e);
                }
                this.shellInput.value = "";
            }, this);
            this.shellInput.removeAttribute('disabled');
            this.shellInput.focus();
        });
    }

    private printError(error) {
        this.output.writeToTerminal(error, true);
        this.output.playToSpeaker('notifications/error');
        this.shellInput.removeAttribute('disabled');
        this.shellInput.focus();
    }

    private writeBootLines(output: Output, callback)
    {
        let timeout = 1000;
        setTimeout(function(){ output.writeToTerminal('Booting computer...'); }, timeout*2);
        setTimeout(function(){
            output.writeToTerminal("______         _  _____  _____  _____  _____ ");
            output.writeToTerminal("| ___ \\       | |/ __  \\|  _  ||  _  ||  _  |");
            output.writeToTerminal("| |_/ /__   __| |`' / /'| |/' || |/' || |/' |");
            output.writeToTerminal("|  __/ _ \\ / _` |  / /  |  /| ||  /| ||  /| |");
            output.writeToTerminal("| | | (_) | (_| |./ /___\\ |_/ /\\ |_/ /\\ |_/ /");
            output.writeToTerminal("\\_|  \\___/ \\__,_|\\_____/ \\___/  \\___/  \\___/ ");
        }, timeout*3);
        setTimeout(function(){ output.writeToTerminal(':: Loading kernel...'); }, timeout*5);
        setTimeout(function(){ output.writeToTerminal(':: Loading external modules...'); }, timeout*7);
        setTimeout(function(){ output.writeToTerminal(':: Checking system integrity...'); }, timeout*10);
        setTimeout(function(){ output.writeToTerminal(':: Warming up RAM module...'); }, timeout*13);
        setTimeout(function(){ output.writeToTerminal(':: Mount disks...'); }, timeout*16);
        setTimeout(function(){ output.writeToTerminal(':: Mount extra devices...'); }, timeout*19);
        setTimeout(function(){
            output.writeToTerminal('Welcome again agent XD6001.');
            output.writeToTerminal('You\'ve got a new message! (type `inbox`)');
            callback();
          }, timeout*21);
    }
}
