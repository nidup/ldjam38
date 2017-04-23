import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { Biome } from '../../biome/biome';
import { Tundra } from '../../biome/tundra';
import { SandDesert } from '../../biome/sand-desert';
import {RockyMountain} from "../../biome/rocky-mountain";
import {Grassland} from "../../biome/grassland";
import {SeaShore} from "../../biome/sea-shore";
import {RainForest} from "../../biome/rain-forest";

class Build implements Action {
    name: string = 'build';
    module: string;

    constructor(module: string) {
        this.module = module;
    }

    execute(state: Play, output: Output) {
        const that = this;
        return new Promise((resolve) => {
            switch (that.module) {
                case 'extractor':
                    if (state.currentLocation instanceof Tundra || state.currentLocation instanceof SandDesert) {
                    const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                    if (undefined !== installedModule) {
                        throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                    }

                    let type = 'smelter';
                    return that.build(output, type, () => {
                        output.playToSpeaker('notifications/success');
                        output.turnOnLed(3);

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
                    if (state.currentLocation instanceof RockyMountain) {
                    const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                    if (undefined !== installedModule) {
                        throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                    }

                    let type = 'satellite dish';
                    return that.build(output, type, () => {
                        output.playToSpeaker('notifications/success');
                        output.turnOnLed(2);

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
                    if (state.currentLocation instanceof Grassland || state.currentLocation instanceof SandDesert) {
                    const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                    if (undefined !== installedModule) {
                        throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                    }

                    let type = 'autonomous processor';
                    return that.build(output, type, () => {
                        output.playToSpeaker('notifications/success');
                        output.turnOnLed(4);

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
                    if (state.currentLocation instanceof SeaShore || state.currentLocation instanceof SandDesert || state.currentLocation instanceof RainForest) {
                    const installedModule = state.installedModules.find((installed) => installed.name === that.module);
                    if (undefined !== installedModule) {
                        throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                    }

                    let type = '';
                    if (state.currentLocation instanceof SeaShore) {
                        type = 'wind turbines';
                    } else if (state.currentLocation instanceof SeaShore) {
                        type = "solar panels";
                    } else {
                        type = "biomass processor";
                    }

                    return that.build(output, type, () => {
                        output.playToSpeaker('notifications/success');
                        output.turnOnLed(1);

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

    private build(output: Output, type, callback) {
        output.writeToTerminal('Setting up the ' + this.module + '[' + type + ']...');
        for (var i = 0; i <= 10; i++) {
            const j = i;
            setTimeout(() => output.writeToTerminal(j*10 + '%'), j*100);
        }
        setTimeout(() => {
            output.writeToTerminal(this.module.charAt(0).toUpperCase() + this.module.slice(1) + '[' + type + '] installed successfully!');
            callback();
        }, 1001);
    }
}

export function BuildActionFactory(parameters: string[]) {
    if (1 !== parameters.length) {
        throw 'What do you want to build?!';
    }

    return new Build(parameters[0]);
}
