import { Terminal } from '../terminal/terminal';
import { HelpActionFactory } from '../terminal/actions/help';
import { GotoActionFactory } from '../terminal/actions/goto';
import { SearchActionFactory } from '../terminal/actions/search';
import { Console } from '../terminal/outputs/console';
import { Biome } from '../biome/biome';
import { SnowyForest } from '../biome/snowy-forest';

export default class Play extends Phaser.State {
    currentLocation: Biome;
    locations: Biome[] = [];

    private debug: boolean = false;
    private briefingText : Phaser.BitmapText;
    private terminalLines = [];

    private shellInput = null;
    private shellText = null;

    private terminal: Terminal;

    public create()
    {
        let enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterKey.onDown.add(this.submitTerminalCommand, this);

        if (this.debug) {
            this.game.time.advancedTiming = true
        }
        this.game.stage.backgroundColor = '#000000';
        this.briefingText = this.game.add.bitmapText(40, 40, 'carrier-command','Play Dat Game!', 10);
        this.briefingText.fixedToCamera = true;

        // INIT LOCATIONS
        this.locations.push(new SnowyForest());

        // INIT TERMINAL
        this.terminal = new Terminal();
        this.terminal.addActionFactory('help', HelpActionFactory);
        this.terminal.addActionFactory('goto', GotoActionFactory);
        this.terminal.addActionFactory('search', SearchActionFactory);

        // todo: MOVE THIS INTO update()
        const output = new Console();
        try {
            this.terminal.getAction('goto snowy-forest').execute(this, output);
            this.terminal.getAction('jean').execute(this, output);
            this.terminal.getAction('search').execute(this, output);
            this.terminal.getAction('search').execute(this, output);
        } catch (e) {
            output.error(e);
        }

        this.add.image(0, 0, 'board');

        this.shellInput = document.createElement("input");
        this.shellInput.setAttribute('type', 'text');
        this.shellInput.setAttribute('id', 'shellInput');
        document.body.appendChild(this.shellInput);
        this.shellInput.focus();

        this.shellText = document.createElement("textarea");
        this.shellText.setAttribute('id', 'shellText');
        this.shellText.setAttribute('disabled', 'disabled');
        document.body.appendChild(this.shellText);
    }

    public update()
    {

    }

    public submitTerminalCommand()
    {
        var input = <HTMLInputElement> document.getElementById('shellInput');
        this.terminalLines.push(input.value);
        input.value = '';

        var style = { font: "16px VT323", fill: "#1ec503", boundsAlignH: "center", boundsAlignV: "middle" };
        this.shellText.value = '';
        this.terminalLines.forEach((line, index) => {
            this.shellText.value += line + '\n';
        });
        document.getElementById("shellText").scrollTop = document.getElementById("shellText").scrollHeight
    }

    public render()
    {
        if (this.debug) {
            this.game.debug.text(
                "FPS: "  + this.game.time.fps + " ",
                2,
                14,
                "#00ff00"
            );
        }
    }
}
