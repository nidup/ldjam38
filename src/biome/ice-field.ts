import { Biome } from './biome';
import { Output } from '../terminal/output';

export class IceField implements Biome {
    public name: string = 'ice-field';
    public type: string = 'Ice field';
    public description: string = 'An ice field.';

    private searched: boolean = false;
    private searchedCount: number = 0;
    private forestDestroyed: boolean = false;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.forestDestroyed) {
            output.writeToTerminal("You recently destoyed forest, the ground " +
                "is just full of dirt. Next time, think before " +
                "cutting all the trees.");
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (99): 7% ...');
                output.displayToMonitor('scenes/ice-field', 0.10);
            }, 1000*1);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (99): 28% ...');
                output.displayToMonitor('scenes/ice-field', 0.25);
            }, 1000*2);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (99): 59% ...');
                output.displayToMonitor('scenes/ice-field', 0.53);
            }, 1000*3);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (99): 81% ...');
                output.displayToMonitor('scenes/ice-field', 0.78);
            }, 1000*4);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (99): 100% ...');
                output.displayToMonitor('scenes/ice-field', 1);
                output.writeToTerminal('Done.');
            }, 1000*5);
        }

        if (this.searchedCount == 1) {
            output.writeToTerminal("This forest is full of snow, you move some snow and find many vegetables.");
        }
        if (this.searchedCount == 2) {
            output.writeToTerminal("More details");
        }
        if (this.searchedCount > 2) {
            output.writeToTerminal("Full details");
        }
    }
}
