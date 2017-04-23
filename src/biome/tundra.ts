
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class Tundra implements Biome {
    public name: string = 'tundra';
    public type: string = 'Tundra';
    public description: string = 'I will call it tundra. Nothing but infinite landscape where fragile plants and bush grow despite the continuous polar cold wind.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.writeToTerminal("This little plant is trapped in the frost.");
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (183): 5% ...');
                output.displayToMonitor('scenes/toundra', 0.10);
            }, 1000*1);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (183): 25% ...');
                output.displayToMonitor('scenes/toundra', 0.25);
            }, 1000*2);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (183): 53% ...');
                output.displayToMonitor('scenes/toundra', 0.53);
            }, 1000*3);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (183): 78% ...');
                output.displayToMonitor('scenes/toundra', 0.78);
            }, 1000*4);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (183): 100% ...');
                output.displayToMonitor('scenes/toundra', 1);
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
