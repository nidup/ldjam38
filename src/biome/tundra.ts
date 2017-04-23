
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class Tundra implements Biome {
    public name: string = 'tundra';
    public type: string = 'Tundra';
    public description: string = 'I will call it tundra. Nothing but infinite landscape where fragile plants and bush grow despite the continuous polar cold wind.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('This little plant is trapped in the frost.');
                break;

            case 2:
                output.writeToTerminal('The topographic analysis indicates a rich underground, it must be at least a million years old.');
                break;

            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) {
                output.writeToTerminal('Pipeline network is finished. Should we talk about this last remaining bolt?..');
    }
}
