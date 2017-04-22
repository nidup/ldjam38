
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class Ocean implements Biome {
    public name: string = 'ocean';
    public type: string = 'Ocean';
    public description: string = 'Well I can’t swim. Do you ?';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.write("Don’t count on me to dip a wheel in the water.");
        }
        if (this.searchedCount == 2) {
            output.write("More details");
        }
        if (this.searchedCount > 2) {
            output.write("Full details");
        }
    }
}