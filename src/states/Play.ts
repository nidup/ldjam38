import { Biome } from '../biome/biome';
import { Grassland } from '../biome/grassland';
import { Ocean } from '../biome/ocean';
import { RainForest } from '../biome/rain-forest';
import { RockyMountain } from '../biome/rocky-mountain';
import { SandDesert } from '../biome/sand-desert';
import { SnowyForest } from '../biome/snowy-forest';
import { Tundra } from '../biome/tundra';

import Shell from '../shell';
import Speaker from '../speaker';
import Monitor from '../monitor';
import Dashboard from '../dashboard';
import KeyboardSound from '../sounds/keyboard';

export default class Play extends Phaser.State {
    currentLocation: Biome;
    locations: Biome[] = [];

    private debug: boolean = false;
    private briefingText : Phaser.BitmapText;

    private dashboard: Dashboard;
    private keyboardSound: KeyboardSound;

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

        this.keyboardSound = new KeyboardSound(this);
        this.keyboardSound.register();

        // INIT LOCATIONS
        this.locations.push(new Grassland());
        this.locations.push(new Ocean());
        this.locations.push(new RainForest());
        this.locations.push(new RockyMountain());
        this.locations.push(new SandDesert());
        this.locations.push(new SnowyForest());
        this.locations.push(new Tundra());

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
