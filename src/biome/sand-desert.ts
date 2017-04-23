
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class SandDesert implements Biome {
    public name: string = 'sand-desert';
    public type: string = 'Sand Desert';
    public description: string = 'Hot wind and sand aren’t good mix for my core processors. But the view of the dunes… I wish you were with me to see this.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('This shape in the horizon is unusual in the desert relief.');
                break;

            case 2:
                output.writeToTerminal('The more I follow this shape, the further it looks..');
                break;

            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) {
        output.writeToTerminal('I have terraformed a lot of dunes, it now looks like a giant beach.');
    }
}
