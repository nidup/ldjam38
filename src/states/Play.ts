import { Biome } from '../biome/biome';
import { Grassland } from '../biome/grassland';
import { Ocean } from '../biome/ocean';
import { RainForest } from '../biome/rain-forest';
import { RockyMountain } from '../biome/rocky-mountain';
import { SandDesert } from '../biome/sand-desert';
import { SnowyForest } from '../biome/snowy-forest';
import { Tundra } from '../biome/tundra';

import BoardFX from '../fx/board';

import Shell from '../shell';
import Speaker from '../speaker';
import Monitor from '../monitor';
import Dashboard from '../dashboard';
import KeyboardSound from '../sounds/keyboard';
import ComputerSound from '../sounds/computer';
import {Output} from "../terminal/output";

export default class Play extends Phaser.State {
    currentLocation: Biome;
    locations: Biome[] = [];

    private debug: boolean = false;
    private briefingText : Phaser.BitmapText;

    private dashboard: Dashboard;
    private keyboardSound: KeyboardSound;
    private computerSound: ComputerSound;

    private boardFX: BoardFX;

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
            new Speaker(this),
            new Monitor(this)
        );
        this.dashboard.setOutput(new Output());

        this.computerSound = new ComputerSound(this);
        this.computerSound.playAllSequentially();

        this.keyboardSound = new KeyboardSound(this);
        this.keyboardSound.register();

        // INIT LOCATIONS
        this.locations.push(new Grassland(this.dashboard));
        this.locations.push(new Ocean(this.dashboard));
        this.locations.push(new RainForest(this.dashboard));
        this.locations.push(new RockyMountain(this.dashboard));
        this.locations.push(new SandDesert(this.dashboard));
        this.locations.push(new SnowyForest(this.dashboard));
        this.locations.push(new Tundra(this.dashboard));

        this.add.image(0, 0, 'board');

        this.boardFX = new BoardFX(this);
        this.boardFX.display();

        this.add.image(0, 0, 'board_top');
    }

    public update()
    {
        this.boardFX.update();
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
