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

    private terminal: Terminal;

    public create()
    {
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
    }

    public update()
    {
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
