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
    isPlayingFinishScene: boolean = false;

    private debug: boolean = false;

    // Sprites
    private background: Phaser.Group;
    public middleground: Phaser.Group;
    public foreground: Phaser.Group;

    private output : Output;
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
        this.output = new Output();
        this.dashboard.setOutput(this.output);

        this.computerSound = new ComputerSound(this);
        this.computerSound.playAllSequentially();

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
        this.finish();

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

    private fade() {
        this.game.camera.fade(0x000000, 3000);
    }

    private resetFade() {
        this.game.camera.resetFX();

        // TODO: disable focus

        let timeout = 200;
        let output = this.output;

        setTimeout(function(){ output.writeToTerminal('...'); }, timeout);
        setTimeout(function(){ output.writeToTerminal('...'); }, timeout);
        setTimeout(function(){ output.writeToTerminal('...'); }, timeout);
        setTimeout(function(){ output.writeToTerminal('...'); }, timeout);
        setTimeout(function(){ output.writeToTerminal('...'); }, timeout);
        setTimeout(function(){ output.writeToTerminal('Subject: LD39 ASAP!'); }, timeout * 2);
        setTimeout(function(){ output.writeToTerminal('From: Bernard McLindon')}, timeout * 3);
        setTimeout(function(){ output.writeToTerminal(
            'Well received the confirmation of station health check, everything is ok.'+
            'We started the extraction, your job is done here.' +
            'BTW, engineers messed up again, they don\'t manage to remotely update your rover\'s firmware, ' +
            'it seems the patch is not applicable.' +
            'Anyway, let it there, you\'ll receive a new rover on LD 39, your new mission starts now.' +
            '.')}, timeout * 4);
        setTimeout(function(){ output.writeToTerminal('...'); }, timeout*5);

    }

    private finish() {
        if (this.isPlayingFinishScene == false && this.installedModules.length == 1) {

            this.isPlayingFinishScene = true;

            this.game.camera.onFadeComplete.add(this.resetFade, this);
            this.fade();
        }
    }
}
