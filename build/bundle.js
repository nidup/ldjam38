/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Grassland {
    constructor() {
        this.name = 'grassland';
        this.type = 'Grassland';
        this.description = 'What a beautiful place. The blue sky, the shiny sun, the soft wind… It is a call for meditation. 00001001010100101010101111';
        this.searched = false;
        this.searchedCount = 0;
    }
    search(output) {
        this.searched = true;
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('It is a perfect place to build a little house, in this giant prairie. I’ll send you the blueprints.');
                output.writeToTerminal("Uploading one photo...");
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (108): 3% ...');
                    output.displayToMonitor('scenes/grassland', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (108): 21% ...');
                    output.displayToMonitor('scenes/grassland', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (108): 48% ...');
                    output.displayToMonitor('scenes/grassland', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (108): 79% ...');
                    output.displayToMonitor('scenes/grassland', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (108): 100% ...');
                    output.displayToMonitor('scenes/grassland', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 2:
                output.writeToTerminal('I have just seen a weird ball of fur jumping around.');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) {
        output.writeToTerminal('I had some problems during the installation, I patched it, I really hope it will hold. Would be a shame call it wasteland...');
    }
}
exports.Grassland = Grassland;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RainForest {
    constructor() {
        this.name = 'rain-forest';
        this.type = 'Rain Forest';
        this.description = 'These trees are really big. The sun is hiding behind their leafs. Humidity is way too high for my integrated circuits. No, I’m not a complaining robots. Just being realistic here...';
        this.searched = false;
        this.searchedCount = 0;
    }
    search(output) {
        this.searched = true;
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('What a packed forest, maybe I could find a clearing to send you a picture.');
                break;
            case 2:
                output.writeToTerminal('Uploading one photo...');
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (102): 5% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (102): 25% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (102): 53% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (102): 78% ...');
                    output.displayToMonitor('scenes/rain-forest', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (102): 100% ...');
                    output.displayToMonitor('scenes/rain-forest', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 3:
                output.writeToTerminal('Like a feeling of being observed by some beasts. Did you hear that ?');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) {
        output.writeToTerminal('I had to cut down all the trees... the place is sadly silent now. All I can hear is my engine.');
    }
}
exports.RainForest = RainForest;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class RockyMountain {
    constructor() {
        this.name = 'rocky-mountain';
        this.type = 'Rocky Mountain';
        this.description = 'It is hard for my wheels to proceed in this cliff. But I want to see what it feels like to be on top of the world.';
        this.searched = false;
        this.searchedCount = 0;
    }
    search(output) {
        this.searched = true;
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('The wind is strong, but the view is clear. Really I wish you would be there with me.');
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (78): 7% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (78): 26% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (78): 58% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (78): 81% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (78): 100% ...');
                    output.displayToMonitor('scenes/rocky-mountain', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 2:
                output.writeToTerminal('I feel I’m closer to you. What a beautiful world.');
                break;
            case 3:
                output.writeToTerminal('Hola dere tütü, hola dero');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) {
        output.writeToTerminal('The signal is much better now.');
    }
}
exports.RockyMountain = RockyMountain;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SandDesert {
    constructor() {
        this.name = 'sand-desert';
        this.type = 'Sand Desert';
        this.description = 'Hot wind and sand aren’t good mix for my core processors. But the view of the dunes… I wish you were with me to see this.';
        this.searched = false;
        this.searchedCount = 0;
    }
    search(output) {
        this.searched = true;
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal("This shape in the horizon is unusual in the desert relief.");
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (137): 9% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (137): 20% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (137): 51% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (137): 83% ...');
                    output.displayToMonitor('scenes/sand-desert', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (137): 100% ...');
                    output.displayToMonitor('scenes/sand-desert', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 2:
                output.writeToTerminal('The more I follow this shape, the further it looks..');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) {
        output.writeToTerminal('I have terraformed a lot of dunes, it now looks like a giant beach.');
    }
}
exports.SandDesert = SandDesert;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SeaShore {
    constructor() {
        this.name = 'sea-shore';
        this.type = 'Sea Shore';
        this.description = 'Well, I can’t swim. Can you ?';
        this.searched = false;
        this.searchedCount = 0;
    }
    search(output) {
        this.searched = true;
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('There is powerful wind on this wide white sand beach, I\'m struggling to stand on my wheels.');
                output.writeToTerminal("Uploading one photo...");
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (109): 5% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (109): 25% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (109): 53% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (109): 78% ...');
                    output.displayToMonitor('scenes/sea-shore', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (109): 100% ...');
                    output.displayToMonitor('scenes/sea-shore', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 2:
                output.writeToTerminal('Don’t count on me to dip a wheel in the water.');
                break;
            case 3:
                output.writeToTerminal('I’m starting to have sand in my pipes...');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) {
        output.writeToTerminal('Not an easy job, but it’s working.');
    }
}
exports.SeaShore = SeaShore;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Tundra {
    constructor() {
        this.name = 'tundra';
        this.type = 'Tundra';
        this.description = 'I will call it tundra. Nothing but infinite landscape where fragile plants and bush grow despite the continuous polar cold wind.';
        this.searched = false;
        this.searchedCount = 0;
    }
    search(output) {
        this.searched = true;
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal("This little plant is trapped in the frost.");
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (183): 5% ...');
                    output.displayToMonitor('scenes/toundra', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (183): 25% ...');
                    output.displayToMonitor('scenes/toundra', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (183): 53% ...');
                    output.displayToMonitor('scenes/toundra', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (183): 78% ...');
                    output.displayToMonitor('scenes/toundra', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (183): 100% ...');
                    output.displayToMonitor('scenes/toundra', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 2:
                output.writeToTerminal('The topographic analysis indicates a rich underground, it must be at least a million years old.');
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) {
        output.writeToTerminal('Pipeline network is finished. Should we talk about this last remaining bolt?..');
    }
}
exports.Tundra = Tundra;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Leds {
    constructor(state) {
        this.ledY = 96 * 1.5;
        this.led1X = 497 * 1.5;
        this.led2X = 517 * 1.5;
        this.led3X = 537 * 1.5;
        this.led4X = 557 * 1.5;
        this.state = state;
    }
    static loadAssets(state) {
        state.load.image('leds/off', 'assets/images/leds/led_off.png');
        state.load.image('leds/on', 'assets/images/leds/led_on.png');
    }
    turnOnLed(position) {
        switch (position) {
            case 1:
                this.state.foreground.create(this.led1X, this.ledY, 'leds/on');
                break;
            case 2:
                this.state.foreground.create(this.led2X, this.ledY, 'leds/on');
                break;
            case 3:
                this.state.foreground.create(this.led3X, this.ledY, 'leds/on');
                break;
            case 4:
                this.state.foreground.create(this.led4X, this.ledY, 'leds/on');
                break;
        }
    }
    displayLeds() {
        this.state.foreground.create(this.led1X, this.ledY, 'leds/off');
        this.state.foreground.create(this.led2X, this.ledY, 'leds/off');
        this.state.foreground.create(this.led3X, this.ledY, 'leds/off');
        this.state.foreground.create(this.led4X, this.ledY, 'leds/off');
    }
    setOutput(output) {
        this.output = output;
        output.leds = this;
    }
}
exports.default = Leds;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Monitor {
    constructor(state) {
        this.state = state;
    }
    static loadAssets(state) {
        state.load.image('scenes/rain-forest', 'assets/images/scenes/rain-forest.png');
        state.load.image('scenes/rocky-mountain', 'assets/images/scenes/rocky-mountain.png');
        state.load.image('scenes/grassland', 'assets/images/scenes/grassland.png');
        state.load.image('scenes/sand-desert', 'assets/images/scenes/sand-desert.png');
        state.load.image('scenes/ice-field', 'assets/images/scenes/ice-field.png');
        state.load.image('scenes/sea-shore', 'assets/images/scenes/sea-shore.png');
        state.load.image('scenes/toundra', 'assets/images/scenes/toundra.png');
    }
    showImage(name, opacity) {
        if (this.currentImage) {
            this.currentImage.kill();
        }
        this.currentImage = this.state.middleground.create(490 * 1.5, 135 * 1.5, name);
        this.currentImage.width = 100 * 1.5;
        this.currentImage.height = 73 * 1.5;
        this.currentImage.alpha = opacity;
    }
    update() {
    }
    setOutput(output) {
        this.output = output;
        output.monitor = this;
    }
}
exports.default = Monitor;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ComputerSound {
    constructor(state) {
        this.state = state;
    }
    static loadAssets(state) {
        state.load.audio('computer/boot', ComputerSound.bootPath);
        state.load.audio('computer/ventilo', ComputerSound.ventiloPath);
        state.load.audio('computer/ventiloLoop', ComputerSound.ventiloLoopPath);
    }
    playAllSequentially() {
        this.playBoot();
        setTimeout(() => {
            this.playVentilo();
            setTimeout(() => {
                this.playVentiloLoop();
            }, 35000);
        }, 18000);
    }
    playBoot() {
        this.state.sound.play('computer/boot', 1, false);
    }
    playVentilo() {
        this.state.sound.play('computer/ventilo', 1, false);
    }
    playVentiloLoop() {
        this.state.sound.play('computer/ventiloLoop', 1, true);
    }
}
ComputerSound.bootPath = 'assets/sounds/ot_computer_start.mp3';
ComputerSound.ventiloPath = 'assets/sounds/fade_in_computer_ventilo.mp3';
ComputerSound.ventiloLoopPath = 'assets/sounds/loop_computer_ventilo.mp3';
exports.default = ComputerSound;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class KeyboardSound {
    constructor(state) {
        this.state = state;
    }
    static loadAssets(state) {
        for (var i = 1; i <= KeyboardSound.numberEnter; i++) {
            var j = ("00" + i).substr(-2, 2);
            state.load.audio('keyboard/enter_' + j + '.wav', KeyboardSound.enterPath + j + '.wav');
        }
        for (var i = 1; i <= KeyboardSound.numberKey; i++) {
            var j = ("00" + i).substr(-2, 2);
            state.load.audio('keyboard/key_' + j + '.wav', KeyboardSound.keyPath + j + '.wav');
        }
        for (var i = 1; i <= KeyboardSound.numberSpace; i++) {
            var j = ("00" + i).substr(-2, 2);
            state.load.audio('keyboard/space_' + j + '.wav', KeyboardSound.spacePath + j + '.wav');
        }
    }
    register() {
        this.state.input.keyboard.onDownCallback = (event) => {
            if (event.repeat) {
                return;
            }
            if (event.keyCode == Phaser.Keyboard.ENTER) {
                this.playEnter();
            }
            else if (event.keyCode == Phaser.Keyboard.SPACEBAR) {
                this.playSpace();
            }
            else {
                this.playKey();
            }
        };
    }
    playEnter() {
        var i = Math.floor((Math.random() * KeyboardSound.numberEnter) + 1);
        var j = ("00" + i).substr(-2, 2);
        this.state.sound.play('keyboard/enter_' + j + '.wav');
    }
    playSpace() {
        var i = Math.floor((Math.random() * KeyboardSound.numberSpace) + 1);
        var j = ("00" + i).substr(-2, 2);
        this.state.sound.play('keyboard/space_' + j + '.wav');
    }
    playKey() {
        var i = Math.floor((Math.random() * KeyboardSound.numberKey) + 1);
        var j = ("00" + i).substr(-2, 2);
        this.state.sound.play('keyboard/key_' + j + '.wav');
    }
}
KeyboardSound.numberKey = 32;
KeyboardSound.numberEnter = 8;
KeyboardSound.numberSpace = 8;
KeyboardSound.keyPath = 'assets/sounds/keyboard/key_';
KeyboardSound.enterPath = 'assets/sounds/keyboard/enter_';
KeyboardSound.spacePath = 'assets/sounds/keyboard/space_';
exports.default = KeyboardSound;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class SpaceshipSound {
    constructor(state) {
        this.state = state;
    }
    static loadAssets(state) {
        state.load.audio('spaceship/undock', SpaceshipSound.undockPath);
    }
    playUndock() {
        this.state.sound.play('spaceship/undock', 1, false);
    }
}
SpaceshipSound.undockPath = 'assets/sounds/ot_sound_rover_landing.mp3';
exports.default = SpaceshipSound;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Speaker {
    constructor(state) {
        this.state = state;
    }
    static loadAssets(state) {
        state.load.audio('notifications/error', 'assets/sounds/notifications/01.wav');
        state.load.audio('notifications/bip', 'assets/sounds/notifications/02.wav');
        state.load.audio('notifications/01', 'assets/sounds/notifications/01.wav');
        state.load.audio('notifications/success', 'assets/sounds/notifications/success.wav');
        state.load.audio('hdd/load/1', 'assets/sounds/hdd/load_1.wav');
        state.load.audio('hdd/load/2', 'assets/sounds/hdd/load_2.wav');
        state.load.audio('hdd/load/3', 'assets/sounds/hdd/load_3.wav');
        state.load.audio('hdd/load/4', 'assets/sounds/hdd/load_4.wav');
        state.load.audio('hdd/load/5', 'assets/sounds/hdd/load_5.wav');
        state.load.audio('hdd/load/6', 'assets/sounds/hdd/load_6.wav');
        state.load.audio('hdd/load/7', 'assets/sounds/hdd/load_7.wav');
        state.load.audio('hdd/load/8', 'assets/sounds/hdd/load_8.wav');
    }
    playSound(name, volume = 1, loop = false) {
        return this.state.sound.play(name, volume, loop);
    }
    setOutput(output) {
        this.output = output;
        output.speaker = this;
    }
}
exports.default = Speaker;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Boot extends Phaser.State {
    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.state.start('Preload');
    }
}
exports.default = Boot;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Introduction extends Phaser.State {
    constructor() {
        super(...arguments);
        this.nbCinematicImages = 2;
        this.currentPicture = 1;
    }
    create() {
        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.nextPicture, this);
    }
    update() {
        if (this.currentPicture > this.nbCinematicImages) {
            return this.game.state.start('Play');
        }
        this.add.image(0, 0, 'cinematic' + this.currentPicture);
    }
    nextPicture() {
        this.currentPicture++;
    }
}
exports.default = Introduction;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Menu extends Phaser.State {
    create() {
        this.game.stage.backgroundColor = '#1b1128';
        let spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        spaceKey.onDown.add(this.startGame, this);
        // this.titleText = this.game.add.bitmapText(40, 100, 'carrier-command','Our New Game', 27);
        // this.subtitleText = this.game.add.bitmapText(40, 140, 'carrier-command','LDJAM 38', 10);
        // this.startText = this.game.add.bitmapText(240, 300, 'carrier-command','Press space to start', 10);
    }
    startGame() {
        this.game.state.start('Introduction');
    }
    shutdown() {
        this.titleText.destroy();
        this.subtitleText.destroy();
        this.startText.destroy();
    }
}
exports.default = Menu;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const grassland_1 = __webpack_require__(0);
const sea_shore_1 = __webpack_require__(4);
const rain_forest_1 = __webpack_require__(1);
const rocky_mountain_1 = __webpack_require__(2);
const sand_desert_1 = __webpack_require__(3);
const ice_field_1 = __webpack_require__(18);
const tundra_1 = __webpack_require__(5);
const board_1 = __webpack_require__(20);
const shell_1 = __webpack_require__(21);
const speaker_1 = __webpack_require__(11);
const monitor_1 = __webpack_require__(7);
const leds_1 = __webpack_require__(6);
const dashboard_1 = __webpack_require__(19);
const keyboard_1 = __webpack_require__(9);
const computer_1 = __webpack_require__(8);
const output_1 = __webpack_require__(31);
class Play extends Phaser.State {
    constructor() {
        super(...arguments);
        this.locations = [];
        this.installedModules = [];
        this.isRoverLanded = false;
        this.isPlayingFinishScene = false;
        this.debug = false;
    }
    create() {
        if (this.debug) {
            this.game.time.advancedTiming = true;
        }
        this.game.stage.backgroundColor = '#000000';
        this.dashboard = new dashboard_1.default(new shell_1.default(this), new speaker_1.default(this), new monitor_1.default(this), new leds_1.default(this));
        this.output = new output_1.Output();
        this.dashboard.setOutput(this.output);
        this.computerSound = new computer_1.default(this);
        this.computerSound.playAllSequentially();
        this.keyboardSound = new keyboard_1.default(this);
        this.keyboardSound.register();
        // INIT LOCATIONS
        this.locations.push(new grassland_1.Grassland());
        this.locations.push(new sea_shore_1.SeaShore());
        this.locations.push(new rain_forest_1.RainForest());
        this.locations.push(new rocky_mountain_1.RockyMountain());
        this.locations.push(new sand_desert_1.SandDesert());
        this.locations.push(new ice_field_1.IceField());
        this.locations.push(new tundra_1.Tundra());
        this.background = this.game.add.group();
        var board = this.background.create(0, 0, 'board');
        board.width = board.width * 1.5;
        board.height = board.height * 1.5;
        this.middleground = this.game.add.group();
        this.boardFX = new board_1.default(this);
        this.boardFX.display();
        this.foreground = this.game.add.group();
        var board_top = this.foreground.create(0, 0, 'board_top');
        board_top.width = board_top.width * 1.5;
        board_top.height = board_top.height * 1.5;
        this.dashboard.leds.displayLeds();
    }
    update() {
        this.finish();
        this.boardFX.update();
    }
    render() {
        if (this.debug) {
            this.game.debug.text("FPS: " + this.game.time.fps + " ", 2, 14, "#00ff00");
        }
    }
    fade() {
        this.game.camera.fade(0x000000, 6000);
        this.output.terminalElement.value = '';
        let shellPrompt = document.getElementById("shellPrompt");
        shellPrompt.value = "";
        let shellInput = document.getElementById("shellInput");
        shellInput.setAttribute('disabled', 'true');
    }
    resetFade() {
        this.game.camera.resetFX();
        let shellPrompt = document.getElementById("shellPrompt");
        shellPrompt.value = "$ ";
        let timeout = 200;
        let output = this.output;
        setTimeout(function () { output.writeToTerminal('Subject: LD39 ASAP!'); }, timeout * 2);
        setTimeout(function () { output.writeToTerminal('From: Bernard McLindon'); }, timeout * 3);
        setTimeout(function () {
            output.writeToTerminal('Well received the confirmation of station health check, everything is ok.' +
                'We started the extraction, your job is done here.' +
                'BTW, engineers messed up again, they don\'t manage to remotely update your rover\'s firmware, ' +
                'it seems the patch is not applicable.' +
                'Anyway, let it there, you\'ll receive a new rover on LD 39, your new mission starts now.' +
                '.');
        }, timeout * 4);
        setTimeout(function () { output.writeToTerminal('...'); }, timeout * 5);
    }
    finish() {
        if (this.isPlayingFinishScene == false && this.installedModules.length == 1) {
            this.isPlayingFinishScene = true;
            this.game.camera.onFadeComplete.add(this.resetFade, this);
            this.fade();
        }
    }
}
exports.default = Play;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const keyboard_1 = __webpack_require__(9);
const computer_1 = __webpack_require__(8);
const spaceship_1 = __webpack_require__(10);
const speaker_1 = __webpack_require__(11);
const monitor_1 = __webpack_require__(7);
const leds_1 = __webpack_require__(6);
class Preload extends Phaser.State {
    preload() {
        this.load.image('cinematic1', 'assets/images/cinematic1.png');
        this.load.image('cinematic2', 'assets/images/cinematic2.png');
        this.load.image('board', 'assets/images/board.png');
        this.load.image('board_top', 'assets/images/board_top.png');
        speaker_1.default.loadAssets(this);
        monitor_1.default.loadAssets(this);
        leds_1.default.loadAssets(this);
        keyboard_1.default.loadAssets(this);
        computer_1.default.loadAssets(this);
        spaceship_1.default.loadAssets(this);
    }
    create() {
        // this.game.state.start('Menu');
        this.game.state.start('Play');
    }
}
exports.default = Preload;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../lib/phaser.d.ts"/>

Object.defineProperty(exports, "__esModule", { value: true });
const Boot_1 = __webpack_require__(12);
const Preload_1 = __webpack_require__(16);
const Menu_1 = __webpack_require__(14);
const Introduction_1 = __webpack_require__(13);
const Play_1 = __webpack_require__(15);
class SimpleGame extends Phaser.Game {
    constructor() {
        super(720 * 1.5, 405 * 1.5, Phaser.WEBGL, "content", null);
        this.state.add('Boot', Boot_1.default);
        this.state.add('Preload', Preload_1.default);
        this.state.add('Menu', Menu_1.default);
        this.state.add('Introduction', Introduction_1.default);
        this.state.add('Play', Play_1.default);
        this.state.start('Boot');
    }
}
window.onload = () => {
    new SimpleGame();
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class IceField {
    constructor() {
        this.name = 'ice-field';
        this.type = 'Ice field';
        this.description = 'I\'m freezing here, but I feel attracted by this place, don’t ask me why.';
        this.searchedCount = 0;
    }
    search(output) {
        this.searchedCount++;
        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal("My instruments are going crazy.");
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (99): 7% ...');
                    output.displayToMonitor('scenes/ice-field', 0.10);
                }, 1000 * 1);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (99): 28% ...');
                    output.displayToMonitor('scenes/ice-field', 0.25);
                }, 1000 * 2);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (99): 59% ...');
                    output.displayToMonitor('scenes/ice-field', 0.53);
                }, 1000 * 3);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (99): 81% ...');
                    output.displayToMonitor('scenes/ice-field', 0.78);
                }, 1000 * 4);
                setTimeout(function () {
                    output.writeToTerminal('Uploading one photo (99): 100% ...');
                    output.displayToMonitor('scenes/ice-field', 1);
                    output.writeToTerminal('Done.');
                }, 1000 * 5);
                break;
            case 2:
                output.writeToTerminal("It’s getting really cold down here, I can’t wear mittens!");
                break;
            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }
    build(output) { }
}
exports.IceField = IceField;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Dashboard {
    constructor(shell, speaker, monitor, leds) {
        this.shell = shell;
        this.speaker = speaker;
        this.monitor = monitor;
        this.leds = leds;
    }
    setOutput(output) {
        this.shell.setOutput(output);
        this.speaker.setOutput(output);
        this.monitor.setOutput(output);
        this.leds.setOutput(output);
    }
}
exports.default = Dashboard;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class BoardFX {
    constructor(state) {
        this.state = state;
    }
    display() {
        let fragmentSrc = [
            "precision mediump float;",
            "uniform float     time;",
            "uniform vec2      resolution;",
            "uniform vec2      mouse;",
            "float noise(vec2 pos) {",
            "return fract(sin(dot(pos, vec2(12.9898 - time,78.233 + time))) * 43758.5453);",
            "}",
            "void main( void ) {",
            "vec2 normalPos = gl_FragCoord.xy / resolution.xy;",
            "float pos = (gl_FragCoord.y / resolution.y);",
            "float mouse_dist = 0.0;",
            "float distortion = clamp(1.0 - (mouse_dist + 0.1) * 3.0, 0.0, 1.0);",
            "pos -= (distortion * distortion) * 0.1;",
            "float c = sin(pos * 400.0) * 0.4 + 0.4;",
            "c = pow(c, 0.2);",
            "c *= 0.05;",
            "float band_pos = fract(time * 0.1) * 3.0 - 1.0;",
            "c += clamp( (1.0 - abs(band_pos - pos) * 10.0), 0.0, 1.0) * 0.1;",
            "c += distortion * 0.08;",
            "// noise",
            "c += (noise(gl_FragCoord.xy) - 0.5) * (0.05);",
            "gl_FragColor = vec4( 0.0, c, 0.0, 0.1 );",
            "}"
        ];
        this.filter = new Phaser.Filter(this.state.game, null, fragmentSrc);
        this.filter.setResolution(300, 300);
        this.sprite = this.state.game.add.sprite(115 * 1.5, 70 * 1.5);
        this.sprite.width = 355 * 1.5;
        this.sprite.height = 265 * 1.5;
        this.sprite.filters = [this.filter];
    }
    update() {
        this.filter.update();
    }
}
exports.default = BoardFX;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const terminal_1 = __webpack_require__(32);
const help_1 = __webpack_require__(24);
const goto_1 = __webpack_require__(23);
const search_1 = __webpack_require__(27);
const whereami_1 = __webpack_require__(29);
const undock_1 = __webpack_require__(28);
const build_1 = __webpack_require__(22);
const inventory_1 = __webpack_require__(26);
const inbox_1 = __webpack_require__(25);
class Shell {
    constructor(state) {
        this.shellInput = null;
        this.shellText = null;
        this.shellPrompt = null;
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
        this.terminal = new terminal_1.Terminal();
        this.terminal.addActionFactory('help', help_1.HelpActionFactory);
        this.terminal.addActionFactory('goto', goto_1.GotoActionFactory);
        this.terminal.addActionFactory('search', search_1.SearchActionFactory);
        this.terminal.addActionFactory('whereami', whereami_1.WhereamiActionFactory);
        this.terminal.addActionFactory('inbox', inbox_1.InboxActionFactory);
        this.terminal.addActionFactory('build', build_1.BuildActionFactory);
        this.terminal.addActionFactory('undock', undock_1.UndockActionFactory);
        this.terminal.addActionFactory('inventory', inventory_1.InventoryActionFactory);
    }
    setOutput(output) {
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
                const stopSound = this.output.playToSpeaker('hdd/load/' + lastHddLoadSoundPlayed++);
                if (lastHddLoadSoundPlayed > 8) {
                    lastHddLoadSoundPlayed = 1;
                }
                try {
                    this.terminal
                        .getAction(this.shellInput.value)
                        .execute(this.state, this.output)
                        .then(() => {
                        stopSound();
                        this.shellInput.removeAttribute('disabled');
                        this.shellInput.focus();
                    }, (error) => {
                        stopSound();
                        this.printError(error);
                    });
                }
                catch (e) {
                    stopSound();
                    this.printError(e);
                }
                this.shellInput.value = "";
            }, this);
            this.shellInput.removeAttribute('disabled');
            this.shellInput.focus();
        });
    }
    printError(error) {
        this.output.writeToTerminal(error, true);
        this.output.playToSpeaker('notifications/error');
        this.shellInput.removeAttribute('disabled');
        this.shellInput.focus();
    }
    writeBootLines(output, callback) {
        let timeout = 1000;
        setTimeout(function () { output.writeToTerminal('Booting computer...'); }, timeout * 2);
        setTimeout(function () {
            output.writeToTerminal("______         _  _____  _____  _____  _____ ");
            output.writeToTerminal("| ___ \\       | |/ __  \\|  _  ||  _  ||  _  |");
            output.writeToTerminal("| |_/ /__   __| |`' / /'| |/' || |/' || |/' |");
            output.writeToTerminal("|  __/ _ \\ / _` |  / /  |  /| ||  /| ||  /| |");
            output.writeToTerminal("| | | (_) | (_| |./ /___\\ |_/ /\\ |_/ /\\ |_/ /");
            output.writeToTerminal("\\_|  \\___/ \\__,_|\\_____/ \\___/  \\___/  \\___/ ");
        }, timeout * 3);
        setTimeout(function () { output.writeToTerminal(':: Loading kernel...'); }, timeout * 5);
        setTimeout(function () { output.writeToTerminal(':: Loading external modules...'); }, timeout * 8);
        setTimeout(function () { output.writeToTerminal(':: Checking for system integrity...'); }, timeout * 13);
        setTimeout(function () { output.writeToTerminal(':: Warming up RAM module...'); }, timeout * 17);
        setTimeout(function () {
            output.writeToTerminal('Welcome again agent XD6001.');
            output.writeToTerminal('You\'ve got a new message! (type `inbox`)');
            callback();
        }, timeout * 18);
    }
}
exports.default = Shell;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tundra_1 = __webpack_require__(5);
const sand_desert_1 = __webpack_require__(3);
const rocky_mountain_1 = __webpack_require__(2);
const grassland_1 = __webpack_require__(0);
const sea_shore_1 = __webpack_require__(4);
const rain_forest_1 = __webpack_require__(1);
class Build {
    constructor(module) {
        this.name = 'build';
        this.module = module;
    }
    execute(state, output) {
        const that = this;
        return new Promise((resolve) => {
            if (state.isRoverLanded == false) {
                output.writeToTerminal('I can\'t build. I\'m docked. I feel lonely for years now, parked here, I would discover the world.');
                resolve();
                return;
            }
            switch (that.module) {
                case 'extractor':
                    if (state.currentLocation instanceof tundra_1.Tundra || state.currentLocation instanceof sand_desert_1.SandDesert) {
                        const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                        if (undefined !== installedModule) {
                            throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                        }
                        let type = 'smelter';
                        return that.build(output, type, () => {
                            output.playToSpeaker('notifications/success');
                            setTimeout(() => {
                                output.playToSpeaker('notifications/bip');
                                output.turnOnLed(3);
                            }, 500);
                            state.currentLocation.build(output);
                            state.installedModules.push({
                                name: that.module,
                                location: state.currentLocation,
                                type: type
                            });
                            resolve();
                        });
                    }
                    throw 'Cannot install module "' + that.module + '" in "' + state.currentLocation.type + '".';
                case 'communication':
                    if (state.currentLocation instanceof rocky_mountain_1.RockyMountain) {
                        const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                        if (undefined !== installedModule) {
                            throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                        }
                        let type = 'satellite dish';
                        return that.build(output, type, () => {
                            output.playToSpeaker('notifications/success');
                            setTimeout(() => {
                                output.playToSpeaker('notifications/bip');
                                output.turnOnLed(2);
                            }, 500);
                            state.currentLocation.build(output);
                            state.installedModules.push({
                                name: that.module,
                                location: state.currentLocation,
                                type: type
                            });
                            resolve();
                        });
                    }
                    throw 'Cannot install module "' + that.module + '" in "' + state.currentLocation.type + '".';
                case 'refinery':
                    if (state.currentLocation instanceof grassland_1.Grassland || state.currentLocation instanceof sand_desert_1.SandDesert) {
                        const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                        if (undefined !== installedModule) {
                            throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                        }
                        let type = 'autonomous processor';
                        return that.build(output, type, () => {
                            output.playToSpeaker('notifications/success');
                            setTimeout(() => {
                                output.playToSpeaker('notifications/bip');
                                output.turnOnLed(4);
                            }, 500);
                            state.currentLocation.build(output);
                            state.installedModules.push({
                                name: that.module,
                                location: state.currentLocation,
                                type: type
                            });
                            resolve();
                        });
                    }
                    throw 'Cannot install module "' + that.module + '" in "' + state.currentLocation.type + '".';
                case 'energy':
                    if (state.currentLocation instanceof sea_shore_1.SeaShore || state.currentLocation instanceof sand_desert_1.SandDesert || state.currentLocation instanceof rain_forest_1.RainForest) {
                        const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                        if (undefined !== installedModule) {
                            throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                        }
                        let type = '';
                        if (state.currentLocation instanceof sea_shore_1.SeaShore) {
                            type = 'wind turbines';
                        }
                        else if (state.currentLocation instanceof sand_desert_1.SandDesert) {
                            type = "solar panels";
                        }
                        else {
                            type = "biomass processor";
                        }
                        return that.build(output, type, () => {
                            output.playToSpeaker('notifications/success');
                            setTimeout(() => {
                                output.playToSpeaker('notifications/bip');
                                output.turnOnLed(1);
                            }, 500);
                            state.currentLocation.build(output);
                            state.installedModules.push({
                                name: that.module,
                                location: state.currentLocation,
                                type: type
                            });
                            resolve();
                        });
                    }
                    throw 'Cannot install module "' + that.module + '" in "' + state.currentLocation.type + '".';
                default:
                    throw 'Unknown module "' + that.module + '".';
            }
        });
    }
    build(output, type, callback) {
        output.writeToTerminal('Setting up the ' + this.module + '[' + type + ']...');
        for (var i = 0; i <= 10; i++) {
            const j = i;
            setTimeout(() => output.writeToTerminal(j * 10 + '%'), j * 100);
        }
        setTimeout(() => {
            output.writeToTerminal(this.module.charAt(0).toUpperCase() + this.module.slice(1) + '[' + type + '] installed successfully!');
            callback();
        }, 1001);
    }
}
function BuildActionFactory(parameters) {
    if (1 !== parameters.length) {
        throw 'What do you want to build?!';
    }
    return new Build(parameters[0]);
}
exports.BuildActionFactory = BuildActionFactory;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Goto {
    constructor(destination) {
        this.name = 'goto';
        this.destination = destination;
    }
    execute(state, output) {
        return new Promise((resolve) => {
            if (state.isRoverLanded == false) {
                output.writeToTerminal('I can\'t move. I\'m docked. I feel lonely for years now, parked here, I would discover the world.');
                resolve();
                return;
            }
            const destination = state.locations.filter((location) => location.name === this.destination);
            if (1 === destination.length) {
                state.currentLocation = destination[0];
                output.writeToTerminal('Moved to ' + state.currentLocation.type + '.');
                output.writeToTerminal(state.currentLocation.description);
                resolve();
                return;
            }
            output.writeToTerminal('I don\'t know this place...');
            resolve();
        });
    }
}
function GotoActionFactory(parameters) {
    if (1 !== parameters.length) {
        throw 'I need a destination, I can\'t decide where to go, or may I?';
    }
    return new Goto(parameters[0]);
}
exports.GotoActionFactory = GotoActionFactory;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Help {
    constructor() {
        this.name = 'help';
    }
    execute(state, output) {
        return new Promise(function (resolve) {
            output.writeToTerminal('help               -- display helps');
            let timeout = 200;
            setTimeout(function () { output.writeToTerminal('build [module]     -- build a module'); }, timeout * 1);
            setTimeout(function () { output.writeToTerminal('goto [location]    -- move to location'); }, timeout * 2);
            setTimeout(function () { output.writeToTerminal('inbox              -- check your inbox'); }, timeout * 3);
            setTimeout(function () { output.writeToTerminal('inventory          -- check rover inventory'); }, timeout * 4);
            setTimeout(function () { output.writeToTerminal('undock             -- undock rover from pod'); }, timeout * 5);
            setTimeout(function () { output.writeToTerminal('whereami           -- current/known locations'); }, timeout * 6);
            setTimeout(function () { output.writeToTerminal('search             -- analysis of current location'); resolve(); }, timeout * 7);
        });
    }
}
function HelpActionFactory(parameters) {
    return new Help();
}
exports.HelpActionFactory = HelpActionFactory;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Inbox {
    constructor() {
        this.name = 'inbox';
    }
    execute(state, output) {
        return new Promise((resolve) => {
            output.writeToTerminal('Subject: Get the job done');
            output.writeToTerminal('From: Bernard McLindon');
            output.writeToTerminal('No surprise, investors are pushing us for exo-planet LD38. You know the drill: ' +
                'land the rover on the surface, deploy solar arrays, settle the communication ' +
                'network, install the ore extractor and refinery. Be quick, be efficient, don’t ' +
                'lose your time around this small rock. And don’t listen to the rover, the new firmware' +
                ' made him… a little poetic. You’ll see.' +
                '\nPS: In case your forget it, you’ll have to `undock` your rover.');
            resolve();
        });
    }
}
function InboxActionFactory(parameters) {
    return new Inbox();
}
exports.InboxActionFactory = InboxActionFactory;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
    constructor() {
        this.name = 'inventory';
    }
    execute(state, output) {
        return new Promise((resolve) => {
            let timeout = 200;
            const modules = ['communication', 'energy', 'refinery', 'extractor'];
            let indModule = 0;
            let installedModule = null;
            for (let module of modules) {
                indModule++;
                installedModule = state.installedModules.find((installed) => installed.name === module);
                if (installedModule) {
                    setTimeout(function () { output.writeToTerminal(module + ' (0 remaining module)'); }, timeout * indModule);
                }
                else {
                    setTimeout(function () { output.writeToTerminal(module + ' (1 remaining module)'); }, timeout * indModule);
                }
            }
            setTimeout(() => resolve(), timeout * (indModule + 1));
        });
    }
}
function InventoryActionFactory(parameters) {
    return new Inventory();
}
exports.InventoryActionFactory = InventoryActionFactory;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Search {
    constructor() {
        this.name = 'search';
    }
    execute(state, output) {
        return new Promise((resolve) => {
            if (state.isRoverLanded == false) {
                output.writeToTerminal('I can\'t search. I\'m docked. I feel lonely for years now, parked here, I would discover the world.');
                resolve();
                return;
            }
            const location = state.currentLocation;
            if (!location) {
                throw 'Move me first...';
            }
            location.search(output);
            resolve();
        });
    }
}
exports.Search = Search;
function SearchActionFactory(parameters) {
    return new Search();
}
exports.SearchActionFactory = SearchActionFactory;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const spaceship_1 = __webpack_require__(10);
class Undock {
    constructor() {
        this.name = 'undock';
    }
    execute(state, output) {
        return new Promise((resolve) => {
            if (state.isRoverLanded) {
                output.writeToTerminal('Nothing to undock.');
                resolve();
                return;
            }
            output.writeToTerminal('Wow, finally!', false, true);
            output.writeToTerminal(':: Undocking procedure started');
            let spaceshipSound = new spaceship_1.default(state);
            spaceshipSound.playUndock();
            setTimeout(() => { output.writeToTerminal(':: Depressuring process...'); }, 2000);
            setTimeout(() => { output.writeToTerminal(':: Undocking rover... please stay vigilant.'); }, 15000);
            setTimeout(() => {
                output.writeToTerminal('Undocking process succeeded!');
                state.isRoverLanded = true;
                // always land on snowy-forest, you can't do nothing here
                state.currentLocation = state.locations.find((location) => location.name === 'ice-field');
            }, 28000);
            setTimeout(() => {
                output.writeToTerminal('Boot...');
                output.writeToTerminal('Connect to recon rover...');
            }, 28500);
            setTimeout(() => { output.writeToTerminal('Ping...'); }, 29000);
            setTimeout(() => { output.writeToTerminal('Ping...'); }, 30000);
            setTimeout(() => { output.writeToTerminal('Ping...'); }, 31000);
            setTimeout(() => { output.writeToTerminal('Connection established.'); }, 32000);
            setTimeout(() => { output.writeToTerminal('Hello operator, I\'m VJ-Net38, your recon rover. I\'ve finally landed on this small planet, feel free to send instructions.', false, true); resolve(); }, 33000);
        });
    }
}
function UndockActionFactory(parameters) {
    return new Undock();
}
exports.UndockActionFactory = UndockActionFactory;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Whereami {
    constructor() {
        this.name = 'whereami';
    }
    execute(state, output) {
        return new Promise((resolve) => {
            const currentLocation = state.currentLocation;
            if (!state.isRoverLanded) {
                output.writeToTerminal('Docked in the pod.');
                resolve();
                return;
            }
            for (let location of state.locations) {
                if (currentLocation && currentLocation.type == location.type) {
                    output.writeToTerminal('[x] ' + location.name);
                }
                else {
                    output.writeToTerminal('[ ] ' + location.name);
                }
            }
            resolve();
        });
    }
}
function WhereamiActionFactory(parameters) {
    return new Whereami();
}
exports.WhereamiActionFactory = WhereamiActionFactory;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor() {
        this.parameters = [];
    }
}
exports.Command = Command;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Output {
    writeToTerminal(data, errored = false, fromRover = false) {
        var lineStart = '';
        if (this.terminalElement.value !== "") {
            lineStart = '\n';
        }
        if (errored) {
            this.terminalElement.value = this.terminalElement.value + lineStart + '>>> ERROR: ' + data + '\n';
        }
        else if (fromRover) {
            this.terminalElement.value = this.terminalElement.value + lineStart + 'VJ-Net38: "' + data + '"\n';
        }
        else {
            this.terminalElement.value = this.terminalElement.value + lineStart + '>>> ' + data;
        }
        this.terminalElement.scrollTop = this.terminalElement.scrollHeight + 10;
    }
    playToSpeaker(data, volume = 1, loop = false) {
        const sound = this.speaker.playSound(data, volume, loop);
        return () => sound.destroy();
    }
    displayToMonitor(data, opacity) {
        this.monitor.showImage(data, opacity);
    }
    turnOnLed(position) {
        this.leds.turnOnLed(position);
    }
}
exports.Output = Output;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(30);
class Terminal {
    constructor() {
        this.actionFactories = [];
    }
    addActionFactory(name, factory) {
        this.actionFactories[name] = factory;
    }
    getAction(input) {
        const command = input
            .split(' ')
            .reduce((command, elem, idx) => {
            if (0 === idx) {
                command.name = elem;
                return command;
            }
            command.parameters.push(elem);
            return command;
        }, new command_1.Command());
        if (command.name in this.actionFactories) {
            return this.actionFactories[command.name](command.parameters);
        }
        throw 'Unknown command "' + command.name + '" (type "help" for help).';
    }
}
exports.Terminal = Terminal;


/***/ })
/******/ ]);