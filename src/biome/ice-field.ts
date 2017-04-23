import { Biome } from './biome';
import { Output } from '../terminal/output';

export class IceField implements Biome {
    public name: string = 'ice-field';
    public type: string = 'Ice field';
    public description: string = 'I\'m freezing here, but I feel attracted by this place, don’t ask me why.';

    private searchedCount: number = 0;

    public search(output: Output) {
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal("My instruments are going crazy.");
                break;

            case 2:
                output.writeToTerminal("It’s getting really cold down here, I can’t wear mittens!");
                break;

            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) { }
}
