
import { Biome,BaseBiome } from './biome';
import { Output } from '../terminal/output';

export class Tundra extends BaseBiome implements Biome {
    public name: string = 'tundra';
    public type: string = 'Tundra';
    public description: string = 'I will call it tundra. Nothing but infinite landscape where fragile plants and bush grow despite the continuous polar cold wind.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.write("This little plant is trapped in the frost.");
        }
        if (this.searchedCount == 2) {
            output.write("More details");
        }
        if (this.searchedCount > 2) {
            output.write("Full details");
        }
    }
}
