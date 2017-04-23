
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class SeaShore implements Biome {
    public name: string = 'sea-shore';
    public type: string = 'Sea Shore';
    public description: string = 'Well, I can’t swim. Can you ?';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        switch (this.searchedCount) {
            case 1:
                output.writeToTerminal('There is powerful wind on this wide white sand beach, I\'m struggling to stand on my wheels.');

            case 2:
                output.writeToTerminal('Don’t count on me to dip a wheel in the water.');

            case 3:
                output.writeToTerminal('I’m starting to have sand in my pipes...');

            default:
                output.writeToTerminal('Nothing more to add.');
        }
    }

    build(output: Output) {
        output.writeToTerminal('Not an easy job, but it’s working.');
    }
}
