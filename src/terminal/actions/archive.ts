import { Action } from '../action';
import { Output } from '../output';
import Play from '../../states/Play';
import { GatheredData, ImageFile, SoundFile } from '../../gathered-data';

class Archive implements Action {
    name: string;
    action: string;
    filename: string;

    constructor(action: string, filename: string = null) {
        this.name = 'archive';
        this.action = action;
        this.filename = filename;
    }

    execute(state: Play, output: Output) {
        switch (this.action) {
            case 'ls':
                return this.ls(state, output);

            case 'open':
                return this.open(state, output);

            default:
                throw 'Usage: archive ls, archive open <name>';
        }
    }

    private ls(state: Play, output: Output) {
        return new Promise((resolve) => {
            let timeout = 100;
            if (state.gatheredData.length === 0) {
                throw 'You have no data in your archive.';
            }
            for (let i in state.gatheredData) {
                setTimeout(() => {
                    output.writeToTerminal('- ' + state.gatheredData[i].name);
                }, timeout * parseInt(i));
            }

            setTimeout(() => resolve(), timeout*(state.gatheredData.length + 1));
        });
    }

    private open(state: Play, output: Output) {
        return new Promise((resolve) => {
            if (null === this.filename) {
                throw 'Please, specify an archive to display.'
            }

            const archive = state.gatheredData.find((file: GatheredData) => file.name === this.filename);
            if (!archive) {
                throw 'Cannot find archive "' + this.filename + '".';
            }

            if (archive instanceof ImageFile) {
                output.writeToTerminal('Displaying "' + archive.name + '" on monitor...');
                output.displayToMonitor(archive.path, 1);
            }

            if (archive instanceof SoundFile) {
                output.writeToTerminal('Playing "' + archive.name + '" on speaker...');
                output.playCapture(archive.path);
            }

            resolve();
        });
    }
}

export function ArchiveActionFactory(parameters: string[]) {
    if (parameters.length === 0) {
        throw 'Usage: archive ls, archive open <name>';
    }

    if (parameters.length === 1) {
        return new Archive(parameters[0]);
    }

    if (parameters.length === 2) {
        return new Archive(parameters[0], parameters[1]);
    }

    if (parameters.length > 2) {
        throw 'Usage: archive ls, archive open <name>';
    }
}
