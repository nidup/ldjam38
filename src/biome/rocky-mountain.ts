
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class RockyMountain implements Biome {
    public name: string = 'rocky-mountain';
    public type: string = 'Rocky Mountain';
    public description: string = 'It is hard for my wheels to proceed in this cliff. But I want to see what it feels like to be on top of the world.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.write("The wind is strong, but the view is clear. Really I wish you would be there with me.");
        }
        if (this.searchedCount == 2) {
            output.write("More details");
        }
        if (this.searchedCount > 2) {
            output.write("Full details");
        }
    }
}