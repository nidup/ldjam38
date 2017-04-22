import { Terminal } from '../terminal/terminal';
import { HelpActionFactory } from '../terminal/actions/help';
import { GotoActionFactory } from '../terminal/actions/goto';
import { Console } from '../terminal/outputs/console';

export default class Play extends Phaser.State {

    private debug: boolean = false;
    private briefingText : Phaser.BitmapText;

    public create()
    {
        if (this.debug) {
            this.game.time.advancedTiming = true
        }
        this.game.stage.backgroundColor = '#000000';
        this.briefingText = this.game.add.bitmapText(40, 40, 'carrier-command','Play Dat Game!', 10);
        this.briefingText.fixedToCamera = true;

        const terminal = new Terminal();
        terminal.addActionFactory('help', HelpActionFactory);
        terminal.addActionFactory('goto', GotoActionFactory);

        const output = new Console();
        try {
            terminal.getAction('goto michel').execute(output);
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
