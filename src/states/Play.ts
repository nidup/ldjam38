import { Biome } from '../biome/biome';
import { SnowyForest } from '../biome/snowy-forest';

import Shell from '../shell';
import Speaker from '../speaker';
import Monitor from '../monitor';
import Dashboard from '../dashboard';

export default class Play extends Phaser.State {
    currentLocation: Biome;
    locations: Biome[] = [];

    private debug: boolean = false;
    private briefingText : Phaser.BitmapText;

    private dashboard: Dashboard;

    public create()
    {
        if (this.debug) {
            this.game.time.advancedTiming = true
        }
        this.game.stage.backgroundColor = '#000000';
        this.briefingText = this.game.add.bitmapText(40, 40, 'carrier-command','Game PLAY STATE.', 10);
        this.briefingText.fixedToCamera = true;

        this.dashboard = new Dashboard(
            new Shell(this),
            new Speaker(),
            new Monitor()
        );

        // INIT LOCATIONS
        this.locations.push(new SnowyForest());

        this.add.image(0, 0, 'board');
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
