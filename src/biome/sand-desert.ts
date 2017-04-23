
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

        if (this.searchedCount == 1) {
            output.writeToTerminal("This shape in the horizon is unusual in the desert relief.");
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (137): 9% ...');
                output.displayToMonitor('scenes/sand-desert', 0.10);
            }, 1000*1);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (137): 20% ...');
                output.displayToMonitor('scenes/sand-desert', 0.25);
            }, 1000*2);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (137): 51% ...');
                output.displayToMonitor('scenes/sand-desert', 0.53);
            }, 1000*3);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (137): 83% ...');
                output.displayToMonitor('scenes/sand-desert', 0.78);
            }, 1000*4);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (137): 100% ...');
                output.displayToMonitor('scenes/sand-desert', 1);
                output.writeToTerminal('Done.');
            }, 1000*5);
        }
        }
        if (this.searchedCount == 2) {
            output.writeToTerminal("More details");
        }
        if (this.searchedCount > 2) {
            output.writeToTerminal("Full details");
        }
    }
}
