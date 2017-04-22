import { Biome } from './biome';
import { Output } from '../terminal/output.ts';

export class SnowyForest implements Biome {
    public name: string = 'snowy-forest';
    public type: string = 'Snowy forest';
    public description: string = 'A snowy forest.';

    private searched: boolean = false;
    private searchedCount: number = 0;
    private forestDestroyed: boolean = false;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.forestDestroyed) {
            output.write("You recently destoyed forest, the ground " +
                "is just full of dirt. Next time, think before " +
                "cutting all the trees.")
        }

        if (this.searchedCount == 1) {
            output.write("This forest is full of snow, you move some snow and find many vegetables.");
        }
        if (this.searchedCount == 2) {
            output.write("More details");
        }
        if (this.searchedCount > 2) {
            output.write("Full details");
        }
    }
}
