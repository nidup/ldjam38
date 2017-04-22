
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class Grassland implements Biome {
    public name: string = 'grassland';
    public type: string = 'Grassland';
    public description: string = 'What a beautiful place. The blue sky, the shiny sun, the soft wind… It is a call for meditation. 00001001010100101010101111';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.writeToTerminal("It is a perfect place to build a little house, in this little prairie. I’ll send you the blue prints.");
        }
        if (this.searchedCount == 2) {
            output.writeToTerminal("More details");
        }
        if (this.searchedCount > 2) {
            output.writeToTerminal("Full details");
        }
    }
}
