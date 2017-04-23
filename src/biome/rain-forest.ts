
import { Biome } from './biome';
import { Output } from '../terminal/output';

export class RainForest implements Biome {
    public name: string = 'rain-forest';
    public type: string = 'Rain Forest';
    public description: string = 'These trees are really big the sun is hiding behind leafs. Humidity is way high for my integrated circuits. No I’m not a complaining robots.';

    private searched: boolean = false;
    private searchedCount: number = 0;

    public search(output: Output) {
        this.searched = true;
        this.searchedCount++;

        if (this.searchedCount == 1) {
            output.writeToTerminal("Like a feeling of being observed by some beasts. Did you hear that ?");
            output.writeToTerminal("Uploading one photo...");
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (102): 5% ...');
                output.displayToMonitor('scenes/river', 0.10);
            }, 1000*1);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (102): 25% ...');
                output.displayToMonitor('scenes/river', 0.25);
            }, 1000*2);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (102): 53% ...');
                output.displayToMonitor('scenes/river', 0.53);
            }, 1000*3);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (102): 78% ...');
                output.displayToMonitor('scenes/river', 0.78);
            }, 1000*4);
            setTimeout(function(){
                output.writeToTerminal('Uploading one photo (102): 100% ...');
                output.displayToMonitor('scenes/river', 1);
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
