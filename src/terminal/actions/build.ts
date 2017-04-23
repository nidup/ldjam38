import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { Biome } from '../../biome/biome';
import { Tundra } from '../../biome/tundra';
import { SandDesert } from '../../biome/sand-desert';
import {RockyMountain} from "../../biome/rocky-mountain";

class Build implements Action {
    name: string = 'build';
    module: string;

    constructor(module: string) {
        this.module = module;
    }

    execute(state: Play, output: Output) {
        switch (this.module) {
            case 'extractor':
                if (state.currentLocation instanceof Tundra || state.currentLocation instanceof SandDesert) {
                    const installedModule = state.installedModules.find((installed) => installed.name === this.module);
                    if (undefined !== installedModule) {
                        throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                    }

                    return this.build(output, () => {
                        state.installedModules.push({
                            name: this.module,
                            location: state.currentLocation
                        });
                    });
                }
                throw 'Cannot install module "' + this.module + '" in "' + state.currentLocation.type + '".';

            case 'communication':
                if (state.currentLocation instanceof RockyMountain) {
                    const installedModule = state.installedModules.find((installed) => installed.name === this.module);
                    if (undefined !== installedModule) {
                        throw 'Module "' + installedModule.name + '" already installed in "' + installedModule.location.type + '".';
                    }

                    return this.build(output, () => {
                        state.installedModules.push({
                            name: this.module,
                            location: state.currentLocation
                        });
                    });
                }
                throw 'Cannot install module "' + this.module + '" in "' + state.currentLocation.type + '".';

            default:
                throw 'Unknown module "' + this.module + '".';
        }
    }

    private build(output: Output, callback) {
        output.writeToTerminal('Setting up the ' + this.module + '...');
        for (var i = 0; i <= 10; i++) {
            const j = i;
            setTimeout(() => output.writeToTerminal(j*10 + '%'), j*100);
        }
        setTimeout(() => {
            output.writeToTerminal(this.module.charAt(0).toUpperCase() + this.module.slice(1) + ' installed successfully!');
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
