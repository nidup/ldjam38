
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class SeaShore implements Biome {
    public name: string = 'sea-shore';
    public type: string = 'Sea Shore';
    public description: string = 'Well I can’t swim. Do you ?';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.writeToTerminal("Don’t count on me to dip a wheel in the water.");
            output.writeToTerminal("Uploading one photo...");
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (109): 5% ...');
                output.displayToMonitor('scenes/sea-shore', 0.10);
            }, 1000*1);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (109): 25% ...');
                output.displayToMonitor('scenes/sea-shore', 0.25);
            }, 1000*2);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (109): 53% ...');
                output.displayToMonitor('scenes/sea-shore', 0.53);
            }, 1000*3);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (109): 78% ...');
                output.displayToMonitor('scenes/sea-shore', 0.78);
            }, 1000*4);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (109): 100% ...');
                output.displayToMonitor('scenes/sea-shore', 1);
                output.writeToTerminal('Done.');
            }, 1000*5);
        }
        if (this.searchedCount == 2) {
            output.writeToTerminal("More details");
        }
        if (this.searchedCount > 2) {
            output.writeToTerminal("Full details");
        }
    }
}
