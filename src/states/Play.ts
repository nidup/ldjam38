import { Biome } from '../biome/biome';
import { Grassland } from '../biome/grassland';
import { SeaShore } from "../biome/sea-shore";
import { RainForest } from '../biome/rain-forest';
import { RockyMountain } from '../biome/rocky-mountain';
import { SandDesert } from '../biome/sand-desert';
import { IceField } from '../biome/ice-field';
import { Tundra } from '../biome/tundra';

import BoardFX from '../fx/board';

import Shell from '../shell';
import Speaker from '../speaker';
import Monitor from '../monitor';
import Leds from '../leds';
import Dashboard from '../dashboard';
import KeyboardSound from '../sounds/keyboard';
import ComputerSound from '../sounds/computer';
import {Output} from "../terminal/output";
import { InstalledModule } from '../installed-module';

export default class Play extends Phaser.State {
    currentLocation: Biome;
    locations: Biome[] = [];
    installedModules: InstalledModule[] = [];
    isRoverLanded: boolean = false;

    private debug: boolean = false;
    private briefingText : Phaser.BitmapText;

    // Sprites
    private background: Phaser.Group;
    public middleground: Phaser.Group;
    public foreground: Phaser.Group;

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
        // this.briefingText = this.game.add.bitmapText(40, 40, 'carrier-command','Game PLAY STATE.', 10);
        // this.briefingText.fixedToCamera = true;

        this.dashboard = new Dashboard(
            new Shell(this),
            new Speaker(this),
            new Monitor(this),
            new Leds(this)
        );
        this.dashboard.setOutput(new Output());

        this.computerSound = new ComputerSound(this);
        this.computerSound.playAllSequentially();

        this.keyboardSound = new KeyboardSound(this);
        this.keyboardSound.register();

        // INIT LOCATIONS
        this.locations.push(new Grassland());
        this.locations.push(new SeaShore());
        this.locations.push(new RainForest());
        this.locations.push(new RockyMountain());
        this.locations.push(new SandDesert());
        this.locations.push(new IceField());
        this.locations.push(new Tundra());

        this.background = this.game.add.group();
        var board = this.background.create(0, 0, 'board');
        board.width = board.width * 1.5;
        board.height = board.height * 1.5;

        this.middleground = this.game.add.group();

        this.boardFX = new BoardFX(this);
        this.boardFX.display();

        this.foreground = this.game.add.group();

        var board_top = this.foreground.create(0, 0, 'board_top');
        board_top.width = board_top.width * 1.5;
        board_top.height = board_top.height * 1.5;

        this.dashboard.leds.displayLeds();
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
