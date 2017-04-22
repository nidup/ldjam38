
import { Biome,BaseBiome } from './biome';
import { Output } from '../terminal/output';

export class SandDesert extends BaseBiome implements Biome {
    public name: string = 'sand-desert';
    public type: string = 'Sand Desert';
    public description: string = 'Hot wind and sand aren’t good mix for my core processors. But the view of the dunes… I wish you were with me to see this.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.write("This shape in the horizon is unusual in the desert relief.");
        }
        if (this.searchedCount == 2) {
            output.write("More details");
        }
        if (this.searchedCount > 2) {
            output.write("Full details");
        }
    }
}
